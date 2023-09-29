class El {
  static selector(selector) {
    return document.querySelector(selector);
  }

  static selectorAll(selector) {
    return document.querySelectorAll(selector);
  }
}

const selectors = {
  boardContainer: El.selector('.board-container'),
  board: El.selector('.board'),
  moves: El.selector('.moves'),
  timer: El.selector('.timer'),
  start: El.selector('button'),
  win: El.selector('.win')
}

const state = {
  gameStarted: false,
  flippedCards: 0,
  totalFlips: 0,
  totalTime: 0,
  loop: null
}

const shuffle = array => {
  const clonedArray = [...array]

  for (let index = clonedArray.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1))
      const original = clonedArray[index]

      clonedArray[index] = clonedArray[randomIndex]
      clonedArray[randomIndex] = original
  }

  return clonedArray
}

const pickRandom = (array, items) => {
  const clonedArray = [...array]
  const randomPicks = []

  for (let index = 0; index < items; index++) {
      const randomIndex = Math.floor(Math.random() * clonedArray.length)

      randomPicks.push(clonedArray[randomIndex])
      clonedArray.splice(randomIndex, 1)
  }

  return randomPicks
}

const generateGame = () => {
  const dimensions = selectors.board.getAttribute('data-dimension')

  if (dimensions % 2 !== 0) throw new Error("The dimension of the board must be an even number.");

  const emojis = ['💻', '🖥', '🎲', '🎮', '🖱', '🖲', '💽', '💾', '🕹', '☁️']
  const picks = pickRandom(emojis, (dimensions * dimensions) / 2)
  const items = shuffle([...picks, ...picks])
  const cards = `
      <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
          ${items.map(item => `
              <div class="card">
                  <div class="card-front"></div>
                  <div class="card-back">${item}</div>
              </div>
          `).join('')}
     </div>
  `

  const parser = new DOMParser().parseFromString(cards, 'text/html')

  selectors.board.replaceWith(parser.querySelector('.board'))
}

const startGame = () => {
  state.gameStarted = true
  selectors.start.classList.add('disabled')

  state.loop = setInterval(() => {
      state.totalTime++

      selectors.moves.innerText = `${state.totalFlips} moves`
      selectors.timer.innerText = `time: ${state.totalTime} sec`
  }, 1000)
}

const flipBackCards = () => {
  const flippedCards = El.selectorAll('.flipped:not(.matched)')

  if (flippedCards[0].innerText === flippedCards[1].innerText) {
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

const wonTheGame = (state) => {
  setTimeout(() => {
      selectors.boardContainer.classList.add('flipped')
      selectors.win.innerHTML = `
          <span class="win-text">
              You won!<br />
              with <span class="highlight">${state.totalFlips}</span> moves<br />
              under <span class="highlight">${state.totalTime}</span> seconds
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

generateGame()
attachEventListeners()
