
const $ = (selector) => document.querySelector(selector);

const screens = {
  home: $("#home-screen"),
  quiz: $("#quiz-screen"),
  result: $("#result-screen")
};

const STORAGE = {
  profile: "quiztech_profile",
  ranking: "quiztech_ranking",
  achievements: "quiztech_achievements"
};

const ACHIEVEMENTS = [
  { id: "first", name: "🎮 Primeiro jogo", description: "Conclua seu primeiro desafio." },
  { id: "perfect", name: "💎 Perfeição", description: "Acerte todas as perguntas de um desafio." },
  { id: "speed", name: "⚡ Velocista", description: "Acerte uma pergunta em até 5 segundos." },
  { id: "hundred", name: "🏆 Centenário", description: "Faça pelo menos 500 pontos em um desafio." }
];

const DIFFICULTY = {
  facil: { label: "Fácil", seconds: 20, points: 100 },
  medio: { label: "Médio", seconds: 15, points: 150 },
  dificil: { label: "Difícil", seconds: 12, points: 200 }
};

let profile = load(STORAGE.profile, { name: "Jogador", xp: 0 });
let ranking = load(STORAGE.ranking, []);
let unlocked = load(STORAGE.achievements, []);
let category = "Todas";
let difficulty = "facil";
let currentQuestions = [];
let index = 0;
let points = 0;
let correctCount = 0;
let timeLeft = 0;
let timerId = null;
let answered = false;
let questionStartedAt = 0;
let newAchievements = [];

function load(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getLevel(xp) {
  return Math.floor(xp / 500) + 1;
}

function showScreen(name) {
  Object.values(screens).forEach(screen =>
    screen.classList.add("hidden")
  );
  screens[name].classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateProfile() {
  $("#profile-name").textContent = profile.name;
  $("#level-badge").textContent = `Nível ${getLevel(profile.xp)}`;
  $("#player-name").value = profile.name === "Jogador" ? "" : profile.name;
}

function renderCategories() {
  const categories = [
    "Todas",
    ...new Set(QUESTIONS.map(item => item.category))
  ];

  $("#category-list").innerHTML = "";

  categories.forEach(name => {
    const button = document.createElement("button");
    button.textContent = name === "Todas" ? "🎯 Todas as categorias" : `🧠 ${name}`;

    if (name === category) button.classList.add("selected");

    button.addEventListener("click", () => {
      category = name;
      renderCategories();
    });

    $("#category-list").appendChild(button);
  });
}

function startGame() {
  const name = $("#player-name").value.trim();
  profile.name = name || "Jogador";
  save(STORAGE.profile, profile);
  updateProfile();

  currentQuestions = QUESTIONS.filter(item =>
    (category === "Todas" || item.category === category) &&
    item.difficulty === difficulty
  );

  if (currentQuestions.length === 0) {
    alert("Não existem perguntas para esta combinação. Escolha outra categoria ou dificuldade.");
    return;
  }

  // Embaralha a ordem das perguntas.
  currentQuestions = [...currentQuestions].sort(() => Math.random() - 0.5);

  // Limita cada partida a cinco perguntas.
  currentQuestions = currentQuestions.slice(0, 5);

  index = 0;
  points = 0;
  correctCount = 0;
  newAchievements = [];

  showScreen("quiz");
  renderQuestion();
}

function stopTimer() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
}

function renderQuestion() {
  stopTimer();
  answered = false;

  const item = currentQuestions[index];
  timeLeft = DIFFICULTY[difficulty].seconds;
  questionStartedAt = Date.now();

  $("#question-counter").textContent =
    `Pergunta ${index + 1}/${currentQuestions.length}`;
  $("#score").textContent = `⭐ ${points} pontos`;
  $("#question-category").textContent =
    `${item.category} · ${DIFFICULTY[difficulty].label}`;
  $("#question-text").textContent = item.question;
  $("#answer-feedback").textContent = "";
  $("#next-btn").classList.add("hidden");
  $("#progress-bar").style.width =
    `${(index / currentQuestions.length) * 100}%`;

  const answerList = $("#answer-list");
  answerList.innerHTML = "";

  item.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => answer(optionIndex));
    answerList.appendChild(button);
  });

  updateTimer();

  timerId = setInterval(() => {
    timeLeft--;
    updateTimer();

    if (timeLeft <= 0) {
      answer(-1);
    }
  }, 1000);
}

function updateTimer() {
  $("#timer").textContent = `⏱ ${timeLeft}s`;
}

