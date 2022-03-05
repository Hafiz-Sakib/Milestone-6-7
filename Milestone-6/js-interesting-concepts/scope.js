const favNum = 27;

function add(first, second) {
  // console.log(mood); // hoisting
  const result = first + second;

  if (result > 9) {
    let mood = "happy";
    mood = "cranky";
  }
  // console.log(mood);
  return result;
}
const sum = add(11, 35);
// console.log(mood);

for (let i = 0; i < 10; i++) {
  //   console.table(i);
}

const math = [10, 10, 20, 20, 20, 30];
console.table(math);
