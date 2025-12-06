const links = document.querySelectorAll(".sidebar a");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault(); // optional if you want to stay on the same page
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});