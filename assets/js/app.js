'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('active');
    player1El.classList.toggle('active');
};

btnRoll.addEventListener('click', function () {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `./assets/images/${dice}.png`;
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(
                `current--${activePlayer}`
            ).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden');

            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init);



const submit = document.querySelector('.submit'),
    input1 = document.querySelector('.input-1'),
    input2 = document.querySelector('.input-2'),
    player1Name = document.querySelector('.player-name1'),
    player2Name = document.querySelector('.player-name2'),
    mainDiv = document.querySelector('.main'),
    loginDiv = document.querySelector('.log-in');

submit.addEventListener('click', () => {
    let player1Value;
    let player2Value;
    if (player1Value === "") {
        input1.style.border = "1px solid red";
        
    } else if (player2Value === "") {
        input1.style.border = "1px solid red";
    }
    else{
        player1Value = input1.value;
        player2Value = input2.value;
    }
    if (player1Value && player2Value) {
        player1Name.textContent = player1Value;
        player2Name.textContent = player2Value;
        mainDiv.style.display = "flex";
        loginDiv.style.display = "mone";
    }

});

// let generateDiv = document.querySelector('.genetate-div');
// let mainDiv = document.querySelector('.main');
// let rollBtn = document.querySelector('.roll-btn');
// let holdBtn = document.querySelector('.hold-btn');
// let image = document.querySelector('.genetate-div img');
// let player1CurrentDiv = document.querySelector('.player1-current-score');
// let player2CurrentDiv = document.querySelector('.player2-current-score');
// let player1 = document.querySelector('.main-player1');
// let player2 = document.querySelector('.main-player2');
// let player1ScoreDiv = document.querySelector('.player1-score');
// let player2ScoreDiv = document.querySelector('.player2-score');


// let player1Score = 0;
// let player2Score = 0;
// player1ScoreDiv.textContent = player1Score;
// player2ScoreDiv.textContent = player2Score;
// // PLayer 1 Current Score
// let player1CurrentScore = 0;
// player1CurrentDiv.textContent = player1CurrentScore;

// // PLayer 2 Current Score
// let player2CurrentScore = 0;
// player2CurrentDiv.textContent = player2CurrentScore;

// function genetateImages(num) {
//     const imageUrls = ['./assets/images/1.png', './assets/images/2.png', './assets/images/3.png', './assets/images/4.png', './assets/images/5.png', './assets/images/6.png'];
//     const generateDiv = document.createElement('div');
//     const img = document.createElement('img');
//     const imageUrl = imageUrls[num - 1];
//     generateDiv.className = 'genetate-div';
//     img.src = imageUrl;
//     generateDiv.appendChild(img);
//     mainDiv.appendChild(generateDiv);
// }

// rollBtn.addEventListener('click', () => {
//     const randomNum = Math.floor(Math.random() * 6) + 1;
//     genetateImages(randomNum);
//     // console.log(randomNum);

//     if (player1.classList.contains("active")) {
//         if (randomNum != 1) {
//             player1CurrentScore += randomNum;
//             player1CurrentDiv.textContent = player1CurrentScore;
//             holdBtn.addEventListener("click", () => {
//                 console.log("Add", player1CurrentScore);
//                 player1Score += randomNum;
//                 player1ScoreDiv.textContent = player1Score;
//                 player1CurrentDiv.textContent = 0;
//                 player1.classList.remove("active");
//                 player2.classList.add("active");
//             })
//         } else {
//             player1CurrentScore = 0;
//             player1CurrentDiv.textContent = player1CurrentScore;
//             player1.classList.remove("active");
//             player2.classList.add("active");
//         }
//     }
//     if (player2.classList.contains("active")) {
//         if (randomNum != 1) {
//             player2CurrentScore += randomNum;
//             player2CurrentDiv.textContent = player2CurrentScore;
//             holdBtn.addEventListener("click", () => {
//                 console.log("Add", player2CurrentScore);
//                 player2Score += randomNum;
//                 player2ScoreDiv.textContent = player2Score;
//                 player2CurrentDiv.textContent = 0;
//                 player2.classList.remove("active");
//                 player1.classList.add("active");
//             })
//         } else {
//             player2CurrentScore = 0;
//             player2CurrentDiv.textContent = player2CurrentScore;
//             player2.classList.remove("active");
//             player1.classList.add("active");
//         }
//     }
// })