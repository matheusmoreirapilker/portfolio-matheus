const toggletheme = document.getElementById('toggletheme');
const roothtml = document.documentElement;
function changetheme(){
    const temaatual = roothtml.getAttribute("data-theme");

    if(temaatual === "dark") {
        roothtml.setAttribute("data-theme", "light")

    }
    else{
        roothtml.setAttribute("data-theme", "dark")
    }
    toggletheme.classList.toggle("bi-sun")
    toggletheme.classList.toggle("bi-moon-stars")
}

toggletheme.addEventListener("click", changetheme);