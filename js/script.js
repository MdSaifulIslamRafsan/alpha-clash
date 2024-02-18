/* document.getElementById("play-now").addEventListener("click", function () {
  const home = document.getElementById("home");
  home.classList.add("hidden");
  const playGround = document.getElementById("play-ground");
  playGround.classList.remove("hidden");
});
 */

function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = parseInt(element.innerText);
  return elementText;
}



//  click the button this element is hide
function hideElementById(idName , className) {
  const hideElement = document.getElementById(idName);
  hideElement.classList.add(className);
}
//  click the button this element is show
function showElementById(idName , className){
  const hideElement = document.getElementById(idName);
  hideElement.classList.remove(className);
}

  // add background color
 /*  function addBgColor(letterId){
    const elementId = document.getElementById(letterId);
    elementId.classList.add('bg-orange-400')
  } */



  function handleKeyBoardButtonPress(event){

    const playerPassed = event.key.toLowerCase();
    console.log(playerPassed);
    if (playerPassed === 'escape') {
      // window.close();
      hideElementById('play-ground' , 'hidden');
        showElementById('result', 'hidden');
        const totalScore = document.getElementById('total-score');
        const score = document.getElementById('score');
        const scoreInnerText = parseInt(score.innerText);
        totalScore.innerText = scoreInnerText;
    }
    

    const alphabet = document.getElementById('alphabet');
    const alphabetValue = alphabet.innerText.toLowerCase();

    // check matched or not
    if(playerPassed === alphabetValue){
      showElementById(playerPassed , 'bg-orange-400');
      hideElementById(continueGame(), 'bg-orange-400');
      // const score = document.getElementById('score');
      // const scoreInnerText = parseInt(score.innerText);
      // const newScore = scoreInnerText + 1;
      // score.innerText = newScore;
      const scoreValue = getElementValueById('score');
      const updateValue = scoreValue + 1;
      displayedArea('score' , updateValue);
      // console.log('you get a point');
      
    }else{
      // const life = document.getElementById('life');
      // const lifeInnerText = parseInt(life.innerText);
      // const newLife = lifeInnerText - 1;
      const lifeValue = getElementValueById('life');
      const newLife = lifeValue - 1;
      displayedArea('life' , newLife)
      if (newLife === 0) {
        hideElementById('play-ground' , 'hidden');
        showElementById('result', 'hidden');
        const totalScore = document.getElementById('total-score');
        const score = document.getElementById('score');
        const scoreInnerText = parseInt(score.innerText);
        totalScore.innerText = scoreInnerText;
      }
    }
  }

  document.addEventListener('keyup', handleKeyBoardButtonPress);
  
  

// continue game 
function continueGame(){
  // get random alphabet 
  const randomAlphabet = getARandomAlphabet();
  // console.log(getARandomAlphabet());
  // display random alphabet
  displayedArea('alphabet' , randomAlphabet);

  // handleKeyBoardButtonPress(randomAlphabet);

  // set background color 
  // addBgColor(randomAlphabet);
  return randomAlphabet;
}

// onclick function add
document.getElementById('play-now').addEventListener('click',function(){
  hideElementById("home" , 'hidden');
  showElementById("play-ground", 'hidden');
  continueGame();
  hideElementById(continueGame(), 'bg-orange-400');
});

function getARandomAlphabet(){
  // get or create alphabet array
  const alphabetString = 'qwertyuiopasdfghjklzxcvbnm';
  const alphabets  = alphabetString.split('');
  // get a random index between 0-25
  const randomIndex = Math.floor(Math.random() * alphabets.length);
  const randomAlphabetGenerate = alphabets[randomIndex];
  return  randomAlphabetGenerate;
}
// created a display function 
function displayedArea(idName , value){
  const displayedId = document.getElementById(idName);
   displayedId.innerText = value;
}

document.getElementById('Play-Again').addEventListener('click', function(){
  hideElementById("result" , 'hidden');
  showElementById("play-ground", 'hidden');
  displayedArea('life' , 5);
  displayedArea('score' , 0);
  const alphabet = document.getElementById('alphabet');
  const alphabetText = alphabet.innerText.toLowerCase();
  showElementById(alphabetText, 'bg-orange-400');
  alphabet.innerText = getARandomAlphabet();
  const alphabetTextCurrent = alphabet.innerText.toLowerCase();
  hideElementById(alphabetTextCurrent , 'bg-orange-400');
});


