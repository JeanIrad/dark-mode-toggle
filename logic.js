const btn = document.querySelector("button");
const body = document.querySelector("body");
document.addEventListener("DOMContentLoaded", () => {
  btn.onclick = () => {
    body.classList.toggle("dark-mode");
    let mode = body.classList.contains("dark-mode");
    mode
      ? (btn.innerHTML = '<i class="fa-solid fa-sun"></i>')
      : (btn.innerHTML = '<i class="fa-solid fa-moon">');
  };
});
