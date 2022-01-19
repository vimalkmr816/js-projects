const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    document.body.style.backgroundColor = randomBg();
    console.log(randomBg());
});

function randomBg() {
    return `hsl(${Math.floor(Math.random() * 360)}, 50%,70%)`;
}