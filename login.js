// login.js
document.addEventListener('DOMContentLoaded', function () {
    const autoLoginForm = document.getElementById('auto-login-form');
  
    // Verifică dacă există un utilizator memorat în localStorage
    const rememberedUser = localStorage.getItem('user');
  
    if (rememberedUser) {
      autoLoginForm.style.display = 'block';
      redirectToHome();
    } else {
      autoLoginForm.style.display = 'none';
    }
  });
  
  function handleAutoLogin() {
    // Implementează logica pentru preluarea automată a datelor din localStorage și autentificarea
    const savedUser = localStorage.getItem('user');
    
    // Poți efectua o acțiune suplimentară aici, cum ar fi redirecționarea către pagina principală
    redirectToHome();
  }
  
  function redirectToHome() {
    // Redirecționează către pagina principală
    window.location.href = 'main/home.html'; // Schimbă "home.html" cu calea către pagina ta principală
  }
  