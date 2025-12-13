const welcomeBox = document.getElementById("welcome-box");


if (welcomeBox){
    setTimeout(() => {
        welcomeBox.classList.add("show");
    }, 200);

    setTimeout(() => {
        welcomeBox.classList.remove("show");
    }, 3000);
}
