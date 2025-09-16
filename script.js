const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
})

window.addEventListener("scroll", () => {
  const progressBar = document.querySelector(".scroll-progress-bar");
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  const scrollPercentage = (scrolled / documentHeight) * 100;
  progressBar.style.width = scrollPercentage + '%';
});