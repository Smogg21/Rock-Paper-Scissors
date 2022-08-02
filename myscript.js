
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getComputerChoice(copmuterVal, computerAnswer) {
  copmuterVal = getRandomInt(3);
  if (copmuterVal == 0) {
    computerAnswer = "rock";
  } else if (copmuterVal == 1) {
    computerAnswer = "paper";
  } else (computerAnswer = "scissor");
  
  return computerAnswer;
}

function getPlayerChoice(playerChoice){
  playerChoice = prompt("Insert your choice")
  return playerChoice.toLowerCase();
}

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorButton = document.querySelector('.scissor')
const container = document.querySelector ('.container')
const playerScoreSpan = document.querySelector ('.player-score')
const computerScoreSpan = document.querySelector ('.computer-score')


let computerSelection = 0
let playerSelection = 0
let computerScore = 0
let playerScore = 0

function playRound(playerSelection,computerSelection,) {
    let playerAnswer = playerSelection;  
    let pcAnswer = computerSelection;
    const outcomeDiv = document.createElement('div')
    outcomeDiv.classList.add('outcome-div')
    container.append(outcomeDiv)
  // console.log ('1 ', playerAnswer, '2 ', pcAnswer)
  if (playerAnswer == pcAnswer) {
    const p = document.createElement('p')
    p.innerText = "It's a Draw!"
    outcomeDiv.appendChild(p)
  }
  else if (playerAnswer == "rock" && pcAnswer == "scissor") {
    const p = document.createElement('p')
    p.innerText = "You win! Rock beats Scissor"
    outcomeDiv.appendChild(p)
    playerScore++
  }
  else if (playerAnswer == "rock" && pcAnswer == "paper") {
    const p = document.createElement('p')
    p.innerText ="You Lose! Paper beats Rock"
    outcomeDiv.appendChild(p)
    computerScore++
  }
  else if (playerAnswer == "paper" && pcAnswer == "scissor") {
    const p = document.createElement('p')
    p.innerText = "You Lose! Scissor beats Paper"
    outcomeDiv.appendChild(p)
    computerScore++
  }
  else if (playerAnswer == "paper" && pcAnswer == "rock") {
    const p = document.createElement('p')
    p.innerText = "You win! Paper beats Rock"
    outcomeDiv.appendChild(p)
    playerScore++
  }
  else if (playerAnswer == "scissor" && pcAnswer == "paper") {
    const p = document.createElement('p')
    p.innerText = "You win! Scissor beats Paper"
    outcomeDiv.appendChild(p)
    playerScore++
  }
  else if (playerAnswer == "scissor" && pcAnswer == "rock") {
    const p = document.createElement('p')
    p.innerText = "You Lose! Rock beats Scissor"
    outcomeDiv.appendChild(p)
    computerScore++
   }
  else {
    const p = document.createElement('p')
    p.innerText = "Please, insert a valid choice";
    outcomeDiv.appendChild(p)
  }
}

const checkForWinner = (playerScore, computerScore) => {
  console.log ('1 ', playerScore, '2 ', computerScore)
  if (playerScore  === 5) {
    const h2 = document.createElement('h2')
    h2.classList.add('player-won')
    h2.innerText = `You won! ${playerScore} to ${computerScore}. Good job beating the computer.`
    const outcomeDiv = document.createElement('div')
    outcomeDiv.classList.add('outcome-div')
    container.append(outcomeDiv)
    outcomeDiv.append(h2)
  
  }
  else if (computerScore === 5) {
    const h2 = document.createElement('h2')
    h2.classList.add('computer-won')
    h2.innerText = `You lose! ${playerScore} to ${computerScore}. Better luck next time.`
    const outcomeDiv = document.createElement('div')
    outcomeDiv.classList.add('outcome-div')
    container.append(outcomeDiv)
    outcomeDiv.append(h2)
  }
}
const updateScores = (playerScore, computerScore) => {
  playerScoreSpan.innerText = `Player Score: ${playerScore}`
  computerScoreSpan.innerText = `Computer Score: ${computerScore}`
}

rockButton.addEventListener('click', () => {
  computerSelection = getComputerChoice()
  playerSelection = 'rock'
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, computerScore)
  checkForWinner(playerScore,computerScore)
})
paperButton.addEventListener('click', () => {
  computerSelection = getComputerChoice()
  playerSelection = 'paper'
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, computerScore)
  checkForWinner(playerScore,computerScore)
})
scissorButton.addEventListener('click', () => {
  computerSelection = getComputerChoice()
  playerSelection = 'scissor'
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, computerScore)
  checkForWinner(playerScore,computerScore)
})

// let playerPoints =0;
// let pcPoints =0;
// function game() {
//   playerPoints =0;
//   pcPoints =0;
//   for (let i = 0; i < 5; i++) {
//     let letTheRoundBegin = playRound();
//     console.log (letTheRoundBegin);
//     if (letTheRoundBegin.includes("win")){
//       playerPoints++;
//       console.log("Player points:" + playerPoints)
//     }
//     else if (letTheRoundBegin.includes("Lose")){
//       pcPoints++;
//       console.log("Pc points:"+ pcPoints)
//     }
//   }
//   if (playerPoints > pcPoints) {
//     return ("Match over: Player won! " + playerPoints + " points to " + pcPoints);
//   }
//   else if (playerPoints < pcPoints) {
//     return ("Match over: Computer won! "  + pcPoints + " points to " + playerPoints);
//   }
//   else if (playerPoints == pcPoints){
//     return ("Match over: It's a Draw!");
//   }
// }
