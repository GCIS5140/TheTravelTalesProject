/*Developed by Priya Mankar*/
         const homeLink = document.querySelector('.fas.fa-home');
         const videoContainer = document.getElementById('video-container');
         // Get the Login/Sign Up link
         const loginLink = document.querySelector('.fas.fa-sign-in-alt');
         
         // Get the Login container
         const loginContainer = document.querySelector('.login-container');		
         const slickSliderContainer = document.getElementById('slick-slider-container');
         const ViewBlogs = document.querySelector('.fas.fa-blog');
         const contactLink = document.querySelector('.fas.fa-envelope');
         const planLink = document.querySelector('.fas.fa-calendar');		
         const contactSection = document.getElementById('contact'); // Get the contact section
         const footer = document.getElementById('footer'); // Get the footer
         const blogLink = document.querySelector('.fas.fa-pen-fancy');
         const blogSection = document.getElementById('blog');
         const submittedBlogOverlay = document.getElementById('submitted-blog-overlay'); // Reference to the submitted blog overlay	
         
         // Show the video on first load
         videoContainer.style.display = 'block';
         
         homeLink.addEventListener('click', () => {
         videoContainer.style.display = 'block'; // Show the video
         slickSliderContainer.style.display = 'none'; // Hide the slick slider
         contactSection.style.display = 'none'; // Hide the contact section
         footer.style.display = 'none'; // Hide the footer
         blogSection.style.display = 'none'; // Hide the blog section
         submittedBlogOverlay.style.display = 'none'; // Hide the submitted blog overlay
         loginContainer.style.display = 'none';
         });
         
         
         // Add a click event listener to the login link
         loginLink.addEventListener('click', () => {
         videoContainer.style.display = 'none'; // Show the video
         slickSliderContainer.style.display = 'none'; // Hide the slick slider
         contactSection.style.display = 'none'; // Hide the contact section
         footer.style.display = 'none'; // Hide the footer
         blogSection.style.display = 'none'; // Hide the blog section
         submittedBlogOverlay.style.display = 'none'; // Hide the submitted blog overlay
         // Toggle the display property of the login container
         if (loginContainer.style.display === 'none') {
         loginContainer.style.display = 'block';
         } else {
         videoContainer.style.display = 'block';
         }
         });
         
         ViewBlogs.addEventListener('click', () => {
         videoContainer.style.display = 'none'; // Show the video
         slickSliderContainer.style.display = 'block'; // Hide the slick slider
         contactSection.style.display = 'none'; // Hide the contact section
         footer.style.display = 'none'; // Hide the footer
         blogSection.style.display = 'none'; // Hide the blog section
         submittedBlogOverlay.style.display = 'none'; // Hide the submitted blog overlay
         loginContainer.style.display = 'none';
         $('.slider').slick({
                 dots: true,
                 infinite: true,
                 speed: 500,
                 slidesToShow: 1,
                 adaptiveHeight: true,
                 // Add more options as needed
             });
         });
         
         contactLink.addEventListener('click', () => {
         videoContainer.style.display = 'none';
         slickSliderContainer.style.display = 'none';
         contactSection.style.display = 'block';
         footer.style.display = 'block';
         blogSection.style.display = 'none';
         submittedBlogOverlay.style.display = 'none'; // Hide the submitted blog overlay
         loginContainer.style.display = 'none';
         });
         
         blogLink.addEventListener('click', () => {
         videoContainer.style.display = 'none';
         slickSliderContainer.style.display = 'none';
         contactSection.style.display = 'none';
         footer.style.display = 'none';
         blogSection.style.display = 'block';
         submittedBlogOverlay.style.display = 'none'; // Hide the submitted blog overlay
         loginContainer.style.display = 'none';
         });
         
         // Handle the submission of the blog form
         const submitBlogFormButton = document.getElementById("submit-blog-button");
         submitBlogFormButton.addEventListener('click', (e) => {
         e.preventDefault(); // Prevent the form submission
         // Get the uploaded image file
         const imageInput = document.getElementById("blog-image");
         const imageFile = imageInput.files[0];
         videoContainer.style.display = 'none';
         slickSliderContainer.style.display = 'none';
         contactSection.style.display = 'none';
         footer.style.display = 'none';
         blogSection.style.display = 'none';
         submittedBlogOverlay.style.display = 'block'; // Show the submitted blog overlay
         loginContainer.style.display = 'none';
         });
         
           planLink.addEventListener('click', () => {
             window.open("http://escapesanywhere.com/", "_blank");
         });
         
         const loginButton = document.getElementById('login-button');
         const signupButton = document.getElementById('signup-button');
         const successMessage = document.getElementById('success-message');
         const signupSuccessMessage = document.getElementById('signup-success-message');
         const redirectMessage = document.getElementById('redirect-message');
         const redirectDiv = document.querySelector('.redirect-div');
         
         loginButton.addEventListener('click', function () {
             const username = document.getElementById('username').value;
             const password = document.getElementById('password').value;
             
             if (username && password) {
                 successMessage.style.display = 'block';
                 redirectUser();
             }
         });
         
         signupButton.addEventListener('click', function () {
             const newUsername = document.getElementById('username').value;
             const newPassword = document.getElementById('password').value;
             
             if (newUsername && newPassword) {
                 signupSuccessMessage.style.display = 'block';
                 redirectUser();
             }
         });
         
         function redirectUser() {
             redirectMessage.style.display = 'block';
             setTimeout(() => {
                 // Redirect after 3 seconds
         redirectDiv.style.display = 'block';
                 window.location.href = 'https://gcis5140.github.io/TheTravelTalesProject/'; // Replace with your desired URL            
             }, 3000);
         };
