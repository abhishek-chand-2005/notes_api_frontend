document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const res = await fetch('https://notes-api-c1mt.onrender.com/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (res.ok) {
            // ✅ REDIRECT here
            window.location.href = '/dashboard.html'; // or any page
        } else {
            document.getElementById('msg').innerText = data.message || 'Login failed';
        }

    } catch (err) {
        document.getElementById('msg').innerText = 'Server error';
        console.error(err);
    }
});
