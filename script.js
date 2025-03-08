document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.show-details');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const projectID = button.getAttribute('data-project');
            const details = document.getElementById(`details-${projectID}`);

            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                button.textContent = 'Hide details';
            } else {
                details.style.display = 'none';
                button.textContent = 'Show details';
            }
        });
    }); 
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;

    const name = document.getElementById('name');
     if (name.value.trim() === '') {
        isValid = false;
        name.placeholder = 'Name is required';
    } else {
        nameplaceholder = 'Enter your name';
    }

    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
            email.placeholder = 'Enter a valid email address';
            isValid = false;
        } else {
            email.placeholder = 'Enter your email';
    }
    
    const message = document.getElementById('message');
    if (message.value.trim() === '') {
        isValid = false;
        message.placeholder = 'Message is required';
    } else {
        message.placeholder = 'Enter your message';
    }

    if (isValid) {
        form.submit();
    }
});