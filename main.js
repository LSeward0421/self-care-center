
// query selectors 👇

var affirmationBtn = document.querySelector(".radio-button-a");
var mantraBtn = document.querySelector(".radio-button-m");
var receiveMessageBtn = document.querySelector(".receive-msg-button");
var loginBtn = document.querySelector(".login-button");


var medImage = document.querySelector(".meditation-image");
var message = document.querySelector(".display-message");
var mainPage = document.querySelector(".main-page");
var loginPage = document.querySelector(".login-page");
var loginName = document.getElementById("username");
var greeting = document.querySelector(".greeting");

// event listeners 👇

receiveMessageBtn.addEventListener("click", createDisplayMessage);
loginBtn.addEventListener("click", sayGreeting);

// event handlers 👇

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createDisplayMessage() {
  var affirmationMsg = affirmations[getRandomIndex(affirmations)];
  var mantraMsg = mantras[getRandomIndex(mantras)];

    if (affirmationBtn.checked) {
      message.innerText = affirmationMsg;
  } else if (mantraBtn.checked) {
      message.innerText = mantraMsg;
  }

  hideImg();
  unhideMsg();
}

function sayGreeting(event) {
  event.preventDefault();
  switchLogintoMainPage();
  var userName = loginName.value;
  greeting.innerText = `Well hi there, ${userName}! This moment is just for YOU.`;
}

function hideImg() {
  medImage.classList.add('hidden');
}

function unhideMsg() {
  message.classList.remove('hidden');
}

function switchLogintoMainPage() {
  loginPage.classList.add('hidden');
  mainPage.classList.remove('hidden');
}

