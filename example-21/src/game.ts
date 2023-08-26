const Game = () => {
    const Game = document.createElement('div')

    Game.setAttribute('id', 'game')

    return Game
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = Game().outerHTML
