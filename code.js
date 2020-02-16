const main = document.querySelector('#mainBox');
const button = document.querySelector('button');


//number selected by user to populate grid
const divNum = 12;
const divTotal = divNum * divNum;

main.style.gridTemplateColumns = `repeat(${divNum}, 1fr)`;
main.style.gridTemplateRows = `repeat(${divNum}, 1fr)`;

for (let i = 0; i < divTotal; i++) {
    const box = document.createElement('div');
    box.classList.add('etchBox');
    main.appendChild(box);
}

const etchBox = document.querySelectorAll('.etchBox');
etchBox.forEach((etchBox) => { 
    etchBox.addEventListener('mouseover', (e) => {
        etchBox.style.backgroundColor = 'black';
    });
});

