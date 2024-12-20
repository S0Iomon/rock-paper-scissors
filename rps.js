//setTimeout(() => {console.clear()}, 5000);
let botChoose = ['rock', 'paper', 'scissors'];
let body = document.querySelector('body');
let rpsPick = document.querySelector('.pick-container');
let results = document.querySelector('.results');
let userAndBot = document.createElement('h2');
let botInputt = document.createElement('span');
let humanInput = document.createElement('naps');
let currentScore = document.createElement('span');
let resultsOfBattle = document.createElement('h2');

let finalResults;
let botAnswer;
let userAnswer;


function botInput(){
    return botChoose[Math.floor(Math.random() * 3)]
}

function getHumanInput(){
    for (let i = 0; rpsPick.children.length > i; i++){
        rpsPick.children[i].addEventListener('click', () => {
            userAnswer = rpsPick.children[i].textContent.toLowerCase(); 
            if (rounds > 5){
                rpsPick.children[i].removeEventListener('click');
            } 
            verify()
        })
    }
    botAnswer = botInput();
}
getHumanInput();

let verify = () => {
    if (userAnswer && botAnswer){
        whoWins(userAnswer, botAnswer);
    }
}
let rounds = 1;
let userScore = 0;
let botScore = 0;

function changeRounds(){
    let roundNumber = document.querySelector('#round-number').children[0];
    let previousRound = rounds;
    if (rounds > previousRound){
        roundNumber.textContent = ` ${rounds}`;
    } else {
        roundNumber.textContent = ` ${previousRound}`;
    }
}

function whoWins(user, npc){
    resultsOfBattle.setAttribute('id', 'won');
    if (user == 'rock' && npc == 'scissors'){
        resultsOfBattle.textContent = 'YOU WON!'
        userScore++
    } else if (user == 'paper' && npc =='rock'){
        resultsOfBattle.textContent = 'YOU WON!'
        userScore++
    } else if (user == 'scissors' && npc == 'paper'){
        resultsOfBattle.textContent = 'YOU WON!'
        userScore++
    } else if (user == npc){
        resultsOfBattle.setAttribute('id', 'draw');
        resultsOfBattle.textContent = 'DRAW';
        userScore
    } else {
        resultsOfBattle.setAttribute('id', 'lost');
        resultsOfBattle.textContent = 'YOU LOST :(';
        botScore++ 
    }
    changeRounds();
    rounds++
    nextRound();
}



function changeSelectedColors (selected){
    switch (selected.textContent){
        case 'rock':
            selected.style.color = 'red';
            break;
        case 'paper':
            selected.style.color = 'blue';
            break;
        case 'scissors':
            selected.style.color = '#f7ae1b';
            break;
        default:
            break;
    }
}



function nextRound(){
    humanInput.textContent = `${userAnswer}`;
    botInputt.textContent = `${botAnswer}`;
    changeSelectedColors(humanInput);
    changeSelectedColors(botInputt);
    userAndBot.textContent = `YOU picked `;
    userAndBot.append(humanInput);
    userAndBot.innerHTML += " and BOT picked ";
    userAndBot.append(botInputt);
    currentScore.textContent = `| USER: ${userScore} | | BOT: ${botScore} |`;
    results.append(userAndBot);
    results.append(resultsOfBattle);
    results.append(currentScore);
    if (rounds == 6){
        evaluation = checkScore().toUpperCase();
        showResults();
        restart();
    } else if (rounds <= 5) {
        botAnswer = botInput();
    }
}

let evaluation;

function checkScore() {
    if (userScore > botScore){
        return 'you won!';
    } else if (userScore < botScore){
        return 'you lost!';
    } else {
        return 'draw';
    }
}

function showResults() {
    resultsOfBattle.remove();
    finalResults = document.createElement('h1');
    finalResults.setAttribute('id', 'final-results');
    finalResults.textContent = evaluation;
    body.append(finalResults);
    designResults()
}

function designResults(){
    if (finalResults.textContent.match('WON')){
        finalResults.style.color = 'rgb(0, 55, 0)';
    } else if (finalResults.textContent.match('LOST')){
        finalResults.style.color = 'rgb(45, 0, 0)';
    } else {
        finalResults.style.color = 'rgb(32, 32, 32)';
    }
}


function restart(){
    let restartButton = document.createElement('button');
    restartButton.setAttribute('id', 'restart');
    restartButton.textContent = 'RESTART?';
    body.append(restartButton);
    function restartingGame () {
        location.reload();
    }
    restartButton.addEventListener('click', restartingGame);
}

