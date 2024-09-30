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
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "J.K. Rowling"],
        answer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const optionsList = document.getElementById('optionsList');
const nextButton = document.getElementById('nextButton');
const resultContainer = document.getElementById('resultContainer');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('totalQuestions');
const restartButton = document.getElementById('restartButton');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsList.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', () => selectOption(index));
        optionsList.appendChild(li);
    });
}

function selectOption(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const allOptions = document.querySelectorAll('#optionsList li');
    
    allOptions.forEach(option => option.classList.remove('selected'));
    allOptions[selectedIndex].classList.add('selected');
    
    nextButton.disabled = false;
    nextButton.onclick = () => {
        if (selectedIndex === currentQuestion.answer) {
            score++;
        }
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
            nextButton.disabled = true;
        } else {
            showResult();
        }
    };
}

function showResult() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = questions.length;
}

restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    loadQuestion();
});

loadQuestion();
