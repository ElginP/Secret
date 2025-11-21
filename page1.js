const giftButton = document.getElementById('surpriseBtn');
const loginContainer = document.getElementById('loginFormContainer');

giftButton.addEventListener('click', function() {
    loginContainer.classList.toggle('hidden'); 
});

// Dapatkan elemen yang dibutuhkan
const closeBtn = document.querySelector('.close-btn');

// Tambahkan listener untuk tombol silang
closeBtn.addEventListener('click', function() {
    loginContainer.classList.add('hidden'); // Sembunyikan modal
});


/* ************ BONUS ELEGANT: Klik di Luar Kotak ************ */
/* Tambahkan ini agar modal juga tertutup jika pengguna mengklik area gelap di luar kotak kata sandi */
loginContainer.addEventListener('click', function(e) {
    // Memastikan klik hanya terjadi pada kontainer latar belakang, bukan pada kotak modal itu sendiri
    if (e.target.id === 'loginFormContainer') {
        loginContainer.classList.add('hidden');
    }
});
/* ************************************************************ */