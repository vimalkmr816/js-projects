const text = "This is an auto text writer and I am working just fine !!"
const cont = document.querySelector('.container');
let index = 0;

function writeText() {
    cont.innerText = text.slice(0, index)
    index++;
    if (index > text.length) {
        index = 0;
    }
}
setInterval(writeText, 100);