const modalJoin = document.getElementById("modalJoin");
const openJoin = document.getElementById("openJoin");
const closeJoin = document.querySelector(".close-join");

openJoin.onclick = () => modalJoin.classList.add("show");
closeJoin.onclick = () => modalJoin.classList.remove("show")

window.addEventListener("click", (e) => {
    if (e.target === modalJoin) modalJoin.classList.remove("show");
});

