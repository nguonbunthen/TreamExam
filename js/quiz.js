// ==========================================================================
// ១. ទាញយកទិន្នន័យពី URL និងកំណត់អថេរមូលដ្ឋាន
// ==========================================================================
const params = new URLSearchParams(window.location.search);
const categoryId = params.get("category") || "education";
const typeId = params.get("type") || "general";
const levelId = params.get("level"); // ទាញយកកម្រិតសិក្សា (ឧ. primary, secondary, highschool)
const category = examData.find((item) => item.id === categoryId) || examData[0];

const examTypes = [
  { id: "culture", title: "វប្បធម៌ទូទៅ" },
  { id: "language", title: "ភាសាបរទេស" },
  { id: "primary", title: "គ្រូមត្តេយ្យ និងបឋម" },
  { id: "secondary", title: "គ្រូអនុវិទ្យាល័យ" },
  { id: "highschool", title: "គ្រូវិទ្យាល័យ" },
  { id: "public-service", title: "មុខងារសាធារណៈ" },
  { id: "teacher-ethics", title: "ក្រមសីលធម៌វិជ្ជាជីវៈគ្រូបង្រៀន" },
  { id: "gov-policy", title: "គោលនយោបាយរបស់រាជរដ្ឋាភិបាល" },
  { id: "public-admin", title: "រដ្ឋបាលសាធារណៈ" },
  { id: "civics", title: "ពលរដ្ឋវិទ្យា" },
  { id: "history", title: "ប្រវត្តិសាស្ត្រកម្ពុជា" },
  { id: "geography", title: "ភូមិសាស្ត្រកម្ពុជា" },
  { id: "asean", title: "អាស៊ាន" },
  { id: "economy", title: "សេដ្ឋកិច្ចកម្ពុជា" },
  { id: "mixed", title: "ចម្រុះ" },
  { id: "english", title: "ភាសាអង់គ្លេស" },
  { id: "french", title: "ភាសាបារាំង" },
  { id: "khmer", title: "ភាសាខ្មែរ" },
  { id: "math", title: "គណិតវិទ្យា" },
  { id: "khmer-lit", title: "អក្សរសាស្ត្រខ្មែរ" },
  { id: "physics", title: "រូបវិទ្យា" },
  { id: "chemistry", title: "គីមីវិទ្យា" },
  { id: "biology", title: "ជីវវិទ្យា" },
  { id: "earth-science", title: "ផែនដីវិទ្យា" },
  { id: "ethics-civics", title: "សីលធម៌-ពលរដ្ឋវិជ្ជា" },
  { id: "ict", title: "ព័ត៌មានវិទ្យា (ICT)" },
  { id: "agriculture", title: "កសិកម្ម" },
];

const selectedType =
  examTypes.find((type) => type.id === typeId) || examTypes[0];

const selectedLevel = levelId
  ? examTypes.find((type) => type.id === levelId)
  : null;

// ==========================================================================
// ២. ការចម្រោះ និងរៀបចំសំណួរ (Filter & Shuffle Logic)
// ==========================================================================
// ចម្រោះសំណួរតាមប្រភេទ (Tag) ដែលបានជ្រើសរើស
const filteredPool = category.questions.filter((q) => {
  if (!q.tags) return false; // មិនរាប់បញ្ចូលសំណួរដែលគ្មាន tags

  // ប្រសិនបើជាវិញ្ញាសាចម្រុះ (general/mixed) គឺយកសំណួរទាំងអស់ក្នុង category
  if (typeId === "general" || typeId === "mixed") {
    return true;
  }

  // សម្រាប់វិញ្ញាសាជាក់លាក់ ត្រូវផ្គូផ្គងទាំង typeId និង levelId (បើមាន)
  const matchType = q.tags.includes(typeId);
  const matchLevel = !levelId || q.tags.includes(levelId);
  return matchType && matchLevel;
});

// ច្របល់សំណួរចេញពី Pool ដែលបានចម្រោះរួច (បើចម្រោះហើយអត់មានសំណួរ ឱ្យយកសំណួរទាំងអស់ក្នុង Category មកប្រើជំនួស)
const rawQuestions = shuffleQuizQuestions(
  filteredPool.length > 0 ? filteredPool : category.questions,
);

let questions = rawQuestions.slice(0, 20);

let currentIndex = 0;
let answers = Array(questions.length).fill(null);

// ==========================================================================
// ៣. អថេរសម្គាល់ធាតុក្នុង HTML (DOM Elements)
// ==========================================================================
const quizCategory = document.getElementById("quizCategory");
const quizProgressText = document.getElementById("quizProgressText");
const progressBar = document.getElementById("progressBar");
const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const answerList = document.getElementById("answerList");
const answerFeedback = document.getElementById("answerFeedback");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const timer = document.getElementById("timer");
const quitQuiz = document.getElementById("quitQuiz");
const confirmModal = document.getElementById("confirmModal");
const cancelExit = document.getElementById("cancelExit");
const confirmExit = document.getElementById("confirmExit");

