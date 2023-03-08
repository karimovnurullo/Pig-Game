// let generateDiv = document.querySelector('.genetate-div');
let mainDiv = document.querySelector('.main');
let rollBtn = document.querySelector('.roll-btn');
let holdBtn = document.querySelector('.hold-btn');
let image = document.querySelector('.genetate-div img');
let player1CurrentDiv = document.querySelector('.player1-current-score');
let player2CurrentDiv = document.querySelector('.player2-current-score');
let player1 = document.querySelector('.main-player1');
let player2 = document.querySelector('.main-player2');
let player1ScoreDiv = document.querySelector('.player1-score');
let player2ScoreDiv = document.querySelector('.player2-score');


let player1Score = 0;
let player2Score = 0;
player1ScoreDiv.textContent = player1Score;
player2ScoreDiv.textContent = player2Score;
// PLayer 1 Current Score
let player1CurrentScore = 0;
// player1CurrentDiv.textContent = player1CurrentScore;

// PLayer 2 Current Score
let player2CurrentScore = 0;
player2CurrentDiv.textContent = player2CurrentScore;

function genetateImages(num) {
    const imageUrls = [
        './assets/images/1.png',
        './assets/images/2.png',
        './assets/images/3.png',
        './assets/images/4.png',
        './assets/images/5.png',
        './assets/images/6.png'
    ];
    const generateDiv = document.createElement('div');
    const img = document.createElement('img');
    const imageUrl = imageUrls[num - 1];
    generateDiv.className = 'genetate-div';
    img.src = imageUrl;
    generateDiv.appendChild(img);
    mainDiv.appendChild(generateDiv);
}

function currentFailed(random) {
    if(random === 1){
        player1CurrentScore = 0;
        player1CurrentDiv.textContent = player1CurrentScore;
    }
    else{
        player1CurrentScore += random;
        player1CurrentDiv.textContent = player1CurrentScore;
    }
}

function isActivePlayer(random, activePlayer, nextPlayer) {
    
    if(activePlayer == player1){

        if(random === 1){
            player1CurrentScore = 0;
            player1CurrentDiv.textContent = player1CurrentScore;
            activePlayer.classList.remove("active");
            nextPlayer.classList.add("active");
        }
        else{
            player1CurrentScore += random;
            player1CurrentDiv.textContent = player1CurrentScore;
        }
    }
    else if(activePlayer == player2){
        if(random === 1){
            player2CurrentScore = 0;
            player2CurrentDiv.textContent = player2CurrentScore;
            activePlayer.classList.remove("active");
            nextPlayer.classList.add("active");
        }
        else{
            player2CurrentScore += random;
            player2CurrentDiv.textContent = player2CurrentScore;
        }
    }
    
}

rollBtn.addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    genetateImages(randomNum);
    
    if (player1.classList.contains('active')){
        isActivePlayer(randomNum, player1, player2);
        holdBtn.addEventListener("click", ()=>{
            player1Score = player1CurrentScore;
            player1ScoreDiv.textContent = 0;
            player1ScoreDiv.textContent += player1Score;
            player2CurrentScore = 0;
            player2CurrentDiv.textContent = player1CurrentScore;
            player1.classList.remove("active");
            player2.classList.add("active");
        });
    }
    else if(player2.classList.contains('active')){
        isActivePlayer(randomNum, player2, player1);

        holdBtn.addEventListener("click", ()=>{
            player2Score = player2CurrentScore;
            player1ScoreDiv.textContent = 0;
            player2ScoreDiv.textContent = player2Score;
            player2CurrentScore = 0;
            player2CurrentDiv.textContent = player1CurrentScore;
            player2.classList.remove("active");
            player1.classList.add("active");
        });
    }
})