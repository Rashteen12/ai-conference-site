---
layout: default
title: Contact Success
permalink: /contact_success.html
---

<h2>Thank you!</h2>
<p>Your message has been successfully sent. We’ll get back to you soon.</p>

<script>
  const params = new URLSearchParams(window.location.search);
  const name = params.get('name');
  if (name) {
    document.write(`<p>Hello <strong>${name}</strong>, we’ve received your message!</p>`);
  }
</script>
