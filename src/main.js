document.addEventListener("DOMContentLoaded", () => {
  const dotsBg = document.getElementById("dots-bg");

  if (!dotsBg) {
    console.error("dots-bg not found");
    return;
  }

  for (let i = 0; i < 50; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = Math.random() * 100 + "vw";
    dot.style.animationDuration = 5 + Math.random() * 5 + "s";
    dot.style.opacity = Math.random();
    dotsBg.appendChild(dot);
    dot.style.transform = `scale(${Math.random() * 0.8 + 0.4})`;
  }
});

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
