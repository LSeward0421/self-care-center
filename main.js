// user selets affirm/matra then presses receive message
// meditation icon is hidden and message chosen is displayes (need hidden class)
// need selectors for radio buttons, receive message, message chose and the meditation image?

// query selectors


var affirmationBtn = document.querySelector(".radio-button-a");
var mantraBtn = document.querySelector(".radio-button-m");
var receiveMessageBtn = document.querySelector(".receive-msg-button");
var loginBtn = document.querySelector(".login-button")


var medImage = document.querySelector(".meditation-image");
var message = document.querySelector(".display-message");
var mainPage = document.querySelector(".main-page")
var loginPage = document.querySelector(".login-page")
var loginName = document.getElementById("username")
var greeting = document.querySelector(".greeting")

// event listeners

receiveMessageBtn.addEventListener("click", createDisplayMessage);
loginBtn.addEventListener("click", sayGreeting)


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
  event.preventDefault()
  switchLogintoMainPage()
  var userName = loginName.value;
  greeting.innerText = `Well hi there, ${userName}! This moment is just for YOU.`
  
}

function hideImg() {
  medImage.classList.add('hidden');
}

function unhideMsg() {
  message.classList.remove('hidden');
}

function switchLogintoMainPage() {
  loginPage.classList.add('hidden')
  mainPage.classList.remove('hidden')
}

// Login page: Main page hidden, Will need to add a form where a user can submit their name
// after submitting name the login page will hide and main page will show with greeting utilizing their name
// need querys for: login btn, selection section or main? view, login section, name input, and greeting?
// functions for greeting, hiding main/login
