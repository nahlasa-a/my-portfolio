document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.show-details');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const projectID = button.getAttribute('data-project-id');
            const projectDetails = document.querySelector(`#project-details-${projectID}`);

            if (projectDetails.style.display === 'block') {
                projectDetails.style.display = 'none';
            } else {
                projectDetails.style.display = 'block';
            }
        });
    })
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    if (name.value.trim() === '') {
        isValid = false;
        nameError.textContent = 'Name is required';
    } else {
        nameError.textContent = '';
    }

    if (email.value.trim() === '') {
        isValid = false;
        emailError.textContent = 'Email is required';
    } else {
        emailError.textContent = '';
    }

    if (message.value.trim() === '') {
        isValid = false;
        messageError.textContent = 'Message is required';
    } else {
        messageError.textContent = '';
    }

    if (isValid) {
        form.submit();
    }
});