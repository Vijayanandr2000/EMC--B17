// function solve() {
//   console.log(this);
// }

// const solve1 = () => {
//   console.log(this);
// };

// solve();
// solve1();

let solve = () => {
  return {
    name: "vijay",
    fn: () => {
      return () => {
        console.log(this);
      };
    },
  };
};

solve().fn()();

// console.log(this);
