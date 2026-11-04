const feature = document.querySelector(".clean-featured");
const slides = [...feature.querySelectorAll(".clean-featured-frame img")];
const controls = feature.querySelector(".clean-featured-controls");
const rotation = controls.querySelector("[data-rotation]");
const interval = Number(feature.dataset.interval) || 5500;
let current = 0;
let timer;

function showSlide(offset) {
  slides[current].hidden = true;
  current = (current + offset + slides.length) % slides.length;
  slides[current].hidden = false;
}

function setRotation(active) {
  clearInterval(timer);
  timer = active ? setInterval(() => showSlide(1), interval) : undefined;
  rotation.setAttribute("aria-label", active ? "Pause rotation" : "Play rotation");
  rotation.firstElementChild.className = active ? "fa-solid fa-pause" : "fa-solid fa-play";
}

rotation.addEventListener("click", () => setRotation(!timer));
controls.querySelector("[data-previous]").addEventListener("click", () => {
  setRotation(false);
  showSlide(-1);
});
controls.querySelector("[data-next]").addEventListener("click", () => {
  setRotation(false);
  showSlide(1);
});

controls.hidden = false;
setRotation(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
