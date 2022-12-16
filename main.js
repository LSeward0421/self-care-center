// user selets affirm/matra then presses receive message
// meditation icon is hidden and message chosen is displayes (need hidden class)
// need selectors for radio buttons, receive message, message chose and the meditation image?

// query selectors


var affirmationBtn = document.querySelector(".radio-button-a");
var mantraBtn = document.querySelector(".radio-button-m");
var receiveMessageBtn = document.querySelector(".receive-msg-button");

var medImage = document.querySelector(".meditation-image");
var message = document.querySelector(".display-message");

// event listeners

receiveMessageBtn.addEventListener("click", createDisplayMessage);

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

function hideImg() {
  medImage.classList.add('hidden');
}

function unhideMsg() {
  message.classList.remove('hidden');
}

