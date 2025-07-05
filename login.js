document.getElementById('login-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  const msg = document.getElementById('msg');

  try {
    const response = await fetch('https://notes-api-c1mt.onrender.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      msg.innerText = "Login successful!";
      window.location.href = "/dashboard.html"; // ✅ redirect after login
    } else {
      msg.innerText = data.message || "Login failed.";
    }

  } catch (error) {
    msg.innerText = "Server error.";
    console.error(error);
  }
});
