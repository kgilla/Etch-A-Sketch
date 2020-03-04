// default build
const main = document.querySelector('#mainBox');
let divNum = 16;
builder();
eventSetter();

// defines and adds erase button
const buttonErase = document.querySelector('#buttonErase');
buttonErase.addEventListener('click', eraser);

// assigns events for all size buttons
const buttonSize = document.querySelectorAll('.btn-secondary');
buttonSize.forEach((buttonSize) => {
    buttonSize.addEventListener('click', build, event);
});

// resizes grid based on user input
function build() {
    eraser();
    if (event.target.id === 'button128') {
        divNum = 128;
    } else if (event.target.id === 'button64') {
        divNum = 64;
    } else if (event.target.id === 'button32') {
        divNum = 32;
    } else if (event.target.id === 'button16') {
        divNum = 16;
    }
    builder();
    eventSetter();
}

// builds the grid
function builder() {
    let divTotal = divNum * divNum;
    main.style.gridTemplateColumns = `repeat(${divNum}, 1fr)`;
    main.style.gridTemplateRows = `repeat(${divNum}, 1fr)`;
    for (let i = 0; i < divTotal; i++) {
        const box = document.createElement('div');
        box.classList.add('etchBox');
        main.appendChild(box);
    }
}

// sets events for all elements in grid
function eventSetter() {
    const etchBox = document.querySelectorAll('.etchBox');
    etchBox.forEach((etchBox) => {
        let shade = 0;
        etchBox.addEventListener('mouseover', (e) => {
            etchBox.style.backgroundColor = `rgba(0,0,0,${shade += 0.5})`;
        });
    });
}

// resets the grid 
function eraser() {
    let etchBox = document.querySelectorAll('.etchBox');
    etchBox.forEach((etchBox) => {
        if (etchBox.style.backgroundColor != 'gray') {
            etchBox.style.backgroundColor = 'gray';
        }
    });
}