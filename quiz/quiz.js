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
var resultScore = document.getElementById('result-score');
var resultTable = document.querySelector('.result-table table tbody');

var currentQuestionIndex = 0;
var userAnswers = [];
var score = 0;

if( question ) {
    setupQuiz(questions);
}

function setupQuiz(questions) {
    if( currentQuestionIndex < questions.length ) {
        question.innerHTML = questions[currentQuestionIndex].question;
        for( var optionsCounter = 0; optionsCounter < questions[currentQuestionIndex].options.length; optionsCounter++ ){
            optionsButtons[optionsCounter].innerHTML = questions[currentQuestionIndex].options[optionsCounter];
        }
    } else {
        for( var questionsCounter = 0; questionsCounter < questions.length; questionsCounter++ ){
            if( userAnswers[questionsCounter] === questions[questionsCounter].answer ){
                score++;
            }
        }

        window.location.replace(`../result/index.html?score=${score}&total=${questions.length}&answers=${userAnswers.join(',')} `);
    }
}

optionsButtons.forEach((button, index) => {
    button.addEventListener('click', function(){
        userAnswers.push(index);
        currentQuestionIndex++;
        setupQuiz(questions);
    })
});

function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const queries = queryString.split("&");
    queries.forEach((query) => {
        const [key, value] = query.split("=");
        params[key] = decodeURIComponent(value);
    });
    console.log(params);
    return params;
}
const queryParams = getQueryParams();

if( resultScore ) {
    const score = queryParams['score'];
    const total = queryParams['total'];
    resultScore.innerHTML = `you got ${score}/${total} marks`;
}

if( resultTable ) {
    let resultAnswers = queryParams.answers.split(',')
    
    let tableBody = "";

    questions.forEach((item, index) => {
        tableBody += `
        <tr>
            <td>${item.question}</td>
            <td>${item.options[item.answer]}</td>
            <td>${item.options[resultAnswers[index]]}</td>
        </tr>
    `
    });
    
    resultTable.innerHTML = tableBody;
}