const btn = document.getElementById('btn')
const cont = document.querySelector(".container")
let darkMode = false;
btn.addEventListener('click', () => {
    cont.classList.toggle("dark")
        // document.body.style.backgroundColor = "#" + "191A19";
    if (!darkMode) {
        btn.innerText = "Light Mode"
        darkMode = true;
    } else {
        btn.innerText = "Dark Mode"
        darkMode = false;
    }
})