const btn = document.querySelector(".bars-btn");
const korinma = document.querySelector(".hidden");
const xbtn = document.querySelector(".xbtn");

btn.addEventListener("click", (e) => {
    e.preventDefault()
    korinma.style.translate = "100%";
    korinma.style.display = 'block';
});
xbtn.addEventListener("click", () => {
  korinma.style.translate = "-100%";
});
