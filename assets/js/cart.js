
let studentDiscount = false;

function addToCart(item, price) {
  let cart = JSON.parse(localStorage.getItem("conference_cart") || "[]");
  cart.push({ item, price });
  localStorage.setItem("conference_cart", JSON.stringify(cart));

  const btn = document.querySelector(`.nav-button[onclick*="${item}"]`);
  if (btn) {
    const note = document.createElement("span");
    note.textContent = " ✅ Added!";
    note.style.color = "green";
    note.style.marginLeft = "10px";
    btn.parentNode.insertBefore(note, btn.nextSibling);
    setTimeout(() => note.remove(), 2000);
  }

  renderCart();
}

function toggleDiscount(checked) {
  studentDiscount = checked;
  localStorage.setItem("conference_discount", studentDiscount);
  renderCart();
}

function renderCart() {
  const cartItems = JSON.parse(localStorage.getItem("conference_cart") || "[]");
  const isStudent = localStorage.getItem("conference_discount") === "true";

  let html = '<ul>';
  let total = 0;

  cartItems.forEach(entry => {
    html += `<li>${entry.item} — CZK ${entry.price}</li>`;
    total += entry.price;
  });

  html += '</ul>';
  html += `<p><strong>Subtotal:</strong> CZK ${total}</p>`;

  if (isStudent && total > 0) {
    const discounted = Math.round(total * 0.5);
    html += `<p><strong>Student Discount Applied:</strong> -50%</p>`;
    html += `<p><strong>Total:</strong> CZK ${discounted}</p>`;
  } else {
    html += `<p><strong>Total:</strong> CZK ${total}</p>`;
  }

  html += `<button onclick="clearCart()" class="nav-button" style="background-color: #cc0000;">Empty Cart</button>`;
  html += ` <a href="/tickets/" class="nav-button">Continue to Payment</a>`;

  const output = document.getElementById("cart-output");
  if (output) {
    output.innerHTML = html;
  } else {
    console.error("Cart output element not found.");
  }
}

function clearCart() {
  localStorage.removeItem("conference_cart");
  localStorage.removeItem("conference_discount");
  renderCart();
}

document.addEventListener("DOMContentLoaded", () => {
  renderCart();
});
