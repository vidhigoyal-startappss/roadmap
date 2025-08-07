const questions = [
  {
    question: "Which of the following is NOT a valid JavaScript data type?",
    answers: ["String", "Number", "Character", "Boolean"],
    correct: "Character"
  },
  {
    question: "What is the purpose of useEffect in React?",
    answers: ["To update the state directly", "To run side effects like data fetching", "To define props", "To create components"],
    correct: "To run side effects like data fetching"
  },
  {
    question: "In Node.js, which module is used to create a web server?",
    answers: ["fs", "http", "os", "path"],
    correct: "http"
  },
  {
    question: "Which MongoDB method is used to insert a single document?",
    answers: ["insertOne()", "insertMany()", "save()", "create()"],
    correct: "insertOne()"
  },
  {
    question: "In Express.js, what does req.params contain?",
    answers: [" Query string parameters", "Route parameters", "Headers", "Middleware data"],
    correct: "Route paramenters"
  }
]

let currentQuestion = 0
let score = 0

const questionEl = document.getElementById("question")
const answersEl = document.getElementById("answers")
const nextBtn = document.getElementById("next-btn")
const scoreContainer = document.getElementById("score-container")
const scoreText = document.getElementById("score")
const restartBtn = document.getElementById("restart-btn")

function showQuestion() {
  resetState()
  const q = questions[currentQuestion]
  questionEl.textContent = q.question
  q.answers.forEach(answer => {
    const btn = document.createElement("button")
    btn.textContent = answer
    btn.addEventListener("click", selectAnswer)
    answersEl.appendChild(btn)
  })
}

function resetState() {
  nextBtn.classList.add("hide")
  while (answersEl.firstChild) {
    answersEl.removeChild(answersEl.firstChild)
  }
}

function selectAnswer(e) {
  const selected = e.target.textContent
  const correct = questions[currentQuestion].correct
  if (selected === correct) score++
  Array.from(answersEl.children).forEach(btn => {
    btn.disabled = true
    if (btn.textContent === correct) {
      btn.style.background = "#008e51"
    } else {
      btn.style.background = "#ff0000a1"
    }
  })
  nextBtn.classList.remove("hide")
}

function showScore() {
  document.getElementById("question-container").classList.add("hide")
  scoreContainer.classList.remove("hide")
  scoreText.textContent = `${score} / ${questions.length}`
}

nextBtn.addEventListener("click", () => {
  currentQuestion++
  if (currentQuestion < questions.length) {
    showQuestion()
  } else {
    showScore()
  }
})

restartBtn.addEventListener("click", () => {
  currentQuestion = 0
  score = 0
  scoreContainer.classList.add("hide")
  document.getElementById("question-container").classList.remove("hide")
  showQuestion()
})

showQuestion()
