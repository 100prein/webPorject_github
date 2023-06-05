

//DOM
document.addEventListener("DOMContentLoaded", function() {
  function getTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const time = hours + ':' + minutes;
    return time;
  }
  
  // Gets the first message
  function firstBotMessage() {
    let firstMessage = "How can I help you today?";
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

  setTimeout(function() {
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

// Press enter to send a message DOM
window.addEventListener("DOMContentLoaded", function() {
  var textInput = document.getElementById("textInput");
  if (textInput) {
    textInput.addEventListener("keydown", function(e) {
      if (e.key === "Enter") {
        e.preventDefault(); // Prevent the default behavior of the Enter key
        getResponse();
      }
    });
  }

  // Toggle chatbot visibility
  function toggleChatbot() {
    var chatIcon = document.getElementById("chat-icon");
    chatIcon.classList.toggle("fa-comments-o");
    chatIcon.classList.toggle("fa-times");
    // Add code to show/hide the chatbot based on its current visibility state
  }

  // Add event listener for chat-button
  document.getElementById("chat-button").addEventListener("click", function() {
    toggleChatbot();
  });

});

document.addEventListener("DOMContentLoaded", function() {
  function toggleChat() {
  const chatContainer = document.querySelector('.chat-bar-collapsible');
  chatContainer.classList.toggle('collapsed');
}
});

