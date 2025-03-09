// let vijay = 1000;

// function chennai() {
//   //   console.log("chennai", vijay);
//   let vijay = 2000;
//   console.log("chennai", vijay);
// }

// function madurai() {
//   console.log("madurai", vijay);
// }

// function trichy() {
//   console.log("trichy", vijay);
// }

// console.log("global", vijay);

// chennai();
// console.log("global", vijay);

// let name = ["vijay"];

// function chennai() {
//   console.log("chennai", name);
//   name.push("anand");
//   console.log("chennai", name);
//   //   vijay, anand;
// }

// console.log("global", name);

// chennai();

// console.log("global", name);

let arr = [1, 2, 3, 4, 5];

console.log(arr[arr.indexOf(3)], arr[100]);

let obj = {
  name: "vijay",
  age: 28,
  city: "chennai",
  printDetails: function () {
    console.log(this.name, this.age, this.city);
  },
};

console.log(obj.name, obj["name"], obj.place);

obj.printDetails();
