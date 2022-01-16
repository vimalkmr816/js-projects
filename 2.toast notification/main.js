const btn = document.querySelector('.btn');
const popUp = document.querySelector('.pop');
btn.addEventListener("click", () => {
    createNotification();
});

function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.innerText = 'You have a new notification!';
    container.appendChild(notif);
    setTimeout(() => {
        notif.remove()
    }, 3000)

}