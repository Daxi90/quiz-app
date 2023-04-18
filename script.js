let questions = [
  {
    question: "Was ist schwerer als ein Kilo, aber leichter als ein Pfund?",
    answer_1: "Ein Witz",
    answer_2: "Eine Feder",
    answer_3: "Eine Banane",
    answer_4: "Ein Einhorn",
    right_answer: 1,
  },
  {
    question: "Was ist der Lieblingssport von Spinnen?",
    answer_1: "Webdesign",
    answer_2: "Klettern",
    answer_3: "Basketball",
    answer_4: "Gymnastik",
    right_answer: 1,
  },
  {
    question: "Warum hat der Mathematikbuch traurig geschaut?",
    answer_1: "Es hatte zu viele Probleme",
    answer_2: "Es wurde ignoriert",
    answer_3: "Es war nicht in der Stimmung",
    answer_4: "Es war eifersüchtig auf das Deutschbuch",
    right_answer: 4,
  },
  {
    question: "Was wird immer größer, je mehr du davon wegnimmst?",
    answer_1: "Ein Loch",
    answer_2: "Eine Wassermelone",
    answer_3: "Ein Ballon",
    answer_4: "Eine Katze",
    right_answer: 1,
  },
  {
    question: "Was passiert, wenn man einen Vogel mit einem Flugzeug kreuzt?",
    answer_1: "Man bekommt einen fliegenden Vogel",
    answer_2: "Man bekommt einen fliegenden Flugzeug",
    answer_3: "Man bekommt einen fliegenden Vogel und ein fliegendes Flugzeug",
    answer_4: "Es ist unmöglich, einen Vogel mit einem Flugzeug zu kreuzen",
    right_answer: 4,
  },
  {
    question: "Was ist ein Mathematiklehrer ohne Probleme?",
    answer_1: "Arbeitslos",
    answer_2: "Ein Magier",
    answer_3: "Unmöglich",
    answer_4: "Eine Legende",
    right_answer: 2,
  },
  {
    question:
      "Was war der erste Gedanke von Einstein, als er die Relativitätstheorie entdeckte?",
    answer_1: "E=mc²",
    answer_2: "Wow, das ist genial!",
    answer_3: "Ich brauche einen Kaffee",
    answer_4: "Meine Haare sehen furchtbar aus",
    right_answer: 3,
  },
  {
    question: "Was haben ein Buch und ein Strand gemeinsam?",
    answer_1: "Beide sind entspannend",
    answer_2: "Beide sind geduldig",
    answer_3: "Beide haben Seiten",
    answer_4: "Beide haben Sand",
    right_answer: 4,
  },
];

let currentQuestion = 0;
let rightQuestions = 0;

function showQuestion() {
  if (currentQuestion >= questions.length) {
    console.log('ende');
    document.getElementById('endScreen').classList.remove('d-none');
    document.getElementById('question-body').classList.add('d-none');

    document.getElementById('amountOfQuestions').innerHTML = questions.length;
    document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;
    document.getElementById('header-image').src = './img/trophy.png'

  } else {
    let actualQuestion = questions[currentQuestion];

    let question = document.getElementById("question");
    let answer1 = document.getElementById("answer_1");
    let answer2 = document.getElementById("answer_2");
    let answer3 = document.getElementById("answer_3");
    let answer4 = document.getElementById("answer_4");
    let myCurrentQuestion = document.getElementById("currentQuestion");

    question.innerHTML = actualQuestion["question"];
    answer1.innerHTML = actualQuestion["answer_1"];
    answer2.innerHTML = actualQuestion["answer_2"];
    answer3.innerHTML = actualQuestion["answer_3"];
    answer4.innerHTML = actualQuestion["answer_4"];
    myCurrentQuestion.innerHTML = currentQuestion + 1;
  }
}

function answer(selection) {
  let selectedQuestionNumber = selection.slice(-1);

  let idOfRightAnswer = "answer_" + questions[currentQuestion]["right_answer"];

  if (selectedQuestionNumber == questions[currentQuestion]["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    rightQuestions++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
}

function init() {
  let totalQuestions = document.getElementById("totalQuestions");

  totalQuestions.innerHTML = questions.length;

  showQuestion();
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  resetButtons();

  showQuestion();
}

function resetButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");

  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
}
