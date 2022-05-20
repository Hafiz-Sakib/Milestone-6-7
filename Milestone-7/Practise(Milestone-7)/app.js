const displayLocalStorageCart = () => {
  const cart = getCart();
  for (const name in cart) {
    displayProducts(name);
  }
};

const addToCart = () => {
  const nameInput = document.getElementById("nameField");
  const priceInput = document.getElementById("priceField");
  const name = nameInput.value;
  const price = priceInput.value;

  //Display Product name and Price In the UI
  displayProduct(name, price);

  //Add to Local Storage
  addProductToCart(name, price);

  //clear Field
  nameInput.value = "";
  priceInput.value = "";
};
const displayProduct = (name, price) => {
  const div = document.getElementById("product-information");
  const ol = document.createElement("ol");
  ol.innerHTML = `
  <li class = "text-bolder text-danger fs-4">${name} : ${price}</li>
  `;
  div.appendChild(ol);
};

const getCart = () => {
  const cart = localStorage.getItem("cart");
  let cartObj;
  if (cart === true) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }
  return cartObj;
};

const addProductToCart = (name, price) => {
  const cart = getCart();
  // if (cart[name]) {
  //   cart[name] = cart[name] + 1;
  // } else {
  //   cart[name] = 1;
  // }
  cart[name] = price;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const buyNow = () => {
  document.getElementById("products").textContent = "";
  localStorage.clear();
};

displayLocalStorageCart();

// [অপশনাল]

// ৯. একটা সিম্পল ওয়েবসাইট বানাও। সেখানে দুইটা ইনপুট ফিল্ড থাকবে। একটা ফিল্ডে লিখবে প্রোডাক্ট এর নাম। আর সেকেন্ড ইনপুট ফিল্ডে থাকবে প্রোডাক্ট এর প্রাইস। তারপর একটা বাটন থাকবে। সেই বাটনে চাপ দিলে। প্রোডাক্ট এর নাম আর দাম ব্রাউজারের লোকাল স্টোরেজে সেইভ হয়ে যাবে। এবং চাইলে একাধিক প্রোডাক্ট এবং সেটার দাম লোকাল স্টোরেজে সেইভ করতে পারবে।

// ১০. যখন একটা প্রোডাক্ট এবং দাম লোকাল স্টোরেজে সেভ করবে। সেটা ওয়েবসাইট এ ও দেখাবে। এমনকি যদি ওয়েবসাইট নতুন করে লোড করে করে তাহলেও লোকাল স্টোরেজে এ সেভ হয়ে থাকা ডাটা থেকে বের করে এনে ওয়েবসাইট এ দেখাবে।
