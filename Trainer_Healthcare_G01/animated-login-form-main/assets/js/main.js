const showHiddenPass = (loginPass, loginEye) => {
   const input = document.getElementById(loginPass),
      iconEye = document.getElementById(loginEye);

   iconEye.addEventListener('click', () => {
      // Change password to text
      if (input.type === 'password') {
         // Switch to text.
         input.type = 'text';

         // Icon change
         iconEye.classList.add('ri-eye-line');
         iconEye.classList.remove('ri-eye-off-line');
      } else {
         // Change to password
         input.type = 'password';

         // Icon change
         iconEye.classList.remove('ri-eye-line');
         iconEye.classList.add('ri-eye-off-line');
      }
   });
};

showHiddenPass('login-pass', 'login-eye');

// Redirect to Create Account page when Login button is clicked
document.querySelector('.login__button').addEventListener('click', function (event) {
   event.preventDefault(); // Prevent form submission
   window.location.href = 'create.html'; // Redirect to the Create Account page
});
