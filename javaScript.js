const choice = ['rock' , 'paper', 'scissors']
function getComputerChoice (){
let randomIndex = Math.floor(Math.random()*choice.length)
return choice[randomIndex];
}
function playRound(playerChoice, computerSelection){
    if (playerChoice== computerSelection){
        console.log("Tie"); }
        else if ((playerChoice === 'rock' && computerSelection === 'scissors') ||
        (playerChoice === 'paper' && computerSelection === 'rock') ||
        (playerChoice === 'scissors' && computerSelection === 'paper')
      ) {
        return 'You win! ' + playerChoice + ' beats ' + computerSelection + '.';
      } else {
        return 'You lose! ' + computerSelection + ' beats ' + playerChoice + '.';
      }
    }


 const computerSelection = getComputerChoice();
function playGame(){
    for(let i = 0; i<=4; i++){
        let playerSelection = prompt("Choose: rock, paper, or scissors");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}
playGame(); 