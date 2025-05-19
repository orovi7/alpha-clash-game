// function play(){
//     // step 1 : hide the home screen ,, to hide the screen, add the 'hidden' class to the home
//     // section.

//     const getElement = document.getElementById('sec-1');
//      getElement.classList.add('hidden');

//     // step 2 : show the playground

//     const getPlayGround = document.getElementById('sec-2');
//     getPlayGround.classList.remove('hidden');
// }

function continueGame(){
    // step 1 : generate random alphabet on screen

    const alphabets = getRandomAlphabet();
    console.log('your random alphabet', alphabets);

    // set randomly generated alphabet to the screen (show it)
 const curentAlphabet =  document.getElementById('current-alphabet');
 curentAlphabet.innerText = alphabets;

 // set background color
 addBackgroundColor(alphabets);

}


function play(){
    hiddenElementById('sec-1');
    showElementById('sec-2');
    continueGame();
}