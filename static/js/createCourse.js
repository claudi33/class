const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.querySelector(".close-create");

// Open modal
btn.onclick = () => modal.classList.add("show");
span.onclick = () => modal.classList.remove("show");

// Close modal when clicking outside the content
window.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("show");
});
