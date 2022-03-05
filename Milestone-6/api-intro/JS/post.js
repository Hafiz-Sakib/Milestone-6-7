function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
}

loadPosts();

function displayPost(datum) {
  const postContainer = document.getElementById("posts");
  for (const post of datum) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    `;
    postContainer.appendChild(div);
  }
}

//add a post
function addAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "My new post",
      body: "This is my posts",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
addAPost();
