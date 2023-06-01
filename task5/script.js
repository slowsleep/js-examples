document.querySelector('#enterText').addEventListener('click', (event) => {
    const inputUserText = document.querySelector('#userText');
    console.log(inputUserText.value);
    inputUserText.value = '';
    document.querySelector('#duplicateField').textContent = '';
});

document.querySelector('#userText').addEventListener('keypress', (event) => {
    const dupField = document.querySelector('#duplicateField');
    dupField.textContent += String.fromCharCode(event.charCode);
});