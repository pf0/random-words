let wordsList = ["Fernbedienung",
"Rasierschaum",
"Laderampe",
"Lichterkette",
"Rauhfasertapete",
"Tannenbaumständer",
"Siebträgermaschine",
"Lampenfassung",
"Schneeketten",
"Konfettiregen",
"Geschenkpapier",
"Wollschal",
"Schleifenbank",
"Rundumleuchte",
"Kugelbahn",
"Schaukelpferd",
"Verhaltensmuster",
"Handcreme",
"Räuchermännchen",
"Querschläger",
"Adventskalender",
"Brillenputztuch",
"Hauptgewinn",
"Wäscheklammer",
"Spiegelreflexkamera",
"Pralinenschachtel",
"Drehbuch",
"Kinderstuhl",
"Sonnenblumenöl",
"Christbaumkugel",
"Zungenkuss",
"Ladegerät",
"Schreihals",
"Glühwein",
"Osterhase",
"Teppichklopfer",
"Schokokringel",
"Vollpfosten",
"Sprudelwasser",
"Kichstarter",
"Eierlikör",
"Neujahresgruß",
"Glatteis",
"Weihnachtsgans",
"Lebkuchenherz",
"Trostpreis",
"Versuchskaninchen",
"Regalboden",
"Mistelzweig",
"Hebamme",
"Manschettenknopf",
"Schneegestöber",
"Renntier",
"Winterstiefel",
"Flussufer",
"Pfauenfeder",
"Ohrensessel",
"Verlobungsring",
"Nassrasur",
"Garagentür",
"Weihnachtspost",
"Glasreiniger",
"Intimpiercing",
"Gießkanne",
"Hackebeil",
"Tiefkühlfach",
"Treppenhaus",
"Fahrradschlauch",
"Kreißsaal",
"Mitesser",
"Sonnenbrand",
"Baumhaus",
"Sonnencreme",
"Snowboard",
"Klassenzimmer",
"Gitarrenständer",
"Erektionsstörung",
"Diktator"];

let p = document.getElementById("newWordP");
let btn = document.getElementById("newWordBtn");
btn.addEventListener('click', function btnEventHandler(event){
  displayRandomWord(p, wordsList);
});

document.addEventListener('DOMContentLoaded', function onLoad(event){
  displayRandomWord(p, wordsList);
});



function getRandomWord(wordsList) {
  
  let randomWord = "";
  randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  return randomWord;
  
}

function displayRandomWord(wordLabel, wordsList) {
  let randomWord = getRandomWord(wordsList);
  
  wordLabel.innerHTML = randomWord;
  return true;
  
}