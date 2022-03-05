// Same thing But Expended and Advanced

const bank = (owner) => {
  let balance = 0;
  return {
    deposit: (amount) => {
      //   balance = balance + amount;
      balance += amount;
      return balance;
    },
    withdraw: (amount) => {
      // balance = balance - amount;
      balance -= amount;
      return balance;
    },
  };
};

const mofizBank = bank("mofiz");
console.log(mofizBank.deposit(1000));
console.log(mofizBank.deposit(1000));
console.log(mofizBank.deposit(1000));
console.log(mofizBank.deposit(1000));
console.log(mofizBank.deposit(50));
console.log(mofizBank.balance); //we cant access the property balance.it will be closured
console.log(mofizBank.withdraw(50));
console.log(mofizBank.withdraw(50));
