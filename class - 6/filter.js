// let a = [1, 2, 3, 4, 5];

// let even = a.filter((item) => item % 2 == 0);

// console.log(even);

let a = [
  {
    name: "vijay",
    age: 25,
    city: "chennai",
  },
  {
    name: "vijay1",
    age: 12,
    city: "chennai",
  },
  {
    name: "vijay2",
    age: 17,
    city: "chennai",
  },
  {
    name: "vijay3",
    age: 28,
    city: "chennai",
  },
];

let voters = a.filter((item) => item.age >= 18);

console.log(voters);
