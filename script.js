var questions = [{
        question: "Which language runs in webbrowser?",
        a: "Java",
        b: "C",
        c: "Python",


        c: "Python",
        d: "Javascript",
        answer: "d"
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cascading Simple Style",
        answer: "b"
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hyperloop Machine Language",
        c: "HyperLink Markup Language",
        d: "Hypertext Machine Language",
        answer: "a"
    }
];
var currentQuestion = 0;
var score = 0;

function loadQuestion() {
    deselectOptions();
    var q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    document.getElementById("label1").innerText = q.a;
    document.getElementById("label2").innerText = q.b;
    document.getElementById("label3").innerText = q.c;
    document.getElementById("label4").innerText = q.d;
}

function getSelected() {
    var options = document.getElementsByName("option");
    for (var opt of options) {
        if (opt.checked) return opt.value;
    }
    return null;
}

function deselectOptions() {
    var options = document.getElementsByName("option");
    for (var opt of options) {
        opt.checked = false;
    }
}



function SubmitClick() {
    var selected = getSelected();
    if (selected) {
        if (selected == questions[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            document.getElementById("quiz-box").style.display = "none";
            document.getElementById("result-box").style.display = "block";
            document.getElementById("score").innerText = score;
        }
    } else {
        alert("Please Select an answer!");
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz-box").style.display = "block";
    document.getElementById("result-box").style.display = "none";
    loadQuestion();
}
loadQuestion();