AOS.init({
    duration: 1000,
    once: true
});


// ----------------- Carousel -------------------------

const images = [
    './src/images/students.jpg',
    './src/images/staff.jpg',
    './src/images/staff_2.jpg',
    './src/images/symposium.jpg'
];

let currentIndex = 0;

const heroImage = document.getElementById('heroImage');

function updateImage(index) {
    heroImage.classList.remove('show');
    setTimeout(() => {
        heroImage.src = images[index];
        heroImage.classList.add('show');
    }, 1000);
}

heroImage.classList.add('show');

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
}, 10000);

// -----------------------------------------------