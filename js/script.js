if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

if (document.getElementById('my-resume-link')) {
  document.getElementById('my-resume-link').addEventListener('click', () => {
    document.getElementById('resume').scrollIntoView({behavior: "smooth"})
  })
}

const wrapper = document.querySelector(".words");
const CURRENT_CLASS = "current";
setInterval(() => {
  const currentWord = wrapper.querySelector("span.current");
  const nextWord = currentWord.nextElementSibling
    ? currentWord.nextElementSibling
    : wrapper.firstElementChild;
  currentWord.classList.remove(CURRENT_CLASS);
  nextWord.classList.add(CURRENT_CLASS);
  wrapper.style.setProperty("--color", nextWord.dataset.color);
  wrapper.style.setProperty("--color-bg", nextWord.dataset.bgColor);
}, 1500);