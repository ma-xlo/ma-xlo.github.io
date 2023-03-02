const sendButton = document.querySelector('#send-btn');
const senderName = document.querySelector('#sender-name');
const emailSubject = document.querySelector('#email-subject');
let emailContent = document.querySelector('#email-content');
const text = document.querySelector('#text');
const blockCursor = document.querySelector("#block-cursor");


sendButton.addEventListener('click', () => {
    document.location = `mailto:macorrea-@hotmail.com?subject=${emailSubject.value}&body=${emailContent.value.replaceAll('\n', '%0D%0A')}%0D%0D%0A%0D%0ASincerely, ${senderName.value} `
})

setInterval(() => {
    blockCursor.classList.toggle("hide");
}, 600);

window.addEventListener('scroll', reveal);

function reveal (){
    let reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 250;

        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active')
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}


