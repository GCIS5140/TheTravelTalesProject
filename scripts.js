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
         const resourceLink = document.querySelector('.fas.fa-bookmark');
         const contactSection = document.getElementById('contact'); // Get the contact section
         const footer = document.getElementById('footer'); // Get the footer
         const blogLink = document.querySelector('.fas.fa-pen-fancy');
         const blogSection = document.getElementById('blog');
         // const careersLink = document.querySelector('.fas.fa-laptop-file');
         // const careersSection = document.getElementById('writingcareers');
         const submittedBlogOverlay = document.getElementById('submitted-blog-overlay'); // Reference to the submitted blog overlay	
         // Get the find companion container
         const findLink = document.querySelector('.fas.fa-users');
         const findSection = document.getElementById('find');
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
         findSection.style.display = 'none'; // Hide the find companion section
         // careersSection.style.display = 'none'; // Hide the Content Careers section
         });

         findLink.addEventListener('click', () => {
         videoContainer.style.display = 'none'; // Show the video
         slickSliderContainer.style.display = 'none'; // Hide the slick slider
         contactSection.style.display = 'none'; // Hide the contact section
         footer.style.display = 'none'; // Hide the footer
         blogSection.style.display = 'none'; // Hide the blog section
         submittedBlogOverlay.style.display = 'none'; // Hide the submitted blog overlay
         loginContainer.style.display = 'none';
         findSection.style.display = 'block'; // Hide the find companion section
         // careersSection.style.display = 'none'; // Hide the Content Careers section                  
         });
         
         // Add a click event listener to the login link
         loginLink.addEventListener('click', () => {
         videoContainer.style.display = 'none'; // Show the video
         slickSliderContainer.style.display = 'none'; // Hide the slick slider
         contactSection.style.display = 'none'; // Hide the contact section
         footer.style.display = 'none'; // Hide the footer
         blogSection.style.display = 'none'; // Hide the blog section
         submittedBlogOverlay.style.display = 'none'; // Hide the submitted blog overlay
         findSection.style.display = 'none'; // Hide the find companion section
         loginContainer.style.display = 'block';
         // careersSection.style.display = 'none'; // Hide the Content Careers section                  
         // Toggle the display property of the login container
         });
         
         ViewBlogs.addEventListener('click', () => {
         videoContainer.style.display = 'none'; // Show the video
         slickSliderContainer.style.display = 'block'; // Hide the slick slider
         contactSection.style.display = 'none'; // Hide the contact section
         footer.style.display = 'none'; // Hide the footer
         blogSection.style.display = 'none'; // Hide the blog section
         findSection.style.display = 'none'; // Hide the find companion section
         submittedBlogOverlay.style.display = 'none'; // Hide the submitted blog overlay
         loginContainer.style.display = 'none';
         // careersSection.style.display = 'none'; // Hide the Content Careers section                  
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
         findSection.style.display = 'none'; // Hide the find companion section
         submittedBlogOverlay.style.display = 'none'; // Hide the submitted blog overlay
         loginContainer.style.display = 'none';
         // careersSection.style.display = 'none'; // Hide the Content Careers section                  
         });
         // careersLink.addEventListener('click', () => {
         // videoContainer.style.display = 'none';
         // slickSliderContainer.style.display = 'none';
         // contactSection.style.display = 'none';
         // footer.style.display = 'none';
         // findSection.style.display = 'none'; // Hide the find companion section
         // blogSection.style.display = 'none';
         // submittedBlogOverlay.style.display = 'none'; // Hide the submitted blog overlay
         // loginContainer.style.display = 'none';
         // careersSection.style.display = 'block'; // Show the Content Careers section                  
         // });   
         // Handle the submission of the careers form
         // const submitContentFormButton = document.getElementById("submit-contentcareers-button");
         // submitContentFormButton.addEventListener('click', (e) => {
         // e.preventDefault(); // Prevent the form submission
         // Here you can add your logic to send the form data to the server
         // For demonstration purposes, we'll just show an alert:
         // alert("Message sent successfully!! You will hear from us shortly!! Happy Travelling!!");
         //    setTimeout(() => {
                 // Redirect after 3 seconds
         //        window.location.href = 'https://gcis5140.github.io/TheTravelTalesProject/'; // Replace with your desired URL            
         //    }, 3000);   
         // });

         blogLink.addEventListener('click', () => {
         videoContainer.style.display = 'none';
         slickSliderContainer.style.display = 'none';
         contactSection.style.display = 'none';
         footer.style.display = 'none';
         findSection.style.display = 'none'; // Hide the find companion section
         blogSection.style.display = 'block';
         submittedBlogOverlay.style.display = 'none'; // Hide the submitted blog overlay
         loginContainer.style.display = 'none';
         // careersSection.style.display = 'none'; // Hide the Content Careers section                  
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
         findSection.style.display = 'none'; // Hide the find companion section
         submittedBlogOverlay.style.display = 'block'; // Show the submitted blog overlay
         loginContainer.style.display = 'none';
         // careersSection.style.display = 'none'; // Hide the Content Careers section                  
         });
         
           planLink.addEventListener('click', () => {
             window.open("http://escapesanywhere.com/", "_blank");
         });

           resourceLink.addEventListener('click', () => {
             window.open("https://github.com/GCIS5140/TheTravelTalesProject/", "_blank");
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

// Add an event listener for the search button
document.getElementById("search-button").addEventListener("click", function() {
    const place = document.getElementById("place").value.toLowerCase();
    const date = document.getElementById("date").value;
    const days = parseInt(document.getElementById("days").value);

    // Check if both place and date are empty
    if (place === "" && date === "" && isNaN(days)) {
        // Set the default date to today's date
        const today = new Date();
        const defaultDate = today.toISOString().split('T')[0];
        document.getElementById("date").value = defaultDate;

        // Set the default number of days to 5
        const defaultDays = 5;
        document.getElementById("days").value = defaultDays;

        displayAllResults(); // Display all results
        return;
    }

    // Continue with the search based on user input
    const selectedDate = new Date(date);
    const fromDate = new Date(selectedDate);
    fromDate.setDate(selectedDate.getDate() - days);

    const toDate = new Date(selectedDate);
    toDate.setDate(selectedDate.getDate() + days);

    const hiddenResultsContainer = document.querySelector(".hidden-results tbody");

    // Get all the rows from the hidden results
    const rows = hiddenResultsContainer.querySelectorAll("tr");

    // Clear the current results
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = '';

    // Filter the rows based on the input values and clone them
    rows.forEach(row => {
        const rowData = row.textContent.toLowerCase();
        const rowDate = new Date(row.querySelector("td:nth-child(3)").textContent);

        if ((place === "" || rowData.includes(place)) && rowDate >= fromDate && rowDate <= toDate) {
            const clonedRow = row.cloneNode(true); // Clone the row
            resultsContainer.appendChild(clonedRow); // Append the cloned row to the results container
        }
    });

    // Show/hide the results container based on the number of results
    if (resultsContainer.children.length > 0) {
        resultsContainer.style.display = "block";
    } else {
        resultsContainer.style.display = "none";
    }
});

// Prevent form submission on button click
document.getElementById("search-button").addEventListener("click", function(e) {
    e.preventDefault();
});

function displayAllResults() {
    // If both place and date are empty, display all results
    const hiddenResultsContainer = document.querySelector(".hidden-results tbody");
    const rows = hiddenResultsContainer.querySelectorAll("tr");

    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = '';

    rows.forEach(row => {
        const clonedRow = row.cloneNode(true);
        resultsContainer.appendChild(clonedRow);
    });

    resultsContainer.style.display = "block";
};
        function connectClicked(button) {
            const row = button.parentNode.parentNode;
            const name = row.querySelector("td:nth-child(1)").textContent;
            alert(`Email Message Sent to ${name}!!! Happy Travelling!!!`);
        };

        function multiconnectClicked() {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            if (checkboxes.length > 0) {
                const names = Array.from(checkboxes).map(checkbox => {
                    const row = checkbox.parentNode.parentNode;
                    return row.querySelector("td:nth-child(1)").textContent;
                });
                alert(`Email Message Sent to ${names.join(', ')}!!! Happy Travelling!!!`);
            } else {
                alert("No users selected for Multiconnect.");
            }
        };

    document.getElementById("contact_form").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Here you can add your logic to send the form data to the server
      // For demonstration purposes, we'll just show an alert:
      alert("Message sent successfully!! You will hear from us shortly!! Happy Travelling!!");
             setTimeout(() => {
                 // Redirect after 3 seconds
                 window.location.href = 'https://gcis5140.github.io/TheTravelTalesProject/'; // Replace with your desired URL            
             }, 3000);             
    });
