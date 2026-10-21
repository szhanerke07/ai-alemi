const quizQuestions = [
  {
    question: "Жасанды интеллект (ЖИ) дегеніміз не?",
    options: [
      "Тек интернетке қосатын құрылғы",
      "Мәтінді өңдеу, үлгіні тану немесе болжам жасау сияқты міндеттерді орындайтын компьютерлік жүйелердің мүмкіндіктері",
      "Тек компьютердің сыртқы бөлігі",
      "Барлық жағдайда дұрыс жауап беретін адам"
    ],
    answer: 1,
    explanation: "ЖИ әртүрлі міндеттерді орындауға арналған әдістер мен жүйелерді қамтиды. Ол бәрін білмейді және қателесуі мүмкін."
  },
  {
    question: "ЖИ модельдері үйрену үшін нені пайдалана алады?",
    options: ["Тек пернетақтаны", "Тек мониторды", "Деректер мен мысалдарды", "Тек компьютердің корпусын"],
    answer: 2,
    explanation: "Машиналық оқыту модельдері деректерден заңдылықтарды үйренеді."
  },
  {
    question: "CPU-дың негізгі міндеті қандай?",
    options: ["Тек сурет басып шығару", "Жалпы командаларды орындау және жүйе жұмысын басқару", "Файлдарды қағазға сақтау", "Интернет жылдамдығын өздігінен арттыру"],
    answer: 1,
    explanation: "CPU — компьютердің орталық процессоры; ол көптеген жалпы мақсаттағы командаларды орындайды."
  },
  {
    question: "GPU неліктен кейбір ЖИ есептеріне пайдалы?",
    options: ["Өйткені ол мониторды алмастырады", "Өйткені ол құпиясөздерді сақтайды", "Өйткені ол көптеген есептеуді қатар орындауға бейім", "Өйткені оған электр қуаты қажет емес"],
    answer: 2,
    explanation: "GPU параллель есептеуге бейім, сондықтан көптеген ЖИ модельдеріндегі есептеуді жылдамдатуы мүмкін."
  },
  {
    question: "RAM қандай қызмет атқарады?",
    options: ["Қазіргі сәтте қолданылатын деректерді уақытша сақтайды", "Барлық файлды мәңгі сақтайды", "Тек дыбыс шығарады", "Компьютерді интернетке қосады"],
    answer: 0,
    explanation: "RAM — жұмыс істеп тұрған бағдарламалар мен деректерге арналған уақытша жад. Қуат өшкенде оның мазмұны әдетте сақталмайды."
  },
  {
    question: "ЖИ-ге жеке деректерді енгізгенде не істеу керек?",
    options: ["Барлық құпиясөзді енгізу", "Жеке деректерді ешқашан ойланбай жіберу", "Құпия және жеке ақпаратты енгізбеу, сервистің құпиялық шарттарын тексеру", "Деректерді әлеуметтік желіге жариялау"],
    answer: 2,
    explanation: "Құпиясөз, жеке құжат және басқа сезімтал ақпаратты ашық сервистерге енгізбеу керек."
  },
  {
    question: "ЖИ жауабының дұрыстығын қалай тексерген дұрыс?",
    options: ["Жауап әдемі жазылса, сену", "Оны сенімді дереккөздермен салыстыру", "Тексеруді қажетсіз деп санау", "Тек бірінші сөйлемді оқу"],
    answer: 1,
    explanation: "ЖИ қате немесе ойдан шығарылған ақпарат ұсынуы мүмкін. Фактілерді сенімді дереккөздермен салыстыр."
  },
  {
    question: "Жақсы prompt қандай болуы керек?",
    options: ["Мүлде түсініксіз", "Тек бір кездейсоқ сөзден тұратын", "Тапсырманы, контексті және қалаған форматты нақты көрсететін", "Жеке құпия деректерді қамтитын"],
    answer: 2,
    explanation: "Нақты тапсырма мен контекст қосу пайдалырақ жауап алуға көмектеседі. Жеке құпия ақпаратты қоспа."
  },
  {
    question: "ЖИ жасаған мәтінді мектеп тапсырмасында қалай қолданған дұрыс?",
    options: ["Тексермей толық көшіріп, өзімдікі деп көрсету", "Оны түсініп, тексеріп, мұғалімнің ережесін сақтап, өз жұмысыммен толықтыру", "Барлық дереккөзді жасыру", "ЖИ жауабын әрдайым мінсіз деп қабылдау"],
    answer: 1,
    explanation: "ЖИ-ді көмекші ретінде қолданып, академиялық адалдықты сақтау керек."
  },
  {
    question: "Дәстүрлі бағдарламаның машиналық оқыту жүйесінен бір ықтимал айырмашылығы қандай?",
    options: ["Дәстүрлі бағдарлама алдын ала жазылған ережелерді орындай алады, ал машиналық оқыту жүйесі деректерден заңдылық үйрене алады", "Дәстүрлі бағдарлама ешқашан есептемейді", "Машиналық оқытуға дерек қажет емес", "Екеуінің еш айырмашылығы жоқ"],
    answer: 0,
    explanation: "Бұл — жалпы айырмашылықтың қарапайым түсіндірмесі. Нақты жүйелерде ережелер мен үйрену тәсілдері бірге қолданылуы мүмкін."
  }
];

