function userInfo() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser(data));
}

function displayUser(data) {
  for (const user of data) {
    const extra = "Bangladesh Win By 4 Wickets Against Afghanisthan";
    const div = document.getElementById("new-div");
    const para = document.createElement("p");
    para.innerText = `User Name: ${user.name}
                        User Email: ${user.email}
                        User ID: ${user.id}
                        Extra Info: ${extra}`;

    div.appendChild(para);
  }
}
