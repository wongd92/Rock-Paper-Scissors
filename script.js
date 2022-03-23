let playerScore = 0, computerScore = 0, round = 0;

const pButtons = document.querySelectorAll('.scb-button');
const score = document.getElementById('score');
const result = document.getElementById('result');
const endScreen = document.querySelector('.end-screen');
const restart = document.getElementById('restart-button');
const displayPlayerScore = document.querySelector('.player-score');
const displayComputerScore = document.querySelector('.computer-score');
const roundScore = document.getElementById('round');
const endText = document.querySelector('.game-over-text');


// 2. RETURN a random value of RPS for function computerPlay
function computerPlay(){ 
    let choices = ["s", "c", "b"];
    let computerSelection = choices[Math.floor(Math.random() 
        * choices.length)]

    return computerSelection;
}


function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie'
    }
    
    else if (playerSelection === "s") {
        if(computerSelection === "c") {
            return 'player'
        }

        else {
            return 'computer'
        }
    }

    else if (playerSelection === "c") {
        if(computerSelection === "b") {
            return 'player'
        }

        else {
            return 'computer'
        }
    }

    else if (playerSelection === "b") {
        if(computerSelection === "s") {
            return 'player'
        }

        else {
            return 'computer'
        }
    }    
} 

function displayChoices(playerChoice, computerChoice) {
    const playerImage = document.querySelector('.player-image');
    const computerImage = document.querySelector('.computer-image');

    switch(playerChoice) {
        case 's': 
            playerImage.innerHTML = `<img id="s" class="pokemon-img" src="images/squirtle.png" alt="Squirtle"></img>`;
            break;

        case 'c':
            playerImage.innerHTML = `<img id="c" class="pokemon-img" src="images/charmander.png" alt="Charmander"></img>`;
            break;

        case 'b': 
            playerImage.innerHTML = `<img id="b" class="pokemon-img" src="images/bulbasaur.png" alt="bulbasaur"></img>`;
        default:
    }

    switch(computerChoice) {
        case 's': 
            computerImage.innerHTML = `<img id="s" class="pokemon-img" src="images/squirtle.png" alt="Squirtle"></img>`;
            break;

        case 'c':
            computerImage.innerHTML = `<img id="c" class="pokemon-img" src="images/charmander.png" alt="Charmander"></img>`;
            break;

        case 'b': 
            computerImage.innerHTML = `<img id="b" class="pokemon-img" src="images/bulbasaur.png" alt="bulbasaur"></img>`;
        default:
    }
}

