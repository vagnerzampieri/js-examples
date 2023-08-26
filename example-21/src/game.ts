import './styles/main.scss'

// https://github.com/juunegreiros/simmon-game

const Pad = (value: Number) => {
    const Pad = document.createElement('button')

    Pad.classList.add('pad', `pad-${value}`)

    return Pad
}

const Board = () => {
    const Board = document.createElement('div')

    Board.classList.add('board')
    Board.append(Pad(1))
    Board.append(Pad(2))
    Board.append(Pad(3))
    Board.append(Pad(4))

    return Board
}

const Game = () => {
    const Game = document.createElement('div')

    Game.setAttribute('id', 'game')
    Game.append(Board())

    return Game
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = Game().outerHTML
