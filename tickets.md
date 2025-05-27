---
layout: default
title: Tickets
permalink: /tickets/
---

<h1>🎫 Purchase Tickets</h1>

<p>Please fill in your details to receive a confirmation email. This is a simulated form and does not process real payments.</p>

<form action="/success.html" method="GET">
  <label for="name">Full Name:</label><br>
  <input type="text" id="name" name="name" required><br><br>

  <label for="email">Email Address:</label><br>
  <input type="email" id="email" name="email" required><br><br>

  <label for="card">Credit Card Number:</label><br>
  <input type="text" id="card" name="card" required><br><br>

  <input type="submit" class="nav-button" value="Confirm Purchase">
</form>

<p><a class="nav-button" href="/cart.html">🛒 View Cart</a></p>