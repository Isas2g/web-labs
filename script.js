let num = 10;
let str = 'hello';
let strNum = '1200';
let bool = true;
let nul = null;

console.log('1 Задача.');
console.log('Приведение числа к строке: ' + num + str);
console.log('Приведение строки к числу унарным + : ' + +strNum);
console.log('typeof (+strNum) : ' + typeof (+strNum));
console.log('Приведение булева значения к числу: ' + (num + bool));
console.log('Приведение null к числу (нулю): ' + (num + nul));
console.log('Приведение булева значения к строке: ' + (str + bool));
console.log('Приведение null к строке: ' + (str + nul));
console.log('_________________________________________________');


let rectangle = document.getElementById('rectangle');

rectangle.addEventListener('click', _ => {
  let aSide = parseInt(document.getElementById('aSide').value);
  let bSide = parseInt(document.getElementById('bSide').value);
  let P = (aSide + bSide)*2;
  let S = aSide * bSide;
  let PperS = P/S;
  console.log('2 Задача.');
  console.log(`Периметр ${P}`);
  console.log(`Площадь ${S}`);
  console.log(`Отношение периметра к площади ${PperS}`);
  console.log('_________________________________________________');
});


console.log('3 Задача.');

let celsius = 26;
let fahrenheit = 48;
console.log(`${celsius}\xB0C соответствует ${celsius * 1.8 + 32}\xB0F`);
console.log(`${fahrenheit}\xB0F соответствует ${(fahrenheit - 32) / 1.8}\xB0C`);


console.log('4 Задача.');
let year = +prompt('Введите год');

if ( (year % 4 === 0) && (year % 100 !== 0) ) {
  alert(true);
} else alert(false);


console.log('5 Задача.');
let firstNum = 5;
let secondNum = 5;

if ( firstNum === 10 || secondNum === 10 || firstNum + secondNum === 10) {
  alert(true);
}