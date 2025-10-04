const cursor = document.querySelector(".custom-cursor");
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
})

const progressBar = document.querySelector(".scroll-progress-bar");
window.addEventListener("scroll", () => {
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  const scrollPercentage = (scrolled / documentHeight) * 100;
  progressBar.style.width = scrollPercentage + '%';
});
