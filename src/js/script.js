const sendButton = document.querySelector('#send-btn');
const senderName = document.querySelector('#sender-name');
const emailSubject = document.querySelector('#email-subject');
const emailContent = document.querySelector('#email-content');
const text = document.querySelector('#text');
const raised = document.querySelector("#raised-hand");
const weaving = document.querySelector("#weaving-hand");



sendButton.addEventListener('click', () => {
    document.location = `mailto:macorrea-@hotmail.com?subject=${emailSubject.textContent}&body=${emailContent.value + senderName.textContent}`
})

setInterval(() => {
    raised.classList.toggle("hide");
    weaving.classList.toggle("hide");
}, 400);


