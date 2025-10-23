// document.addEventListener('DOMContentLoaded', function() {
//     const loginForm = document.getElementById('loginForm');
//     const inputs = document.querySelectorAll('input');
    
//     // Form submission handler
//     loginForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         const username = document.getElementById('username').value;
//         const password = document.getElementById('password').value;
        
//         // Basic validation
//         if (username.trim() === '' || password.trim() === '') {
//             alert('Please fill in all fields');
//             return;
//         }
        
//         // Here you would typically send the data to a server
//         console.log('Login attempt:', { username, password });
        
//         // Simulate login process
//         alert('Login successful! (This is a demo)');
        
//         // For demo purposes - you can clear the form if needed
//         // loginForm.reset();
//     });
    
//     // Add interactive effects to inputs
//     inputs.forEach(input => {
//         input.addEventListener('focus', function() {
//             this.parentElement.style.transform = 'scale(1.02)';
//         });
        
//         input.addEventListener('blur', function() {
//             this.parentElement.style.transform = 'scale(1)';
//         });
//     });
    
//     // Forgot password link handler
//     const forgotPasswordLink = document.querySelector('.forgot-password');
//     forgotPasswordLink.addEventListener('click', function(e) {
//         e.preventDefault();
//         alert('Password reset functionality would be implemented here!');
//     });
// });