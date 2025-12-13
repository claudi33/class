const logoutBox = document.getElementById("loggedOut-box");


if (logoutBox){
    setTimeout(() => {
        logoutBox.classList.add("show");
    }, 200);

    setTimeout(() => {
        logoutBox.classList.remove("show");
    }, 3000);
}