function displayResult(winner, playerChoice, computerChoice) {
    switch (playerChoice) {
        case 's': 
            playerChoice = "Squirtle";
            break;
        
        case 'c':
            playerChoice = "Charmander";
            break;
        
        case 'b':
            playerChoice = "Bulbasaur";
            break;

        default:
    }

    switch (computerChoice) {
        case 's': 
            computerChoice = "Squirtle";
            break;
        
        case 'c':
            computerChoice = "Charmander";
            break;
        
        case 'b':
            computerChoice = "Bulbasaur";
            break;

        default:
    }


    if (winner === "player") {
        playerScore++;
        round++;
        result.innerText = `You win! ${playerChoice} beats ${computerChoice}.`;
        roundScore.innerText = `Round: ${round}`;
    }

    else if (winner === "computer") {
        computerScore++; 
        round++;
        result.innerText = `You lose! ${playerChoice} beats ${computerChoice}.`;
        roundScore.innerText = `Round: ${round}`;
    }

    else {
        round++;
        result.innerText = `It's a draw! ${playerChoice} ties ${computerChoice}.`;
        roundScore.innerText = `Round: ${round}`;
    }

    switch(playerScore) {
        case 1:
            displayPlayerScore.innerHTML = `Player Score: <img class="pokeball" src="images/pokeball.png" alt="pokeball">`;
            break;

        case 2:
            displayPlayerScore.innerHTML = `Player Score: <img class="pokeball" src="images/pokeball.png" alt="pokeball">
                                            <img class="pokeball" src="images/pokeball.png" alt="pokeball">`;
            break;

        case 3:
            displayPlayerScore.innerHTML = `Player Score: <img class="pokeball" src="images/pokeball.png" alt="pokeball">
                                            <img class="pokeball" src="images/pokeball.png" alt="pokeball">
                                            <img class="pokeball" src="images/pokeball.png" alt="pokeball">`;
            break;

        case 4:
            displayPlayerScore.innerHTML = `Player Score: <img class="pokeball" src="images/pokeball.png" alt="pokeball">
                                            <img class="pokeball" src="images/pokeball.png" alt="pokeball">
                                            <img class="pokeball" src="images/pokeball.png" alt="pokeball">
                                            <img class="pokeball" src="images/pokeball.png" alt="pokeball">`;
            break;

        case 5:
            displayPlayerScore.innerHTML = `Player Score: <img class="pokeball" src="images/pokeball.png" alt="pokeball">
                                            <img class="pokeball" src="images/pokeball.png" alt="pokeball">
                                            <img class="pokeball" src="images/pokeball.png" alt="pokeball">
                                            <img class="pokeball" src="images/pokeball.png" alt="pokeball">
                                            <img class="pokeball" src="images/pokeball.png" alt="pokeball">`;
            break;

        default:
    }

    switch(computerScore) {
        case 1:
            displayComputerScore.innerHTML = `Computer Score: <img class="pokeball" src="images/pokeball.png" alt="pokeball">`;
            break;

        case 2:
            displayComputerScore.innerHTML = `Computer Score: <img class="pokeball" src="images/pokeball.png" alt="pokeball">
                                              <img class="pokeball" src="images/pokeball.png" alt="pokeball">`;
            break;

        case 3:
            displayComputerScore.innerHTML = `Computer Score: <img class="pokeball" src="images/pokeball.png" alt="pokeball">
                                            <img class="pokeball" src="images/pokeball.png" alt="pokeball">
                                            <img class="pokeball" src="images/pokeball.png" alt="pokeball">`;
            break;

        case 4:
            displayComputerScore.innerHTML = `Computer Score: <img class="pokeball" src="images/pokeball.png" alt="pokeball">
                                            <img class="pokeball" src="images/pokeball.png" alt="pokeball">
                                            <img class="pokeball" src="images/pokeball.png" alt="pokeball">
                                            <img class="pokeball" src="images/pokeball.png" alt="pokeball">`;
            break;

        case 5:
            displayComputerScore.innerHTML = `Computer Score: <img class="pokeball" src="images/pokeball.png" alt="pokeball">
                                            <img class="pokeball" src="images/pokeball.png" alt="pokeball">
                                            <img class="pokeball" src="images/pokeball.png" alt="pokeball">
                                            <img class="pokeball" src="images/pokeball.png" alt="pokeball">
                                            <img class="pokeball" src="images/pokeball.png" alt="pokeball">`;
            break;

        default:
    }
    
}

function gameOver(playerScore, computerScore){
    if (playerScore === 5 || computerScore === 5) {
        endScreen.style.display = 'flex';
    }

    if (playerScore > computerScore) {
        endText.innerText = "Game Over! Player Wins."
    }

    else {
        endText.innerText = "Game Over! Computer Wins."
    }
}


function restartGame() {
    restart.addEventListener('click', () => {
        window.location.reload();
    });
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('selected');
}

function playGame(e) {
    const computerChoice = computerPlay();
    const playerChoice = e.target.id;
    const winner = checkWinner(playerChoice, computerChoice);
    displayChoices(playerChoice, computerChoice);
    displayResult(winner, playerChoice, computerChoice);
    gameOver(playerScore, computerScore);
    restartGame();    
}

// Event Listeners

pButtons.forEach(button => button.addEventListener('click', playGame));

const imgTrans = document.querySelectorAll('.pokemon-img');

imgTrans.forEach(img => img.addEventListener('click', () => {
    img.classList.add('selected');
})
);

imgTrans.forEach(img => img.addEventListener('transitionend', removeTransition));