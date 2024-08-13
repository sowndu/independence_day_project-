// Form Submission Handling
const form = document.getElementById('registrationForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for registering for the Independence Day event!');
});