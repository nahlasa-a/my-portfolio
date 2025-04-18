document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });

    const buttons = document.querySelectorAll('.show-details');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const projectID = button.getAttribute('data-project');
            const details = document.getElementById(`details-${projectID}`);
            
            details.classList.toggle('visible');
            button.textContent = details.classList.contains('visible') ? 'Hide Details' : 'Show Details';
        });
    }); 
    
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let isValid = true;
            
            const name = document.getElementById('name');
            if (name.value.trim() === '') {
                isValid = false;
                name.classList.add('error');
                name.placeholder = 'Please enter your name';
            } else {
                name.classList.remove('error');
            }
            
            const email = document.getElementById('email');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                isValid = false;
                email.classList.add('error');
                email.placeholder = 'Please enter a valid email';
            } else {
                email.classList.remove('error');
            }
            
            const message = document.getElementById('message');
            if (message.value.trim() === '') {
                isValid = false;
                message.classList.add('error');
                message.placeholder = 'Please enter your message';
            } else {
                message.classList.remove('error');
            }
            
            if (isValid) {
                form.reset();
                alert('Thank you for your message! I will get back to you soon.');
            }
        });
        
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                input.classList.remove('error');
            });
        });
    }
});
