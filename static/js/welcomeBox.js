const box = document.getElementById("welcome-box");

setTimeout(() => {
    box.classList.add("show");
}, 200);

setTimeout(() => {
    box.classList.remove("show");
}, 3000);