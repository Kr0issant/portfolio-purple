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

const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
currentProject = 1;
for (let i = 2; i <= projects.length; i++) {
	let project = document.getElementById(`project-${i}`);
	project.classList.add("hidden");
}

document.querySelector(".next-btn").addEventListener("click", () => {
	if (currentProject == projects.length) return;

	currentProject++;
	document.getElementById(`project-${currentProject - 1}`).classList.add("hidden");
	document.getElementById(`project-${currentProject}`).classList.remove("hidden");
});

document.querySelector(".prev-btn").addEventListener("click", () => {
	if (currentProject == 1) return;

	currentProject--;
	document.getElementById(`project-${currentProject + 1}`).classList.add("hidden");
	document.getElementById(`project-${currentProject}`).classList.remove("hidden");
});