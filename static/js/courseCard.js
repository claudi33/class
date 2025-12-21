const courseCards = document.querySelectorAll(".course-card");
const closeBtn = document.querySelector(".close-course");
const courseModal = document.getElementById("courseModal");

const modalCourseName = document.getElementById("modalCourseName");
const modalSubject = document.getElementById("modalSubject");
const modalId = document.getElementById("modalId");

courseCards.forEach((card) => {
  card.addEventListener("click", () => {
    modalCourseName.textContent = card.dataset.courseName;
    modalSubject.textContent = card.dataset.subject;
    modalId.textContent = card.dataset.id;

    courseModal.classList.add("show");
  });
});

closeBtn.addEventListener("click", () => {
  courseModal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === courseModal) courseModal.classList.remove("show");
});
``;
