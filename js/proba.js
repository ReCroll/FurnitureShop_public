
// let arrays = 1;

// for (let index = 0; index < array.length; index++) {
//     const elements = array[index];
//     console.log(elements);
// }
//     while (arrays <= 5) {
//         console.log(arrays);
//         arrays++;
//     }

// let num = 0;
// do {
//     console.log(num);
//     num++;

// } while (num < 0);

// for (let num = 0; num < 5; num++) {
//     console.log(num);
    
// }

// let num = 0;
// while (num < 3) {
//     console.log(`Число: ${num}`);
//     num++;

// }
//     cikl1: 
//     for (let num = 0; num <= 2; num++) {
//     for (let size = 0; size < 3; size++) {
//         if(size === 2) {
//             break cikl1;

//         }
//         console.log(size);    
//     }
//     console.log(num);
    
// }
// let showName = function showName() {
//     console.log('Вася');
    
// }
// showName();
// // setTimeout(showName, 0);
// //     console.log('коля');

// 'use strict'
// if (2 > 1) {
//     function showMessage() {
//         console.log('повідомлення');
        
//     }
//     showMessage();
// }

let sayHi = document.querySelectorAll('div');
for (let hi of sayHi) {
    if (hi.hasAttribute('data-say-hi')) {
        let showHi = hi.getAttribute('data-say-hi');
        console.log(showHi);
    }
    // console.log(sayHi);
}

let list = document.querySelectorAll('ul');
let listLast = list[1];
// console.log(list);
console.log(listLast);
listLast.insertAdjacentHTML(
    'beforeend',
    `<li>текст3</li>`
    );
    // let lastListText = lastList.innerHTML;
// console.log(lastList);
// console.log(lastListText);
// let sayHi = document.dataset('data-say-hi');
// sayHi.getAttribute('data-say-hi', 'yes');
// let like = document.querySelectorAll('.like');
// console.log(like);