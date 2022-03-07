const maIsComing = () => {
  alert("Mom is Coming.Open the book!!");
};
const goingToPicnic = () => {
  const response = confirm("Can I go to The Picnic With  My Friends??");
  console.log(response);
  if (response === true) {
    alert("thank you so much!");
  } else {
    alert("Keno re vai?!");
  }
};
const asking = () => {
  const name = prompt("Whats Your Name ?");
  if (name) {
    console.log(name);
  }
};
