const buttons = document.querySelectorAll(".color-button")
const startButton = document.getElementById("start-button")
const statusText = document.querySelector("#status")
const startBtn = document.querySelector("#start-button")

let sequences = []
let userSequence = []
let level = 0
let colors = Array.from(buttons).map((button) => button.getAttribute("id"));

startButton.addEventListener("click", startGame)

buttons.forEach((button)=>{
    button.addEventListener(("click"), handleUserClick)
})

function startGame(){
    level = 0
    sequences = []
    userSequence = []
    startBtn.classList.add("gone")
    nextLevel()
}

function nextLevel(){
    userSequence = []
    level++
    statusText.textContent = "Level " + level
    sequences.push(getRandomColor())
    console.log(sequences)
    playSequence()
}

function getRandomColor(){
    let index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function playSequence(){
    sequences.forEach((color, index) => {
        setTimeout(()=>{
            document.getElementById(color).classList.add("active")
            setTimeout(() => document.getElementById(color).classList.remove("active"), 500);
            }, (index+1) * 500)
        })
}

function handleUserClick(event){
    event.target.classList.add("active")
    setTimeout(() => event.target.classList.remove("active"), 200);
    colorClicked = event.target.getAttribute("id")
    userSequence.push(colorClicked)

    if (userSequence[userSequence.length - 1] !== sequences[userSequence.length - 1]){
        gameOver()
    } else if (userSequence.length == sequences.length){
        nextLevel()
    }
}

function gameOver(){
    statusText.textContent = "Game Over"
    startBtn.classList.remove("gone")
}