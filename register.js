// register.js
function handleRegister() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Verifică dacă ambele câmpuri sunt completate
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('All fields are required.');
      return;
    }
  
    // Salvează datele în localStorage (simulând stocarea pe server)
    localStorage.setItem('user', JSON.stringify({ username, email, password }));
  
    // Redirecționează către login.html după înregistrare
    window.location.href = 'login.html';
  }
  