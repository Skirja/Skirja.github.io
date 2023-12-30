let currentImageIndex = 0;

function changeImage() {
    const carouselImages = document.getElementsByClassName('carousel-image');

    // Menghilangkan tanda 'active' pada gambar saat ini
    carouselImages[currentImageIndex].classList.remove('active');

    // Mengalihkan ke gambar berikutnya
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;

    // Menambahkan tanda 'active' pada gambar berikutnya
    carouselImages[currentImageIndex].classList.add('active');
}

// Mengatur interval untuk beralih antara gambar setiap 3 detik
setInterval(changeImage, 3000);

function initCarousel() {
    const carouselImages = document.getElementsByClassName('carousel-image');
    carouselImages[0].classList.add('active');
}

// Memanggil fungsi initCarousel untuk menambahkan tanda 'active' pada gambar pertama kali
initCarousel();

// form

function sendMessage() {
    const name = document.getElementById('name').value;
    const notlp = document.getElementById('notlp').value;
    const dropitem = document.getElementById('dropitem').value;

    const url = "https://api.whatsapp.com/send?phone=6288214673073&text=Halo%2C%20saya%20mau%20mendaftar%20FITNESS.%0A%0ANama%3A%20*"+ name +"*%0ANo.TLP%3A%20*"+ notlp +"*%0AKategori%3A%20*"+ dropitem +"*";

    window.open(url);
}

// form daftar button

function daftar() {
    var content4 = document.getElementsByClassName("content-4")[0];
    content4.scrollIntoView({behavior: "smooth"});
}