// function play(){
//     // step 1 : hide the home screen ,, to hide the screen, add the 'hidden' class to the home
//     // section.

//     const getElement = document.getElementById('sec-1');
//      getElement.classList.add('hidden');

//     // step 2 : show the playground

//     const getPlayGround = document.getElementById('sec-2');
//     getPlayGround.classList.remove('hidden');
// }

function handleKeyboardEvent(event){
    const playerPressed = event.key;
//   console.log('player pressed', playerPressed);

// stop the game if player press 'esc'
if(playerPressed === 'Escape'){
    gameOver();
}

  // get the expected key press
  const currentAlphabetPress = document.getElementById('current-alphabet');
  const currentGetAlphabet = currentAlphabetPress.innerText;
  const expectedAlpha = currentGetAlphabet.toLowerCase();
  console.log(playerPressed, currentGetAlphabet);

  if(playerPressed === expectedAlpha){
    // console.log('you get a point');
    // update score:
    // 1 get the current score

//   const currentScore = getElementValueById('current-score');
//   const newScore = currentScore + 1;
//   setElementValueById('current-score', newScore);

    const currentScoreElement = document.getElementById('current-score');
    const insideText = currentScoreElement.innerText;
    const makeInt = parseInt(insideText);
    console.log(makeInt);
    // 2 increase the score by 1
    const newScore = makeInt + 1;
    // 3 show the updated score
    currentScoreElement.innerText = newScore;

    // console.log('you have pressed correctly', expectedAlpha);
    // Start a new round
     removeBackgroundColor(expectedAlpha);
    continueGame(); 

  }
  else{
    // console.log('you missed, you lost a life');
    // step 1 : get the current life
    const currentLifeScore = document.getElementById('current-life');
    const insideOfScore = currentLifeScore.innerText;
    const makeIntScore = parseInt(insideOfScore);
    // console.log(insideOfScore);

    // step 2 : reduce the life count
   const newLife = makeIntScore - 1;
    // step 3 : show the output of the current life 
    currentLifeScore.innerText = newLife;

    if(newLife === 0){
        gameOver()
    }

  }
}
// capture keyboard press
document.addEventListener('keyup', handleKeyboardEvent)

function continueGame(){
    // step 1 : generate random alphabet on screen

    const alphabets = getRandomAlphabet();
    // console.log('your random alphabet', alphabets);

    // set randomly generated alphabet to the screen (show it)
 const curentAlphabet =  document.getElementById('current-alphabet');
 curentAlphabet.innerText = alphabets;

 // set background color
 addBackgroundColor(alphabets);

}


function play(){
    // hide everything and only show the playground
    hiddenElementById('sec-1');
    showElementById('sec-2');
    hiddenElementById('sec-3')
    // reset score and life
    setElementValueById('current-life', 5);
    setElementValueById('current-score', 0);
    continueGame();
}

function gameOver(){
  hiddenElementById('sec-2');
  showElementById('sec-3');

  // update final score
  // 1. get the final score
  const finalScore = getElementValueById('current-score');
//   console.log(finalScore);
  setElementValueById('final-score', finalScore);

  // clear the last selected alphabet
const lastAlpha = getTextById('current-alphabet');
removeBackgroundColor(lastAlpha); 

}