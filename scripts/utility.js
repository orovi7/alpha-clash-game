function hiddenElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function addBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');

}

function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500');
}


function getTextById(elementId){
 const element = document.getElementById(elementId);
 const text = element.innerText;
 return text;
}

// score and life function
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const value = parseInt(elementValue);
    return value;
}

function setElementValueById(elementId, value){
  const element = document.getElementById(elementId);
  element.innerText = value;
}

// get random number section is here--

function getRandomAlphabet(){
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetString.split('');
    console.log(alphabet);

    // get a random index between 0-25

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabets = alphabet[index];
    // console.log(index, alphabets);
    return alphabets;
}