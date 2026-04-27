// This is the boilerplate code given for you
// You can modify this code
// Product data
let cart = [];

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  productList.innerHTML = ""; // prevent duplication
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${product.name} - $${product.price}
      <button class="add-to-cart-btn" data-id="${product.id}">
        Add to Cart
      </button>
    `;
    li.querySelector("button").addEventListener("click", () => {
      addToCart(product.id);
    });
    productList.appendChild(li);
  });
}

const cartList = document.getElementById("cart-list");
// Render cart list
function renderCart() {
  cartList.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price}
      <button>Remove</button>
    `;
    li.querySelector("button").addEventListener("click", () => {
      removeFromCart(index);
    });
    cartList.appendChild(li);
  });
}

// Add item to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  renderCart();
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

// Clear cart
const clearCartBtn = document.getElementById("clear-cart-btn");
function clearCart() {
  cart = [];
  renderCart();
}
clearCartBtn.addEventListener("click", clearCart);

// Initial render
renderProducts();
renderCart();
