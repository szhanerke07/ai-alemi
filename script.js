document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quiz-form");
  if (!form) return;
  const questions = [...document.querySelectorAll(".question")];
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const result = document.getElementById("result");
  const updateProgress = () => {
    const answered = questions.filter(q => q.querySelector("input:checked")).length;
    progressBar.style.width = `${answered / questions.length * 100}%`;
    progressText.textContent = `${answered} / ${questions.length} жауап таңдалды`;
  };
  form.addEventListener("change", updateProgress);
  form.addEventListener("submit", event => {
    event.preventDefault();
    const unanswered = questions.filter(q => !q.querySelector("input:checked"));
    if (unanswered.length) {
      unanswered[0].scrollIntoView({behavior:"smooth", block:"center"});
      unanswered[0].style.borderColor = "#ff9e9e";
      return;
    }
    let score = 0;
    let review = "";
    questions.forEach((q, index) => {
      const chosen = q.querySelector("input:checked");
      const correct = chosen.value === q.dataset.answer;
      if (correct) score++;
      review += `<div class="answer-review ${correct ? "correct" : "incorrect"}"><b>${index + 1}. ${correct ? "Дұрыс" : "Қате"}</b><p>${q.dataset.explain}</p></div>`;
    });
    const percent = Math.round(score / questions.length * 100);
    let message = percent >= 90 ? "Өте жақсы меңгергенсің!" : percent >= 70 ? "Жақсы нәтиже. Қате кеткен сұрақтарды қайтала." : percent >= 50 ? "Негізгі ұғымдарды тағы бір рет оқып шық." : "Тақырыптарды қайта қарап, тестті тағы орында.";
    result.hidden = false;
    result.innerHTML = `<h2>Нәтиже: ${score} / ${questions.length} (${percent}%)</h2><p>${message}</p><h3>Жауаптарды талдау</h3>${review}<button class="button" type="button" id="retry-result">Қайта орындау</button>`;
    result.scrollIntoView({behavior:"smooth", block:"start"});
    document.getElementById("retry-result").addEventListener("click", () => {
      form.reset(); result.hidden = true; updateProgress(); form.scrollIntoView({behavior:"smooth", block:"start"});
    });
  });
  document.getElementById("reset-btn").addEventListener("click", () => {
    form.reset(); result.hidden = true; updateProgress(); window.scrollTo({top:0,behavior:"smooth"});
  });
  updateProgress();
});