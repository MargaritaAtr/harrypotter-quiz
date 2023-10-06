const questions = [
    {
        question:"What is the name of Harry Potter's best friend?",
        answers: [
            { text :"Hermione Granger", correct: false},
            { text :"Draco Malfoy", correct: false},
            { text :"Ron Weasley", correct: true},
            { text :"Luna Lovegood", correct: false},
        ]
    },
    {
        question:"What magical sport is played on broomsticks in the wizarding world?",
        answers: [
            { text :"Broomstick Racing", correct: false},
            { text :"Wand Dueling", correct: false},
            { text :"Quidditch", correct: true},
            { text :"Potion Brewing", correct: false},
        ]
    },
    {
        question:"Who is the headmaster of Hogwarts during Harry Potter's time at school?",
        answers: [
            { text :"Rubeus Hagrid", correct: false},
            { text :"Severus Snape", correct: false},
            { text :"Albus Dumbledore", correct: true},
            { text :"Dolores Umbridge", correct: false},
        ]
    },
    {
        question:"What is the primary currency used in the wizarding world?",
        answers: [
            { text :"Galleons", correct: true},
            { text :"Dollars", correct: false},
            { text :"Euros", correct: false},
            { text :"Pounds", correct: false},
        ]
    },
    {
        question:"What is the core of Voldemort's wand??",
        answers: [
            { text :"Phoenix feather", correct: true},
            { text :"Dragon heartstring", correct: false},
            { text :"Thestral hair", correct: false},
            { text :"Veela hair", correct: false},
        ]
    },
    {
        question:"What is the name of the train that takes students to Hogwarts?",
        answers: [
            { text :"Knight Bus", correct: false},
            { text :"The Hogwarts Express", correct: true},
            { text :"The Floo Network", correct: false},
            { text :"The Broomstick Express", correct: false},
        ]
    },
    {
        question:"What spell is used to disarm an opponent and make them release whatever they are holding?",
        answers: [
            { text :"Expelliarmus", correct: true},
            { text :" Wingardium Leviosa", correct: false},
            { text :"Lumos", correct: false},
            { text :"Sectumsempra", correct: false},
        ]
    },
    {
        question:"What is the name of Harry's father?",
        answers: [
            { text :"James Potter", correct: true},
            { text :"Sirius Black", correct: false},
            { text :"Remus Lupin", correct: false},
            { text :"Peter Pettigrew", correct: false},
        ]
    },
    {
        question:"What object does Harry inherit from Sirius Black",
        answers: [
            { text :"A time-turner", correct: false},
            { text :"The Marauder's Map", correct: true},
            { text :"A broomstick", correct: false},
            { text :"A vanishing cabinet", correct: false},
        ]
    },
    {
        question:"What is the Marauder's Map used for?",
        answers: [
            { text :"Revealing the layout of Hogwarts and the location of people within it.", correct: true},
            { text :"Brewing powerful potions", correct: false},
            { text :"Flying without a broomstick", correct: false},
            { text :"aming magical creatures", correct: false},
        ]
    },
]
 const question = document.getElementById('question');
 const answerButtons = document.getElementById('answers');
 const nextButton = document.getElementById('next');

 let currentQuestionIndex = 0;
 let score = 0;

 function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
 }

 function showQuestion(){
    resetQuiz();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    question.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
         button.addEventListener('click', selectAnswer);   
    });
 }

 function resetQuiz(){
    nextButton.style.dispaly = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }
function selectAnswer(a){
    const selectBtn = a.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect) {
        selectBtn.classList.add('correct');
    }else{
        selectBtn.classList.add('incorrect');
    }
  }



 startQuiz();

