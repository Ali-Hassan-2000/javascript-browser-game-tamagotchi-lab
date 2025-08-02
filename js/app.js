/* 
// 1) Define the required variables used to track the state of the game.
// 2) Store cached element references.
// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.

// 4) The state of the game should be rendered to the user.
// 5) Handle the game over logic. 
// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.

// 7) Create reset functionality.
*/
/*-------------------------------- Constants --------------------------------*/
const state = ['boredom' = 0, 'hunger' = 0, 'sleepiness' = 0];

/*---------------------------- Variables (state) ----------------------------*/
let timer = 0;
let gameOver = 0;

/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.querySelector('#boredom-stat');
const hungerStatEl = document.querySelector('#hunger-stat'); 
const sleepinessStatEl = document.querySelector('#sleepiness-stat');

const playEl = document.querySelector('#play'); 
const feedEl = document.querySelector('#feed'); 
const sleepEl = document.querySelector('#sleep'); 

const gameMessageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#restart');

console.log(boredomStatEl);
console.log(hungerStatEl);
console.log(sleepinessStatEl);
console.log(playEl);
console.log(feedEl);
console.log(sleepEl);
console.log(gameMessageEl);
console.log(resetBtnEl);
/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/


