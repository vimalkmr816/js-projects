const openBtn = document.querySelector("#open")
const closeBtn = document.querySelector("#close")
const popUp = document.querySelector(".container")
openBtn.addEventListener('click', () => {
    popUp.classList.add('active')
    document.body.style.background = "rgba( 0, 0, 0, 0.25)"
})
closeBtn.addEventListener('click', () => {
    popUp.classList.remove('active')
    document.body.style.background = "white"
})