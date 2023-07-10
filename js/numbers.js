/*
let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
console.log('elemments :', elementWidth);

let elementHeight = '274.74px';
elementHeight = Number.parseFloat(elementHeight);
console.log('elemments :', elementHeight);



let salary = 1300.954;
salary = Number(salary.toFixed(2));
console.log(salary);


let quantity = "50"
let message = "Це рядок неможливо перетворити число";

console.log(Number(quantity));
console.log(Number(message));


const base = 2;
const power = 5;

const result = Math.pow(base, power);
console.log(result);


const base = prompt("введіть число");
const power = prompt("введіть число");
console.log(base ** power);
*/

const max = 80;
const min = 20;
/*const result = Math.random()*(max - min)+ min;*/
const result = Math.round(Math.random()*(max - min)+ min);
console.log(result);