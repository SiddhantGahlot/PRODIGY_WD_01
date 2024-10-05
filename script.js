document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // Clear form fields
    this.reset();

    // Hide the success message after 3 seconds
    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 3000); // 3000 milliseconds = 3 seconds
});
