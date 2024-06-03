class El {
  static selector(selector) { return document.querySelector(selector) };
  static selectorAll(selector) { return document.querySelectorAll(selector) };
  static boardContainer() { return this.selector('.board-container') };
  static board() { return this.selector('.board') };
  static moves() { return this.selector('.moves') };
  static timer() { return this.selector('.timer') };
  static start() { return this.selector('button') };
  static win() { return this.selector('.win') };
}

const state = {
  gameStarted: false,
  flippedCards: 0,
  totalFlips: 0,
  totalTime: 0,
  loop: null
}

const API_TOKEN = 'API_TOKEN'

const mountUrlToCart = (sku) => {
  return `https://secure.dev.nuuvem.co/br-pt/cart/add_products?skus=${sku}&quantities=1&coupon=zampi-123`
}

// Define the API endpoint
const url = 'https://api.dev.nuuvem.co/v3/br/products';

// Function to handle API response
function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`API call failed with status ${response.status}`);
  }
  return response.json();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to fetch data from the API
async function fetchData() {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Accept': 'application/vnd.api+json',
        'Accept-Language': 'pt'
      }
    });

    const data = await handleResponse(response);
    return data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

class Game {
  static config() {
    return {
      dimensions: 4,
      emojis: ['💻', '🖥', '🎲', '🎮', '🖱', '🖲', '💽', '💾', '🕹', '☁️']
    }
  }

  static async renderCards() {
    const { dimensions, emojis } = this.config()

    const products = await fetchData();
    const fetchedProducts = products.map(product => product.attributes)

    const picks = this.pickRandom(fetchedProducts, (dimensions * dimensions) / 2)
    const items = this.shuffle([...picks, ...picks])
    // const cards = `
    //     <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
    //         ${items.map(item => `
    //             <div class="card">
    //                 <div class="card-front"></div>
    //                 <div class="card-back">${item}</div>
    //             </div>
    //         `).join('')}
    //    </div>
    // `

    const cards = `
        <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
            ${items.map(item => `
                <div class="card">
                    <div class="card-front"></div>
                    <div class="card-back"><img src="${item.images.boxshot.url}" width="100%" height="100%" /></div>
                </div>
            `).join('')}
      </div>
    `

    const parser = new DOMParser().parseFromString(cards, 'text/html')

    El.board().replaceWith(parser.querySelector('.board'))
  }

  static shuffle(array) {
    const clonedArray = [...array]

    for (let index = clonedArray.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1))
      const original = clonedArray[index]

      clonedArray[index] = clonedArray[randomIndex]
      clonedArray[randomIndex] = original
    }

    return clonedArray
  }

  static pickRandom(array, items) {
    const clonedArray = [...array]
    const randomPicks = []

    for (let index = 0; index < items; index++) {
      const randomIndex = Math.floor(Math.random() * clonedArray.length)

      randomPicks.push(clonedArray[randomIndex])
      clonedArray.splice(randomIndex, 1)
    }

    return randomPicks
  }
}

const timer = () => {
  state.totalTime++
  El.timer().innerText = `time: ${state.totalTime} sec`
}

const startGame = () => {
  state.gameStarted = true
  El.start().classList.add('disabled')

  state.loop = setInterval(() => {
      timer()
      El.moves().innerText = `${state.totalFlips} moves`
  }, 1000)
}

const flipBackCards = () => {
  const flippedCards = El.selectorAll('.flipped:not(.matched)')

  console.log(flippedCards);
  if (flippedCards[0].innerHTML === flippedCards[1].innerHTML) {
      flippedCards[0].classList.add('matched')
      flippedCards[1].classList.add('matched')
  }

  setTimeout(() => {
    document.querySelectorAll('.card:not(.matched)').forEach(card => {
        card.classList.remove('flipped')
    })

    state.flippedCards = 0
  }, 1000)
}

const wonTheGame = async (state) => {
  setTimeout(async () => {
      const products = await fetchData();
      const shuffledData = shuffleArray(products);
      const randomIndex = Math.floor(Math.random() * shuffledData.length);
      const product = shuffledData[randomIndex];

      El.boardContainer().classList.add('flipped')
      El.win().innerHTML = `
          <span class="win-text">
              You won!<br />
              with <span class="highlight">${state.totalFlips}</span> moves<br />
              under <span class="highlight">${state.totalTime}</span> seconds<br />
              <a href="${mountUrlToCart(product.attributes.sku)}" target="_blank">Buy now with discount</a><br />
              <img src="${product.attributes.images.boxshot.url}" alt="${product.attributes.name}" />
          </span>
      `

      clearInterval(state.loop)
  }, 1000)
}

const flipCard = card => {
  state.flippedCards++
  state.totalFlips++

  if (!state.gameStarted) startGame();

  if (state.flippedCards <= 2) card.classList.add('flipped');

  if (state.flippedCards === 2) flipBackCards();

  // If there are no more cards that we can flip, we won the game
  if (!El.selectorAll('.card:not(.flipped)').length) wonTheGame(state);
}

const attachEventListeners = () => {
  document.addEventListener('click', event => {
      const eventTarget = event.target
      const eventParent = eventTarget.parentElement

      if (eventTarget.className.includes('card') && !eventParent.className.includes('flipped')) {
          flipCard(eventParent)
      } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.className.includes('disabled')) {
          startGame()
      }
  })
}

Game.renderCards()
attachEventListeners()
