console.log('Задача 1');
// Task 1
let student = {
  group: 201,
  last_name: "Иванов",
  first_name: "Иван"
};

console.log('Свойства объекта: ');
for (key in student) {
  console.log(key);
}
console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`);


console.log('Задача 2');
// Task 2
function arrayCut(array) {
  let arrayLen = array.length;
  for (let i = 0; i < arrayLen; i++) {
    if (array.length === 1) {
      console.log(array[0].toString());
      return;
    }
    let str = `${array[array.length - 1]} осталось `;
    array.pop();
    str += array;
    console.log(str);
  }
}
arrayCut([1,2,3]);


console.log('Задача 3');
// Task 3
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
console.log(isPalindrome('довод'));

console.log('Задача 4');
// Task 4
function scalarMultiplication(num, matrix) {
  let result = [];
  
  for (let i = 0; i < matrix.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      result[i].push( matrix[i][j] * num );
    }
  }
  
  for (let i = 0; i < result.length; i++) {
    console.log( result[i].join('  ') );
  }
}
scalarMultiplication(3, [[1,2,3],[4,5,6],[7,8,9]]);