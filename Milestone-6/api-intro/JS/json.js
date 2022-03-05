const user = {
  id: 11,
  class: "eight",
  name: "amir khan",
  profession: "acting",
};

console.log(user);
const stringified = JSON.stringify(user);
console.log(stringified);

// JavaScript Object Notation
// JSON
const shop = {
  name: "Alia Store",
  address: "Ranbir road",
  profit: 15000,
  products: ["laptop", "mobile", "pepsi"],
  owner: {
    name: "Alia Bhatt",
    profession: "actor",
  },
  isExpensive: false,
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted.owner);
