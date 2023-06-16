


document.addEventListener("DOMContentLoaded", function() {
    // Code that interacts with the DOM or adds event listeners
    const chatButton = document.getElementById('chat-button');
    const chatIcon = document.getElementById('chat-icon');
    const chatbox = document.getElementById('chatbox');
    const chatInput = document.getElementById('textInput');
    const chatTimestamp = document.getElementById('chat-timestamp');
    const botStarterMessage = document.getElementById('botStarterMessage');


    // Chat button click event listener
    chatButton.addEventListener("click", function() {
      // Code to toggle the chat box visibility
    });
  
    // Send button click event listener
const sendButton = document.getElementById("send-icon");
sendButton.addEventListener("click", function() {
  // Code to handle sending the user's message
});

// Heart button click event listener
const heartButton = document.getElementById("heart-icon");
heartButton.addEventListener("click", function() {
  // Code to handle the heart button action
});

    
    // More code...
    chatButton.addEventListener('click', toggleChat);
    chatInput.addEventListener('keydown', handleInput);
    
    // Function to toggle the chat window visibility
    function toggleChat() {
      chatIcon.classList.toggle('fa-comments-o');
      chatIcon.classList.toggle('fa-times');
      chatbox.classList.toggle('active');
    }
    
    // Function to handle user input
    function handleInput(event) {
      if (event.key === 'Enter') {
        sendMessage();
      }
    }
    
    // Function to send user message and receive bot response
    function sendMessage() {
      const userMessage = chatInput.value;
      appendMessage(userMessage, 'user');
    
      // Clear the input field
      chatInput.value = '';
    
      // Get the bot's response
      const botResponse = getBotResponse(userMessage);
    
      // Simulate delay before appending bot's response
      setTimeout(() => {
        appendMessage(botResponse, 'bot');
      }, 500);
    }
    
    // Function to append a message to the chatbox
    function appendMessage(message, sender) {
      const messageContainer = document.createElement('div');
      messageContainer.classList.add('message', sender);
      messageContainer.innerHTML = `<p>${message}</p>`;
      chatbox.appendChild(messageContainer);
    
      // Scroll to the bottom of the chatbox
      chatbox.scrollTop = chatbox.scrollHeight;
    
      // Update the chat timestamp
      chatTimestamp.innerText = getCurrentTime();
    }
    
    // Function to get the bot's response based on user input
    function getBotResponse(input) {
      // Simple responses
      if (input.toLowerCase().includes('hello')) {
        return 'Hello there!';
      } else if (input.toLowerCase().includes('goodbye')) {
        return 'Talk to you later!';
      } else {
        return 'Try asking something else!';
      }
    }
    
    // Function to get the current time in a specific format
    function getCurrentTime() {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    }
    
    // Show the bot's initial message after a short delay
    setTimeout(() => {
      appendMessage(botStarterMessage.innerText, 'bot');
    }, 1000);

  });
  