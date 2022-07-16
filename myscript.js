
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
function playRound() {
  let playerAnswer = getPlayerChoice();
  let pcAnswer = getComputerChoice();
  if (playerAnswer == pcAnswer) {
    return ("It's a Draw!")
  }
  else if (playerAnswer == "rock" && pcAnswer == "scissor") {
    return ("You win! Rock beats Scissor")
  }
  else if (playerAnswer == "rock" && pcAnswer == "paper") {
    return ("You Lose! Paper beats Rock")
  }
  else if (playerAnswer == "paper" && pcAnswer == "scissor") {
    return ("You Lose! Scissor beats Paper")
  }
  else if (playerAnswer == "paper" && pcAnswer == "rock") {
    return ("You win! Paper beats Rock")
  }
  else if (playerAnswer == "scissor" && pcAnswer == "paper") {
    return ("You win! Scissor beats Paper")
  }
  else if (playerAnswer == "scissor" && pcAnswer == "rock") {
    return ("You Lose! Rock beats Scissor")
  }
  else {
    return ("Please, insert a valid choice");
  }
}

let playerPoints =0;
let pcPoints =0;
function game() {
  playerPoints =0;
  pcPoints =0;
  for (let i = 0; i < 5; i++) {
    let letTheRoundBegin = playRound();
    console.log (letTheRoundBegin);
    if (letTheRoundBegin.includes("win")){
      playerPoints++;
      console.log("Player points:" + playerPoints)
    }
    else if (letTheRoundBegin.includes("Lose")){
      pcPoints++;
      console.log("Pc points:"+ pcPoints)
    }
  }
  if (playerPoints > pcPoints) {
    return ("Match over: Player won! " + playerPoints + " points to " + pcPoints);
  }
  else if (playerPoints < pcPoints) {
    return ("Match over: Computer won! "  + pcPoints + " points to " + playerPoints);
  }
  else if (playerPoints == pcPoints){
    return ("Match over: It's a Draw!");
  }
}