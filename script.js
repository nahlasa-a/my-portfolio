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