function answer(choice) {
  if (answered) return;

  answered = true;
  stopTimer();

  const item = currentQuestions[index];
  const buttons = [...$("#answer-list").querySelectorAll("button")];
  const elapsedSeconds = (Date.now() - questionStartedAt) / 1000;

  buttons.forEach((button, i) => {
    button.disabled = true;

    if (i === item.answer) {
      button.classList.add("correct");
    }
  });

  if (choice === item.answer) {
    correctCount++;

    const base = DIFFICULTY[difficulty].points;
    const bonus = Math.max(0, timeLeft) * 5;
    points += base + bonus;

    $("#answer-feedback").textContent =
      `✅ Correto! +${base + bonus} pontos. ${item.explanation}`;

    if (elapsedSeconds <= 5) {
      unlock("speed");
    }
  } else {
    if (choice >= 0 && buttons[choice]) {
      buttons[choice].classList.add("wrong");
    }

    $("#answer-feedback").textContent =
      choice === -1
        ? `⏰ O tempo acabou! ${item.explanation}`
        : `❌ Resposta incorreta. ${item.explanation}`;
  }

  $("#score").textContent = `⭐ ${points} pontos`;
  $("#progress-bar").style.width =
    `${((index + 1) / currentQuestions.length) * 100}%`;

  $("#next-btn").textContent =
    index === currentQuestions.length - 1
      ? "Ver resultado →"
      : "Próxima pergunta →";

  $("#next-btn").classList.remove("hidden");
}

function nextQuestion() {
  if (!answered) return;

  if (index < currentQuestions.length - 1) {
    index++;
    renderQuestion();
  } else {
    finishGame();
  }
}

function unlock(id) {
  if (unlocked.includes(id)) return;

  unlocked.push(id);
  newAchievements.push(id);
  save(STORAGE.achievements, unlocked);
}

function finishGame() {
  stopTimer();

  unlock("first");

  if (correctCount === currentQuestions.length) {
    unlock("perfect");
  }

  if (points >= 500) {
    unlock("hundred");
  }

  const oldLevel = getLevel(profile.xp);
  profile.xp += points;
  const newLevel = getLevel(profile.xp);
  save(STORAGE.profile, profile);
  updateProfile();

  // Registra os resultados neste navegador.
  ranking.push({
    name: profile.name,
    points,
    correct: correctCount,
    total: currentQuestions.length,
    date: new Date().toLocaleDateString("pt-BR")
  });

  ranking.sort((a, b) => b.points - a.points);
  ranking = ranking.slice(0, 10);
  save(STORAGE.ranking, ranking);

  $("#result-title").textContent =
    newLevel > oldLevel ? `🎉 Você subiu para o nível ${newLevel}!` : "Desafio concluído!";

  $("#final-score").textContent = `${points} pontos`;
  $("#result-summary").textContent =
    `${correctCount} acertos de ${currentQuestions.length} perguntas. Você ganhou ${points} XP.`;

  $("#new-achievements").innerHTML = "";

  if (newAchievements.length === 0) {
    $("#new-achievements").textContent = "Continue jogando para desbloquear conquistas!";
  } else {
    newAchievements.forEach(id => {
      const item = ACHIEVEMENTS.find(a => a.id === id);
      if (item) {
        const badge = document.createElement("span");
        badge.className = "achievement";
        badge.textContent = item.name;
        $("#new-achievements").appendChild(badge);
      }
    });
  }

  renderRanking();
  renderAchievements();
  showScreen("result");
}

function renderRanking() {
  const list = $("#leaderboard");
  list.innerHTML = "";

  if (ranking.length === 0) {
    const item = document.createElement("li");
    item.textContent = "Ainda não há resultados. Seja o primeiro!";
    list.appendChild(item);
    return;
  }

  ranking.forEach((entry, i) => {
    const item = document.createElement("li");
    item.textContent =
      `${i + 1}. ${entry.name} — ${entry.points} pontos (${entry.date})`;
    list.appendChild(item);
  });
}

function renderAchievements() {
  const list = $("#achievement-list");
  list.innerHTML = "";

  ACHIEVEMENTS.forEach(item => {
    const badge = document.createElement("div");
    const earned = unlocked.includes(item.id);

    badge.className = `achievement ${earned ? "" : "locked"}`;
    badge.textContent = `${earned ? item.name : "🔒 " + item.name} — ${item.description}`;
    list.appendChild(badge);
  });
}

function goHome() {
  stopTimer();
  updateProfile();
  renderCategories();
  renderRanking();
  renderAchievements();
  showScreen("home");
}

$("#start-btn").addEventListener("click", startGame);
$("#next-btn").addEventListener("click", nextQuestion);
$("#again-btn").addEventListener("click", startGame);
$("#home-btn").addEventListener("click", goHome);
$("#home-link").addEventListener("click", event => {
  event.preventDefault();
  goHome();
});

document.querySelectorAll(".difficulty-btn").forEach(button => {
  button.addEventListener("click", () => {
    difficulty = button.dataset.difficulty;

    document.querySelectorAll(".difficulty-btn").forEach(item =>
      item.classList.toggle("selected", item === button)
    );
  });
});

updateProfile();
renderCategories();
renderRanking();
renderAchievements();
showScreen("home");
