const choice = ['rock' , 'paper', 'scissors']
function getComputerChoice (){
let randomIndex = Math.floor(Math.random()*choice.length)
return choice[randomIndex];
}
function playRound(playerChoice, computerSelection){
    if (playerChoice== computerSelection){
      resultDisplay.textContent = "It's a Tie!"; }
        else if ((playerChoice === 'rock' && computerSelection === 'scissors') ||
        (playerChoice === 'paper' && computerSelection === 'rock') ||
        (playerChoice === 'scissors' && computerSelection === 'paper')
      ) {
        resultDisplay.textContent = 'You win! ' + playerChoice + ' beats ' + computerSelection + '.';
      } else {
        resultDisplay.textContent = 'You lose! ' + computerSelection + ' beats ' + playerChoice + '.';
      }
    }
document.getElementById("rockBtn").addEventListener("click",function(){
  playRound("rock", computerSelection);
}); 

document.getElementById("paperBtn").addEventListener("click", function(){
  playRound("paper", computerSelection);
}); 
document.getElementById("scissorsBtn").addEventListener("click", function(){
  playRound("scissors", computerSelection);
});

 const computerSelection = getComputerChoice();
 function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  const rounds = 5; // Nombre de manches dans le jeu

  for (let i = 0; i < rounds; i++) {
      let playerSelection = prompt("Choose: rock, paper, or scissors");
      let computerSelection = getComputerChoice();
      let result = playRound(playerSelection, computerSelection);
      console.log(result);

      // Analyser le résultat pour mettre à jour les scores
      if (result.includes('You win')) {
          playerScore++;
      } else if (result.includes('You lose')) {
          computerScore++;
      }
  }

  // Afficher le résultat final
  console.log("Game Over!");
  console.log("Final Scores - Player: " + playerScore + " | Computer: " + computerScore);

  // Annoncer le gagnant
  if (playerScore > computerScore) {
      console.log("Congratulations! You are the winner!");
  } else if (playerScore < computerScore) {
      console.log("Oops! Computer is the winner!");
  } else {
      console.log("It's a Tie!");
  }
}

playGame(); 