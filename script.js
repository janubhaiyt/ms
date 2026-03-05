// GSAP Animations
gsap.from(".card", { duration: 1, y: 50, opacity: 0, stagger: 0.2 });
gsap.from("#home h2", { duration: 2, scale: 0.5, opacity: 0, ease: "back" });

// Mobile Menu Toggle
function toggleMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

// Modal Functions
function openModal(teacher) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const content = document.getElementById('modal-content');
    if (teacher === 'teacher1') {
        title.textContent = 'Teacher Name';
        content.textContent = 'Detailed bio: 15 years experience in STEM education, awards for innovative teaching.';
    }
    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

// Event Carousel (Basic)
let currentIndex = 0;
const carousel = document.querySelector('.event-carousel');
const items = carousel.children;
function slideCarousel(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = items.length - 1;
    if (currentIndex >= items.length) currentIndex = 0;
    carousel.style.transform = `translateX(-${currentIndex * 320}px)`;
}

// Contact Form with Validation and EmailJS (Add EmailJS script to HTML)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (!name || !email || !message) {
        alert('Please fill all fields.');
        return;
    }
    // Integrate EmailJS here: emailjs.send('service_id', 'template_id', {name, email, message});
    alert('Message sent! We\'ll get back to you.');
});