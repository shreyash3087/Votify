
// Script for poll creation and display

// Elements
const pollQuestion = document.getElementById('poll-question');
const addOptionButton = document.getElementById('add-option');
const createPollButton = document.getElementById('create-poll');
const pollOptions = document.getElementById('poll-options');
const optionsContainer = document.getElementById('options-container');

// Add Option Functionality
addOptionButton.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'poll-option';
    input.placeholder = `Option ${pollOptions.children.length + 1}`;
    pollOptions.appendChild(input);
});

// Create Poll Functionality
createPollButton.addEventListener('click', () => {
    const question = pollQuestion.value;
    const options = Array.from(document.querySelectorAll('.poll-option')).map(input => input.value);
    if (!question || options.some(option => !option)) {
        alert('Please fill in all fields');
        return;
    }

    // Display Poll
    document.getElementById('poll-title').innerText = question;
    optionsContainer.innerHTML = '';
    options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.innerText = option;
        optionsContainer.appendChild(optionButton);
    });
});
