document.querySelector('#changeText').addEventListener('click', (event) => {
    event.preventDefault();
    let userText = prompt('Введите текст:');
    event.target.textContent = userText;
});
