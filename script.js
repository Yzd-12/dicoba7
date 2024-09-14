// Efek Hati Jatuh
function createFallingHearts() {
    const heartContainer = document.getElementById('falling-hearts');

    setInterval(() => {
        let heart = document.createElement('div');
        heart.classList.add('falling-heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000); // Hapus hati setelah 4 detik
    }, 500); // Tambahkan hati baru setiap 0,5 detik
}

window.onload = function() {
    createFallingHearts(); // Mulai animasi hati jatuh saat halaman dimuat
};

// Tema Gelap/Terang
function toggleTheme() {
    const body = document.body;
    const button = document.getElementById("theme-toggle-button");

    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        button.textContent = "Mode Terang ☀️";
    } else {
        button.textContent = "Mode Gelap 🌙";
    }
}

// Button Love
function showLoveConfession() {
    const confession = document.getElementById('confession-message');
    confession.classList.remove('hidden');
    confession.classList.add('fade-in');
}

// Form Pesan Rahasia
document.getElementById("secret-message-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const message = document.getElementById("secret-message").value;
    
    if (message) {
        alert("Pesanmu telah dikirim!");
        document.getElementById("secret-message").value = ''; // Kosongkan kolom setelah pengiriman
    }
});
