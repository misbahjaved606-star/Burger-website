let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(name + " added to cart!\nItems in cart: " + cart.length);
}

function scrollToMenu() {
  document.getElementById("menu")
    .scrollIntoView({ behavior: "smooth" });
}

function sendMessage(event) {
  event.preventDefault();
  alert("Thank you for contacting Burger House!");
}
