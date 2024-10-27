// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle form submission
const contactForm = document.getElementById('contact-form');
const confirmationMessage = document.getElementById('confirmation');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulate a simple form submission
    setTimeout(() => {
        confirmationMessage.textContent = "Thank you! Your message has been sent.";
        contactForm.reset();
    }, 500);
});
