//Ways to Declare an Object in JavaScript

//1.Using Object Literal
const cricketPlayer = {
  name: "Sakib",
  jersey: 75,
  location: "magura",
};
// console.log(cricketPlayer.name);
// console.table(cricketPlayer);

//2.Constructor
const person = new Object();
// console.log(person);

//3.object.create

// const human = Object.create(null);
const human = Object.create(cricketPlayer);
// console.table(human.location);

//4.Create object with Class(Synthectical Sugar) =========> orthat dekhe mone hocche class diye kora hoise kintu ashole vitore vitore function diye kora hoye thake,like(method 5).(Just ekta upore Prolep Deya hoise Class Word ta diye)

class People {
  constructor(nationality, country, birth) {
    this.nationality = nationality;
    this.country = country;
    this.birth = birth;
  }
}

const intro = new People("Bangladeshi", "Bangladesh", 1971);
// console.table(intro);

//5.Old Method(Create an Object With Function)

function student(stuName, stuId, stuClass) {
  this.stuName = stuName;
  this.stuId = stuId;
  this.stuClass = stuClass;
}

const stu = new student("Naeem", 10, "Seven");
console.log(stu);
