// class Support {
//     name;
//     designation = 'Support Web Dev';
//     address = 'BD';
//     constructor(name, address) {
//         this.name = name;
//         this.address = address;
//     }
//     startSession() {
//         console.log(this.name, 'start a support session');
//     }
// }

// const aamir = new Support('Aamir Khan', 'BD');
// const salman = new Support('Solaiman Khan', 'Dubai');
// const sharuk = new Support('SRK Khan', 'Dubai');
// const akshay = new Support('Akshay Kumar', 'Dubai');
// aamir.startSession();
// salman.startSession();
// console.log(aamir, salman, sharuk, akshay);
// // console.log(salman);

class Support {
  name;
  designation = "support Web Developer ";
  Adress = "Bangladesh";

  constructor(name, Adress, phoneNumber) {
    this.name = name;
    this.Adress = Adress;
  }
  startSession() {
    console.log("start a new Session");
  }
}
const aamir = new Support("Amir Khan", "Uganda");
console.log(aamir);
const salman = new Support("Salman Khan", "Dubai");
console.log(salman);
const irfan = new Support("Irfan Khan", "San Fransisco");
console.log(irfan);
aamir.startSession();
