// JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');
    var messageSent = document.getElementById('messageSent');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // You can perform additional validation here if needed
  
      // Show the message sent confirmation
      messageSent.style.display = 'block';
  
      // Optional: Clear the form fields after submission
      form.reset();
    });
  });
  