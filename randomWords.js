let wordsList = [];

// AJAX  with listener
const oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://pf0.github.io/random-words/wordsList.txt");
oReq.send();
 
 // EventListener for button
let p = document.getElementById("newWordP");
let btn = document.getElementById("newWordBtn");
btn.addEventListener('click', function btnListener(event){
  displayRandomWord(p, wordsList);
});

// listener for AJAX
function reqListener() {
  wordsList = this.responseText.split(",\n");
  console.log(wordsList);
  displayRandomWord(p, wordsList);
}

// return random word from array
function getRandomWord(wordsList) {
  
  let randomWord = "";
  randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  return randomWord;
  
}

// sets p's innerHTML to randomWord
function displayRandomWord(wordLabel, wordsList) {
  let randomWord = getRandomWord(wordsList);
  
  wordLabel.innerHTML = randomWord;
  return true;
  
}