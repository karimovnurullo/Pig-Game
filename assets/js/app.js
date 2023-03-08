// let generateDiv = document.querySelector('.genetate-div');
let mainDiv = document.querySelector('.main');
let rollDiv = document.querySelector('.roll-btn');
let image = document.querySelector('.genetate-div img');
let player1CurrentDiv = document.querySelector('.player1-current-score');
let player2CurrentDiv = document.querySelector('.player2-current-score');


// PLayer 1 Current Score
let player1CurrentScore = 0;
player1CurrentDiv.textContent = player1CurrentScore;

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

function isActivePlayer() {
    
}

rollDiv.addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    genetateImages(randomNum);
})