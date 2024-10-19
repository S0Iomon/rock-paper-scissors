console.clear();
let botChoose = ['rock', 'paper', 'scissors'];
let userAnswer = getHumanInput();
let botAnswer = botInput();


function getHumanInput(){
    return prompt("What's your pick?").toLowerCase();
}

function botInput(){
    return botChoose[Math.floor(Math.random() * 3)]
}

let rounds = 1;
let userScore = 0;
let botScore = 0;

function whoWins(user, npc){
    console.log(`%c THIS IS ROUND ${rounds} %c`, 'background-color: #012001; color: green;  font-size:16px;');
    if (user == 'rock' && npc == 'scissors'){
        userScore++
    } else if (user == 'paper' && npc =='rock'){
        userScore++
    } else if (user == 'scissors' && npc == 'paper'){
        userScore++
    } else if (user == npc){
        userScore
    } else {
        botScore++
    }
    rounds++
    nextRound()
}

whoWins(userAnswer, botAnswer)

function nextRound(){
    console.log(`you picked %c${userAnswer.toUpperCase()}%c and the bot picked %c${botAnswer.toUpperCase()}`, 'color:#59BFFF;', 'color:white', 'color:red')
    console.warn('HERE ARE THE SCORES')
    console.log(`Yours: %c${userScore}%c \n Bot: %c${botScore}%c`, 'color:#59BFFF', 'color:white', 'color:red;');
    if (rounds > 5){
        checkScore()
    } else {
        botInput();
        userAnswer = getHumanInput();
        botAnswer = botInput();
        whoWins(userAnswer, botAnswer)  
    }
    
}

function checkScore() {
    if (userScore > botScore){
        return 'you won!';
    } else if (userScore < botScore){
        return 'you lost!';
    }
    return 'draw';
}


let evaluation = checkScore()
showResults();
function showResults() {
    console.log(`%c ${evaluation.toUpperCase()} %c`, 'color: black; background-color:white; font-size: 26px;');
    restart()
}

function restart(){
    userAnswer = prompt('Would you want to play again?')
    if (userAnswer == 'y' || 'yes'){
       location.reload()
    } else {
        console.log('THANKS FOR PLAYING!')
    }
}