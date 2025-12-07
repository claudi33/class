const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");

    if (toggle.checked){
        document.documentElement.style.setProperty('--bg-color', '#1e1e1e');
        document.documentElement.style.setProperty('--text-color', '#f0f0f0');
        document.documentElement.style.setProperty('--sidebar-bg', '#2b2b2b');
        document.documentElement.style.setProperty('--sidebar-text', '#ffffff');
        document.documentElement.style.setProperty('--button-bg', '#3b3b3b');
        document.documentElement.style.setProperty('--button-text', '#ffffff');
        document.documentElement.style.setProperty('--button-hover-bg', '#505050');
        document.documentElement.style.setProperty('--button-active-bg', 'rgba(0, 122, 255, 0.5)');
        document.documentElement.style.setProperty('--button-active-hover-bg', 'rgba(0, 122, 255, 0.7)');
        document.documentElement.style.setProperty('--modal-bg', '#2b2b2b');
        document.documentElement.style.setProperty('--modal-overlay', 'rgba(0, 0, 0, 0.7)');
        document.documentElement.style.setProperty('--body-color', 'rgb(116, 116, 116)');
        
    } else{
        document.documentElement.style.setProperty('--bg-color', '#656667ff');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--sidebar-bg', '#f8fafd');
        document.documentElement.style.setProperty('--sidebar-text', '#000000');
        document.documentElement.style.setProperty('--button-bg', '#ffffff');
        document.documentElement.style.setProperty('--button-text', 'black');
        document.documentElement.style.setProperty('--button-hover-bg', '#dedede');
        document.documentElement.style.setProperty('--button-active-bg', 'rgba(0, 122, 255, 0.5)');
        document.documentElement.style.setProperty('--button-active-hover-bg', 'rgba(0, 122, 255, 0.7)');
        document.documentElement.style.setProperty('--modal-bg', '#ffffff');
        document.documentElement.style.setProperty('--modal-overlay', 'rgba(0, 0, 0, 0.5)');
        document.documentElement.style.setProperty('--body-color', 'rgb(255, 255, 255)');
    }
});