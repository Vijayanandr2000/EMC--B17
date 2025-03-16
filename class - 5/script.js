// // if (true) {
// //   let name = "vijay";
// //   var age = 23;
// //   console.log(1, name); //vijay
// //   console.log(1.1, age); //23
// // }
// // console.log(2.1, age); //23
// // console.log(2, name); //not defined

// function greet(name, age, place = "chennai") {
//   //   const des =
//   //     "My name is" +
//   //     " " +
//   //     name +
//   //     ", " +
//   //     "My age is" +
//   //     " " +
//   //     age +
//   //     ", " +
//   //     "My place is" +
//   //     " " +
//   //     place;

//   //templete literals ""

//   //   name = "vijay" => `my name is ${name}`
//   const des = `My name is ${name}, My age is ${age}, My place is ${place}`;

//   console.log(des);

//   //   return des;
// }

// // let ans = greet("vijay", 23, "velslore"); //not defined

// let obj = {
//   name: "vijay",
//   age: 24,
// };

// console.log(obj["name"]);
// console.log(obj.place);

// let { name, age } = obj;

// console.log(name, age);

// let newData = [7, 8, 9];

// let arr = [0, 1, 2, 3, 4, 5, 6, ...newData];

// console.log(arr[0], arr);

// let [a, b, c, ...d] = arr;

// console.log(a, b, c, d);

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(2);

      //   resolve();
      reject({
        name: "vijay",
      });
    }, 2 * 1000);
  });
}

// call back hell
// delay().then(() => {
//   console.log(2);
//   console.log(3);
// });

// async/await => es6

async function solve() {
  try {
    console.log(1);

    await delay();

    console.log(3);
  } catch (error) {
    console.log("error", error);
  }
}

solve();
