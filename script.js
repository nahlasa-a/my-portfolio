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
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projects.forEach(project => {
                if (filterValue === 'all' || project.getAttribute('data-category') === filterValue) {
                    project.style.display = 'flex';
                } else {
                    project.style.display = 'none';
                }
            });
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
                message.placeholder = 'Your message...';
            }
            
            if (isValid) {
                const submitBtn = form.querySelector('.submit-btn');
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.classList.add('success');
                
                setTimeout(() => {
                    form.reset();
                    submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                    submitBtn.classList.remove('success');
                }, 2000);
            }
        });
        
        const animateOnScroll = () => {
            const sections = document.querySelectorAll('.section');
            
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (sectionTop < windowHeight - 100) {
                    section.classList.add('fade-in-visible');
                }
            });
        };
    
        animateOnScroll();
        
        window.addEventListener('scroll', animateOnScroll);
    
        const lazyLoadImages = () => {
            const lazyImages = document.querySelectorAll('img[loading="lazy"]');
            
            lazyImages.forEach(img => {
                if (img.getBoundingClientRect().top < window.innerHeight + 100) {
                    img.src = img.getAttribute('data-src') || img.src;
                    img.removeAttribute('loading');
                }
            });
        };
    
        lazyLoadImages();
        
        window.addEventListener('scroll', lazyLoadImages);
    }
});