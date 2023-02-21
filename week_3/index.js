const DocumentIds = {
    QuestionField: 'question-field',
    AnswerField: 'answer-field'
}

const Result = {
    Correct: "Correct",
    Incorrect: "Incorrect",
    Unanswered: ""
}

const OperationsMap = {
    1: {
        symbol: "+",
        execute: (a,b) => a + b
    },
    2: {
        symbol: "-",
        execute: (a,b) => a - b
    },
    3: {
        symbol: "*",
        execute: (a,b) => a * b
    },
    4: {
        symbol: "/",
        execute: (a,b) => a / b
    }
}

const questionField = document.getElementById(DocumentIds.QuestionField);
const answerField = document.getElementById(DocumentIds.AnswerField);
const resultField = document.getElementById('result-field');
const questionContainer = document.getElementsByClassName("question-container")[0];
const resultContainer = document.getElementsByClassName("result-container")[0];
const scoreElement = document.getElementById("score");

let number1 = 0;
let number2 = 0;
let operation = OperationsMap[1]
let answer = 0;
let score = 0;

/**
 * @type {typeof Result}
 */
let result = Result.Unanswered

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getQuestion() {
    number1 = getRandomInt(1,10);
    number2 = getRandomInt(1,10);
    operation = OperationsMap[getRandomInt(1,4)];

    return `${number1} ${operation.symbol} ${number2}`;
}


function handleSubmitClick() {
    const userAnswer = answerField.value
    const answer = operation.execute(number1, number2)

    try {
        const userAnswerParsed = parseInt(userAnswer)
        result = userAnswerParsed === answer ? Result.Correct : Result.Incorrect;

        if (result === Result.Correct) {
            score++;
            scoreElement.innerText = score;
        }

    } catch (e) {
        console.error("User answer is not a number")
    }

    if (result !== Result.Unanswered) {
        resultField.innerText = result;
        resultField.dataset.result = result;

        questionContainer.dataset.hidden = true;
        resultContainer.dataset.hidden = false;
    }

    setTimeout(() => {
        // Generate new question
        questionField.innerText = getQuestion();

        // Reset fields
        answerField.value = "";
        resultField.dataset.result = Result.Unanswered;
        resultField.innerText = Result.Unanswered;
        questionContainer.dataset.hidden = false;
        resultContainer.dataset.hidden = true;
    }, 2000)
}

document.addEventListener("DOMContentLoaded", () => {
    questionField.innerText = getQuestion();
})





