
const toggle = document.getElementById('button')
toggle.addEventListener('change',  () => {
    let darkmode = document.getElementById('darkmode');
    let theme = document.getElementById('theme');
    if (theme.getAttribute('href') === "./assets/lighttheme.css") {
        theme.href = 'assets/darktheme.css';
        darkmode.innerHTML = "Light Mode";
    }
    else if(theme.getAttribute('href') === "assets/darktheme.css"){
        theme.href = "./assets/lighttheme.css";
        darkmode.innerHTML = "Dark Mode";
    }
})