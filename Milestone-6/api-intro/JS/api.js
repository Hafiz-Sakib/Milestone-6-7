function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}
function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data));
}
function displayUsers(datas) {
  const ul = document.getElementById("users");
  for (const user of datas) {
    const li = document.createElement("li");
    // li.innerText = user.name;
    li.innerText = `name : ${user.name}
                    user-email: ${user.email}
                    user-id : ${user.id}`;
    ul.appendChild(li);
    // console.log(user);
  }
}
