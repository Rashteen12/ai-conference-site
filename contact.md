---
layout: default
title: Contact
---

<h1>Contact Us</h1>

<form action="/contact_success.html" method="get">
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name" required><br><br>

  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email" required><br><br>

  <label for="message">Message:</label><br>
  <textarea id="message" name="message" required></textarea><br><br>

  <input type="submit" value="Send Message">
</form>
