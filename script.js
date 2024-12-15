// Mengambil elemen toggle dark mode
const darkModeToggle = document.getElementById('darkModeToggle');

// Menambahkan event listener untuk toggle
darkModeToggle.addEventListener('click', () => {
    // Mengubah kelas body untuk dark mode
    document.body.classList.toggle('dark-mode');
    
    // Mengubah kelas header, modul, dan footer untuk dark mode
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelectorAll('.modul').forEach(modul => {
        modul.classList.toggle('dark-mode');
    });
});