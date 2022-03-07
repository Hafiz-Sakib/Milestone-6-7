const displayLocalStorageCart = () => {
  const cart = getCart();
  for (const name in cart) {
    displayProducts(name);
  }
};

const addToCart = () => {
  const inputField = document.getElementById("input");
  const name = inputField.value;
  if (!name) {
    return;
  }

  //Display in the UI
  displayProducts(name);

  //Add to the local storage
  addProductToCart(name);

  //clear Input Value
  inputField.value = "";
};

const displayProducts = (ProductName) => {
  const ol = document.getElementById("products");
  const li = document.createElement("li");
  li.classList.add("text-danger");
  li.innerText = ProductName;
  ol.appendChild(li);
};

const getCart = () => {
  const cart = localStorage.getItem("cart");
  let cartObj;

  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }
  return cartObj;
};

const addProductToCart = (name) => {
  const cart = getCart();
  if (cart[name]) {
    cart[name] = cart[name] + 1;
  } else {
    cart[name] = 1;
  }
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const buyNow = () => {
  document.getElementById("products").textContent = "";
  localStorage.clear();
};

displayLocalStorageCart();
