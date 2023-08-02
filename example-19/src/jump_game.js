let game = document.getElementById("game");
let character = document.getElementById("character");
let block = document.getElementById("block");
let score = document.getElementById("score");
let scoreSpan = document.getElementById("scoreSpan");
let gameOver = document.getElementById("gameOver");
let restart = document.getElementById("restart");
let finalScore = document.getElementById("finalScore");
let counter=0;

game.addEventListener('click', jump);
restart.addEventListener('click', restartGame);

function counted(){
  return Math.floor(counter/100);
}

function jump(){
    if(character.classList == "animate"){ return }

    character.classList.add("animate");

    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

function restartGame(){
    location.reload();
}

function showGameOver(){
    finalScore.innerHTML = counted();
    score.style.display = "none"; // hide score
    gameOver.style.display = "block"; // show game over
    block.style.animation = "none"; // stop block
  }

let checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130){
        showGameOver();

        counter=0;
    } else {
        counter++;
        scoreSpan.innerHTML = counted();
    }
}, 10);