// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));

// EmailJS Configuration
emailjs.init('lm_GYwTIlzZ87UFjY');

// Contact Form
const contactForm = document.getElementById('contactForm');
const submitBtn = document.querySelector('.contact-form button');

if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Disable button during submission
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        'service_krxkdwn', 
        'template_5uvzm4q', 
        {
          from_name: name,
          from_email: email,
          message: message,
          to_email: 'amosalah092@gmail.com'
        }
      );
      
      // Success
      alert('Message sent successfully! I\'ll get back to you soon.');
      contactForm.reset();
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
    } catch (error) {
      console.error('Failed to send email:', error);
      alert(`Failed to send message: ${error.message}\n\nCheck browser console (F12) for details.`);
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
    }
  });
}
