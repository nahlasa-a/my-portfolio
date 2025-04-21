document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    const savedTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    document.body.classList.toggle('dark-theme', savedTheme === 'dark');
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    });

    const buttons = document.querySelectorAll('.show-details');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const projectID = button.getAttribute('data-project');
            const details = document.getElementById(`details-${projectID}`);
            const icon = button.querySelector('i');

            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                button.innerHTML = 'Hide Details <i class="fas fa-chevron-up"></i>';
                details.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                details.style.display = 'none';
                button.innerHTML = 'Show Details <i class="fas fa-chevron-down"></i>';
            }
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
