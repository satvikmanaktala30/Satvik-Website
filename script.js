// ====== EASY SETUP ======
// Replace these values before publishing.
const SITE_EMAIL = 'YOUR_EMAIL_HERE';

// Contact form: opens the visitor's email app with the enquiry pre-filled.
function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const subject = encodeURIComponent(`Collaboration enquiry — ${data.get('brand') || data.get('name')}`);
  const body = encodeURIComponent(
`Name: ${data.get('name')}
Brand / Company: ${data.get('brand') || '-'}
Email: ${data.get('email')}
Looking for: ${data.get('service')}

Campaign brief:
${data.get('message') || '-'}`
  );
  window.location.href = `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`;
  return false;
}

// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
  });
}

// Gentle reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
