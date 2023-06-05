
document.addEventListener("DOMContentLoaded", function() {
// Gets the first message
function firstBotMessage() {
  let firstMessage = "How's it going?";
  document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

  let time = getTime();
  document.getElementById("chat-timestamp").appendChild(document.createTextNode(time));
  document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();
});



// Retrieves the response
function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
  document.getElementById("chatbox").innerHTML += botHtml;

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

// Gets the text from the input box and processes it
function getResponse() {
  let userText = document.getElementById("textInput").value;

  if (userText == "") {
      userText = "I love Code Palace!";
  }

  let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
  document.getElementById("textInput").value = "";
  document.getElementById("chatbox").innerHTML += userHtml;
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(function () {
      getHardResponse(userText);
  }, 1000);
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

  document.getElementById("textInput").value = "";
  document.getElementById("chatbox").innerHTML += userHtml;
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  // Uncomment this if you want the bot to respond to this buttonSendText event
  // setTimeout(function () {
  //     getHardResponse(sampleText);
  // }, 1000);
}

function sendButton() {
  getResponse();
}

function heartButton() {
  buttonSendText("Heart clicked!");
}

// Press enter to send a message
document.getElementById("textInput").addEventListener("keypress", function (e) {
  if (e.which == 13) {
      getResponse();
  }
  firstBotMessage();
});
