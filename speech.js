const textDisplay = document.getElementById('overlay');

// initialize SpeechRecogition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// recognition.lang = 'en-US'
recognition.lang = 'en-US';

recognition.interimResults = true;
recognition.continuous = true;

// display recognized text
recognition.onresult = function(event) {
    const transcript = event.results[event.results.length - 1][0].transcript;
    textDisplay.textContent = transcript;
};

// error handling
recognition.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
};

// start speech recognition
recognition.start();

