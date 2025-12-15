const nameEl = document.getElementById("hero-name");
const roleEl = document.getElementById("hero-role");

let showName = true;

setInterval(() => {
  if (showName) {
    nameEl.classList.add("fade-out");
    setTimeout(() => {
      nameEl.classList.add("d-none");
      roleEl.classList.remove("d-none");
      roleEl.classList.remove("fade-out");
    }, 500);
  } else {
    roleEl.classList.add("fade-out");
    setTimeout(() => {
      roleEl.classList.add("d-none");
      nameEl.classList.remove("d-none");
      nameEl.classList.remove("fade-out");
    }, 500);
  }

  showName = !showName;
}, 2000);

const cubesBg = document.getElementById("cubes-bg");

const isMobile = window.innerWidth <= 540;

const STAIR_COUNT = isMobile ? 5 : 8;

function createStaircase() {
  const stair = document.createElement("div");
  stair.className = "stair";

  const isLeft = Math.random() < 0.5;

  if (isLeft) {
    stair.style.left = Math.random() * 8 + "vw";
  } else {
    stair.style.left = 92 + Math.random() * 8 + "vw";
  }

  stair.style.animationDuration = 10 + Math.random() * 6 + "s";
  stair.style.animationDelay = Math.random() * 5 + "s";

  const step1 = document.createElement("div");
  step1.className = "step";
  step1.innerHTML = `<div class="cube"></div>`;

  const step2 = document.createElement("div");
  step2.className = "step";
  step2.innerHTML = `
    <div class="cube"></div>
    <div class="cube"></div>
  `;

  const step3 = document.createElement("div");
  step3.className = "step";
  step3.innerHTML = `
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  `;

  stair.append(step1, step2, step3);
  cubesBg.appendChild(stair);
}

for (let i = 0; i < STAIR_COUNT; i++) {
  createStaircase();
}

const projectImages = document.querySelectorAll(".project-card .img-fluid");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

projectImages.forEach((img) => observer.observe(img));
