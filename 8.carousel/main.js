const imgs = document.getElementById('imgs')
const img = document.querySelectorAll('img')
let index = 0;

function runCarousel() {
    index++;
    if (index > img.length - 1) {
        index = 0
    }
    console.log(index);

    imgs.style.transform = `translateX(${-index*600}px)`;
}
setInterval(runCarousel, 1000);