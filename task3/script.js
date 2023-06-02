// single traffic light
const singleLight = document.querySelector('.singleLight');

function makeGreen() {
    singleLight.style.background = ('green');
    singleLight.removeEventListener('click', makeGreen);
    singleLight.addEventListener('click', makeYellow);
}

function makeYellow() {
    singleLight.style.background = ('yellow');
    singleLight.removeEventListener('click', makeYellow);
    singleLight.addEventListener('click', makeRed);
}

function makeRed() {
    singleLight.style.background = ('red');
    singleLight.removeEventListener('click', makeRed);
    singleLight.addEventListener('click', makeGreen);
}

singleLight.addEventListener('click', makeGreen);

// full traffic light
const trafficLightEl = document.querySelector('.trafficLight');
let countClickLight = 0;

trafficLightEl.addEventListener('click', () => {
    countClickLight += 1;

    const redLightEl = document.querySelector('#redLight');
    const yellowLightEl = document.querySelector('#yellowLight');
    const greenLightEl = document.querySelector('#greenLight');

    switch (countClickLight) {
        case 1:
            redLightEl.style.background = 'red';
            yellowLightEl.style.background = 'black';
            greenLightEl.style.background = 'black';
            break;
        case 2:
            yellowLightEl.style.background = 'yellow';
            redLightEl.style.background = 'black';
            greenLightEl.style.background = 'black';
            break;
        case 3:
            greenLightEl.style.background = 'green';
            redLightEl.style.background = 'black';
            yellowLightEl.style.background = 'black';
            countClickLight = 0;
            break;
    }
});
