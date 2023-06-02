document.querySelector('#consoleLog').addEventListener('click', () => {
    alert('Выводит переданные данные в веб-консоль.');
});

document.querySelector("#alert").addEventListener("click", () => {
    alert('Выводит сообщение в всплывающем окне.');
});

document.querySelector("#prompt").addEventListener("click", () => {
    alert('Получает данные введенные пользователем из всплывающего окна.');
});
