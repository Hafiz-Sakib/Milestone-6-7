//Task 2

const asking = () => {
  const number = prompt("Please Enter a Number");
  if (isNaN(number) === false) {
    newNumber = parseInt(number) + 200;
    alert(newNumber);
  } else {
    return alert("Please Enter a Number");
  }
};

const submit = () => {
  asking();
};

//Task 3

const watch = () => {
  const permit = confirm("Do You Want To see the href link?");
  if (permit === true) {
    const div = document.getElementById("heading");
    div.innerHTML = `
    <h1 class = "text-center text-danger mt-5">http://127.0.0.1:5500/task2.html#</h1>
    `;
  } else {
    const div = document.getElementById("heading");
    div.innerHTML = `
    <h1  class = "text-center text-danger mt-5">Thank You!</h1>
    `;
  }
};

//Task 4

// Cookies are essential for our fast browsing experience.Cookies helps to store cart and other information of users so that when next time user uses the website . But on the other hand cookies have some security problems too.Because fishers can stole users informatrion via cookies.

//Task 5

// Three  Difference Between Local Storage and Session Storage:

// 1)Local storage are Permanent But Session Storage are not Permanent

// 2)
