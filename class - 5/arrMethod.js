// let arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);
// arr.push(5);

// console.log(arr);

// let pop = arr.pop();

// console.log(arr, pop);

// // arr.unshift()

// arr.forEach((val, idx, arr) => {
//   console.log(val, idx, arr);
// });

let newArr = arr.map((val) => {
  return val * 4;
});
console.log(newArr);

// let even = arr.filter((val) => val % 2 === 0);

// console.log(even);
// let sum = arr.reduce((acc, value) => {
//   return acc + value;
// }, 0);
// console.log(sum);

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// let newA = a.slice(2, 6);

// console.log(newA);

// a.splice(2, 4, 13, 14, 15);

// // arr.sum()

// console.log(a);

let data = [1, 2, 3, 4, 5, 6];

Array.prototype.sum = function () {
  let sum = this.reduce((acc, value) => {
    return acc + value;
  }, 0);

  return sum;
};

let vijay = [10, 9, 8, 9];

console.log(data.sum());
console.log(vijay.sum());