// ==========================================================================
// ៤. អនុគមន៍ជំនួយសម្រាប់ច្របល់ទិន្នន័យ (Helper Functions)
// ==========================================================================
function shuffleItems(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

function shuffleQuizQuestions(items) {
  return shuffleItems(items).map((question) => {
    const options = question.options.map((option, index) => ({
      option,
      isCorrect: index === question.answer,
    }));
    const shuffledOptions = shuffleItems(options);

    return {
      ...question,
      options: shuffledOptions.map((item) => item.option),
      answer: shuffledOptions.findIndex((item) => item.isCorrect),
    };
  });
}

// ==========================================================================
// ៥. អនុគមន៍បង្ហាញ និងគ្រប់គ្រងតេស្ត (Core Quiz Logic)
// ==========================================================================
function renderQuestion() {
  const question = questions[currentIndex];
  const selectedAnswer = answers[currentIndex];
  const hasAnswered = selectedAnswer !== null;
  const progress = ((currentIndex + 1) / questions.length) * 100;

  // បង្ហាញចំណងជើងឱ្យកាន់តែច្បាស់លាស់ (ឧ. អប់រំ - គ្រូអនុវិទ្យាល័យ - គណិតវិទ្យា)
  const titleParts = [
    category.shortTitle,
    selectedLevel?.title,
    selectedType.title,
  ].filter(Boolean);
  quizCategory.textContent = titleParts.join(" - ");

  quizProgressText.textContent = `សំណួរ ${currentIndex + 1}/${questions.length}`;
  progressBar.style.width = `${progress}%`;
  questionNumber.textContent = `សំណួរទី ${currentIndex + 1}`;
  questionText.textContent = question.text;

  answerList.innerHTML = question.options
    .map((option, index) => {
      const letter = String.fromCharCode(65 + index);
      let stateClass = "";

      if (hasAnswered && index === question.answer) {
        stateClass = " is-correct";
      } else if (hasAnswered && index === selectedAnswer) {
        stateClass = " is-wrong";
      }

      return `
        <button class="answer-option${stateClass}" type="button" data-answer="${index}" ${hasAnswered ? "disabled" : ""}>
          <span>${letter}</span>
          <span>${option}</span>
        </button>
      `;
    })
    .join("");

  renderFeedback(question, selectedAnswer);

  nextBtn.disabled = !hasAnswered;
  nextBtn.querySelector("span").textContent =
    currentIndex === questions.length - 1 ? "បញ្ចប់" : "បន្ទាប់";
}

function renderFeedback(question, selectedAnswer) {
  if (selectedAnswer === null) {
    answerFeedback.className = "answer-feedback";
    answerFeedback.textContent = "";
    return;
  }

  const isCorrect = selectedAnswer === question.answer;
  answerFeedback.className = `answer-feedback is-visible ${isCorrect ? "is-correct" : "is-wrong"}`;
  answerFeedback.innerHTML = isCorrect
    ? `<i class="fa-solid fa-circle-check"></i><span>ត្រឹមត្រូវ</span>`
    : `<i class="fa-solid fa-circle-xmark"></i><span>ខុស។ ចម្លើយត្រឹមត្រូវគឺ៖ ${question.options[question.answer]}</span>`;
}

function saveResult() {
  const correct = questions.reduce((score, question, index) => {
    return score + (answers[index] === question.answer ? 1 : 0);
  }, 0);

  localStorage.setItem(
    "treamExamResult",
    JSON.stringify({
      categoryId: category.id,
      typeId: selectedType.id,
      correct,
      total: questions.length,
      questions, // បន្ថែមសំណួរដែលបានប្រើក្នុងតេស្តនេះ
      answers,
      completedAt: new Date().toISOString(),
    }),
  );

  window.location.href = "result.html";
}

// ==========================================================================
// ៦. ការចាប់យកព្រឹត្តិការណ៍ (Event Listeners)
// ==========================================================================
answerList.addEventListener("click", (event) => {
  const option = event.target.closest(".answer-option");
  if (!option || answers[currentIndex] !== null) return;

  answers[currentIndex] = Number(option.dataset.answer);
  renderQuestion();
});

prevBtn.addEventListener("click", () => {
  confirmModal.style.display = "flex";
});

cancelExit.addEventListener("click", () => {
  confirmModal.style.display = "none";
});

confirmExit.addEventListener("click", () => {
  window.location.href = `category.html?category=${category.id}`;
});

nextBtn.addEventListener("click", () => {
  if (answers[currentIndex] === null) return;

  if (currentIndex === questions.length - 1) {
    saveResult();
    return;
  }

  currentIndex += 1;
  renderQuestion();
});

// ==========================================================================
// ៧. ការចាប់ផ្តើមដំណើរការ (Initialization)
// ==========================================================================
const currentTheme = localStorage.getItem("treamExamTheme");
if (currentTheme === "dark") {
  document.body.classList.add("dark-theme");
}

// ពិនិត្យថាមានប៊ូតុងចាកចេញឬអត់ មុនពេលកំណត់ Link ដើម្បីការពារកំហុស JS
if (quitQuiz) {
  quitQuiz.href = `category.html?category=${category.id}`;
}

// កំណត់ពណ៌ប៊ូតុង បន្ទាប់ (ពណ៌បៃតង) និង ចាកចេញ (ពណ៌ក្រហម)
if (nextBtn) {
  nextBtn.style.backgroundColor = "var(--green)";
}
if (prevBtn) {
  prevBtn.style.color = "var(--red)";
  prevBtn.style.borderColor = "var(--red)";
  prevBtn.style.backgroundColor = "rgba(207, 66, 66, 0.05)"; // ពណ៌ក្រហមព្រាលៗនៅផ្ទៃខាងក្រោយ
}

// លុបចោលការបង្ហាញនាទី
timer.classList.add("is-hidden");

renderQuestion();
