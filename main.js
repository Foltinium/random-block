let container = document.querySelector(`.container`);
let buttonAdd = document.querySelector(`.buttonAdd`);
let buttonDel = document.querySelector(`.buttonDel`);

// function onClick() {
//     min = 5;
//     max = 80;

//     let x = Math.floor(Math.random() * (max - min)) + min;
//     let y = Math.floor(Math.random() * (max - min)) + min;
//     let block = `
//         <div class="block green" style="left: ${x}vw; top: ${y}vh;"></div>
//         `;
//     container.innerHTML += block;
//     return x;
//     return y;
// };

// button.addEventListener(`click`, onClick);

buttonAdd.addEventListener(`click`, function () {
    let block = `<div class="block new"></div>`;

    for (let i = 0; i < 10; i++) {
        let color = '#';
        let letters = '0123456789ABCDEF';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        container.innerHTML += block;
        min = 0;
        maxX = 95;
        maxY = 85;
        let x = Math.floor(Math.random() * (maxX - min + 1) + min);
        let y = Math.floor(Math.random() * (maxY - min + 1) + min);

        let blockNode = document.querySelector(`.new`);
        blockNode.classList.remove(`new`);

        if (x < 1) {
            x = 0.3;
        }

        blockNode.style.backgroundColor = color;
        blockNode.style.left = `calc(${x}vw - 0.3vw)`;
        blockNode.style.top = `${y}vh`;
    }
})

buttonDel.addEventListener(`click`, function () {
    container.innerHTML = ``;
})