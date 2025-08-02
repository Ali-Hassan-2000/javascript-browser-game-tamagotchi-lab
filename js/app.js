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
/* state Obj */
const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
};
/*---------------------------- Variables (state) ----------------------------*/
let timer = 0;
let gameOver = 0;
/*------------------------ Cached Element References ------------------------*/
/* game states */
const boredomStatEl = document.querySelector('#boredom-stat');
const hungerStatEl = document.querySelector('#hunger-stat'); 
const sleepinessStatEl = document.querySelector('#sleepiness-stat');
/* button elements */
const playEl = document.querySelector('#play'); 
const feedEl = document.querySelector('#feed'); 
const sleepEl = document.querySelector('#sleep'); 
/* game’s status message */
const gameMessageEl = document.querySelector('#message');
/* play again button */
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
/* game state initialized function */
const init = () => {
    /* if remove the hidden that we did in css and show the button and p after the game is ended*/
    resetBtnEl.style.visibility = 'hidden';
    gameMessageEl.style.visibility = 'hidden';
    
    /* Set the value of each stat property in state to 0. */
    Object.keys(state).forEach(i => { state[i] = 0;});
    render();

    gameOver = false;
    timer = setInterval(runGame, 2000); /* runs the rungame function every 2 sec.*/
};

/* function to display message and states */ 
const runGame = () => {
    console.log('the game is running!');
    updateStates();
    checkGameOver();
    render();
};

/* display the state array */
const render = () => {
    boredomStatEl.textContent = state.boredom;
    hungerStatEl.textContent = state.hunger;
    sleepinessStatEl.textContent = state.sleepiness;

    /* if the game is over then stop the (timer in init) function so that it stops rungame function */
    if (gameOver === true){ 
        clearInterval(timer) /* stop the time in the varible*/

        /* to remove the hidden that we did in css and show the button and p after the game is ended*/ 
        resetBtnEl.style.visibility = 'visible';
        gameMessageEl.style.visibility = 'visible';
    }
};

/* function to update the state array automatically */
const updateStates = () => {
    Object.keys(state).forEach(i => { state[i] += Math.floor(Math.random() * 4);});
};

/* function to check if all states >= 10 to set gameOver = true */
const checkGameOver = () => {
    gameOver = true; /* set it to ture first and then if one of states is less than 10 set it to false*/
    Object.keys(state).forEach(i => { 
        if (state[i] < 10){
            gameOver = false;
        }
    });
};

/* this function will be used in event lestiner. it will reset the boredom and update the states*/
const playBtnClick = (event) => {
    if (event.target.id === 'play'){
        state.boredom = 0;
    }
    if (event.target.id === 'feed'){
        state.hunger = 0;
    }
    if(event.target.id === 'sleep'){
        state.sleepiness = 0;
    }
    
    render();
};
/*----------------------------- Event Listeners -----------------------------*/
/* this event lestiner will take the user button to use the playBtnClick function */
playEl.addEventListener('click', playBtnClick);
feedEl.addEventListener('click', playBtnClick);
sleepEl.addEventListener('click', playBtnClick);

resetBtnEl.addEventListener('click', init);

init()