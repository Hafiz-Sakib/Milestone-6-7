const bank = (owner) => {
  let balance = 0;
  return (amount) => {
    // balance = balance + amount;
    balance += amount;
    return balance;
  };
};
const mofizBank = bank("mofiz");

//Noob Way to call the function
// const deposit1 = mofizBank(10);
// console.log(deposit1);

//Pro Way

console.log(mofizBank(1000));
console.log(mofizBank(1000));
console.log(mofizBank(1000));
console.log(mofizBank(1000));
console.log(mofizBank.balance); //we cant access the property balance from outside.it will be closured
console.log(mofizBank(50));
