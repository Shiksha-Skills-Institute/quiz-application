const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        answer: 0
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    }
];

var question = document.querySelector('.question');
var optionsContainer = document.querySelector('.options-container')

setupQuiz(questions);

function setupQuiz(questions) {
    question.innerHTML = questions[2].question;
    optionsContainer.innerHTML = `
        <button>${questions[2].options[0]}</button>
        <button>${questions[2].options[1]}</button>
        <button>${questions[2].options[2]}</button>
        <button>${questions[2].options[3]}</button>
    `
}