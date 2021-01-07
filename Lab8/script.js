console.log('Задача 1.')
// Task 1
let num = parseInt(prompt('Задача 1. Введите число овечек.'));

for (let i = 1; i <= num; i++) {
  console.log(`${i} овечка`);
}


console.log('Задача 2.');
// Task 2
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} четное`);
  } else {
    console.log(`${i} нечетное`);
  }
}


console.log('Задача 3.');
// Task 3
for (let i = 0; i < 8; i++) {
  if (i % 2 === 0) {
    console.log('# '.repeat(4));
  } else {
    console.log(' #'.repeat(4));
  }
}


console.log('Задача 4.');
// Task 4
let numsArray = prompt('Задача 4. Введите числа через запятую для сортировки.').split(',');

for (let i = 0; i < numsArray.length; i++) {
  for (let j = 0; j < numsArray.length - i - 1; j++) {
    if ( parseInt(numsArray[j]) > parseInt(numsArray[j + 1]) ) {
      let temp = numsArray[j];
      numsArray[j] = numsArray[j + 1];
      numsArray[j + 1] = temp;
    }
  }
}
console.log(numsArray.toString());

console.log('Задача 5.');
// Task 5
let numsArray1 = prompt('Задача 5. Введите числа через запятую для нахождения максимального значения.').split(',');
let max = -Infinity;

for (let i = 0; i < numsArray1.length; i++) {
  numsArray1[i] = parseInt(numsArray1[i]);
}
for (let i = 0; i < numsArray1.length; i++) {
  if (max < numsArray1[i]) {
    max = numsArray1[i];
  }
}
console.log(max);