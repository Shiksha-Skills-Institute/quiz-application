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
var optionsButtons = document.querySelectorAll('.options-container button')
var currentQuestionIndex = 0;

setupQuiz(questions);


function setupQuiz(questions) {
    if( currentQuestionIndex < questions.length ) {
        question.innerHTML = questions[currentQuestionIndex].question;
        for( var optionsCounter = 0; optionsCounter < questions[currentQuestionIndex].options.length; optionsCounter++ ){
            optionsButtons[optionsCounter].innerHTML = questions[currentQuestionIndex].options[optionsCounter];
        }
    } else {
        alert("Quiz is Completed !!")
    }
}

optionsButtons.forEach((button, index) => {
    console.log(`Button index is: ${index}`)
    button.addEventListener('click', function(){
        currentQuestionIndex++;
        setupQuiz(questions);
    })
});