const questionArea = document.getElementById("questionArea");
const quizCount = document.getElementById("quizCount");
const quizProgressText = document.getElementById("quizProgressText");
const progressFill = document.getElementById("progressFill");
const prevButton = document.getElementById("prevQuestion");
const nextButton = document.getElementById("nextQuestion");
const quizResult = document.getElementById("quizResult");
let currentQuestion = 0;
let selectedAnswers = Array(quizQuestions.length).fill(null);
let checkedAnswers = Array(quizQuestions.length).fill(false);

function renderQuestion() {
  const item = quizQuestions[currentQuestion];
  const selected = selectedAnswers[currentQuestion];
  const checked = checkedAnswers[currentQuestion];
  quizCount.textContent = `${currentQuestion + 1} / ${quizQuestions.length} сұрақ`;
  quizProgressText.textContent = `${Math.round((currentQuestion / quizQuestions.length) * 100)}% орындалды`;
  progressFill.style.width = `${(currentQuestion / quizQuestions.length) * 100}%`;
  prevButton.disabled = currentQuestion === 0;
  nextButton.textContent = currentQuestion === quizQuestions.length - 1 ? "Нәтижені көру →" : "Келесі сұрақ →";

  questionArea.innerHTML = `
    <h3 class="question-title">${currentQuestion + 1}. ${item.question}</h3>
    <div class="answer-list">
      ${item.options.map((option, index) => {
        let stateClass = selected === index ? " selected" : "";
        if (checked && index === item.answer) stateClass += " correct";
        else if (checked && selected === index && selected !== item.answer) stateClass += " incorrect";
        return `<button type="button" class="answer-option${stateClass}" data-answer="${index}" ${checked ? "disabled" : ""}>
          <span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>
        </button>`;
      }).join("")}
    </div>
    ${checked ? `<div class="answer-feedback"><b>${selected === item.answer ? "Дұрыс жауап!" : "Бұл жауап дұрыс емес."}</b> ${item.explanation}</div>` : ""}
  `;

  questionArea.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      if (checkedAnswers[currentQuestion]) return;
      selectedAnswers[currentQuestion] = Number(button.dataset.answer);
      renderQuestion();
    });
  });
  quizResult.hidden = true;
}

function showQuizResult() {
  const score = selectedAnswers.reduce((total, answer, index) => total + (answer === quizQuestions[index].answer ? 1 : 0), 0);
  const percent = Math.round((score / quizQuestions.length) * 100);
  let message = "Қайталап оқып, тестті тағы бір рет орындап көр.";
  if (score >= 9) message = "Өте жақсы! Сен негізгі ұғымдарды жақсы меңгергенсің.";
  else if (score >= 7) message = "Жақсы нәтиже! Қате кеткен сұрақтардың түсіндірмесін қайтала.";
  else if (score >= 5) message = "Жаман емес. ЖИ, процессорлар және қауіпсіздік бөлімдерін қайта қарап шық.";
  progressFill.style.width = "100%";
  quizProgressText.textContent = "100% орындалды";
  questionArea.innerHTML = "";
  prevButton.hidden = true;
  nextButton.hidden = true;
  quizResult.hidden = false;
  quizResult.innerHTML = `<div class="result-score">${score}/${quizQuestions.length}</div><h3>${percent}% нәтиже</h3><p>${message}</p><button class="btn btn-primary" id="restartQuiz" style="margin-top:16px">Қайта тапсыру ↻</button>`;
  document.getElementById("restartQuiz").addEventListener("click", () => {
    currentQuestion = 0;
    selectedAnswers = Array(quizQuestions.length).fill(null);
    checkedAnswers = Array(quizQuestions.length).fill(false);
    prevButton.hidden = false;
    nextButton.hidden = false;
    renderQuestion();
  });
}

nextButton.addEventListener("click", () => {
  if (selectedAnswers[currentQuestion] === null) {
    showToast("Алдымен жауап нұсқасын таңда.");
    return;
  }
  checkedAnswers[currentQuestion] = true;
  if (currentQuestion === quizQuestions.length - 1) {
    showQuizResult();
    return;
  }
  currentQuestion += 1;
  renderQuestion();
});
prevButton.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion -= 1;
    renderQuestion();
  }
});
renderQuestion();

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "✕" : "☰";
});
mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

const toast = document.getElementById("toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

document.getElementById("copyPrompt").addEventListener("click", async () => {
  const promptText = "Мен 10-сынып оқушысымын. CPU мен GPU айырмашылығын қарапайым қазақ тілінде түсіндір. Үш мысал және салыстыру кестесін бер. Белгісіз ақпаратты ойдан қоспа.";
  try {
    await navigator.clipboard.writeText(promptText);
    showToast("Сұраныс көшірілді!");
  } catch (error) {
    showToast("Көшіру мүмкін болмады. Сұранысты қолмен белгіле.");
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
