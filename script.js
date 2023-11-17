   const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type =="password"){
                    pwField.type == "email";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

function submitForm() {
    var name = document.getElementById("s_name").value;
    var email = document.getElementById("s_email").value;
    var password = document.getElementById("s_password").value;
    var confirmPassword = document.getElementById("s_password confirm").value;
    var phone = document.getElementById("s_phone").value;
    var termsChecked = document.getElementById("termCon").checked;

    // Additional form validation can be added here

    if (termsChecked) {
        // Validate email field
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate password and confirm password fields
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Create an object with the form data
        var formData = {
            s_name: name,
            s_email: email,
            s_password: password,
            s_passwordconfirmation: confirmPassword,
            s_phone: phone
        };

        // Make a POST request to your API
        fetch('http://140.118.121.85:5000/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
      // Handle the API response here
            console.log(data);
            alert("Form submitted successfully!");
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error submitting the form. Please try again.");
        });   
    } else {
        alert("Please accept the terms and conditions!");
    }
}
function isValidEmail(email) {
    // Simple email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
fetch('/fetchData')
    .then(response => response.json())
    .then(data => {
      // Assuming the 'message' property exists in the fetched data
      const alertMessage = data[0].message;

      // Display an alert with the fetched message
      alert(alertMessage);
    })
    .catch(error => console.error('Error fetching data: ', error));


    document.getElementById('loginButton').addEventListener('click', async function () {
        const username = document.querySelector('#login input[type="username"]').value;
        const password = document.querySelector('#login input[type="password"]').value;
        const rememberMe = document.getElementById('logCheck').checked;
    
        // Validate username and password (add additional validation if needed)
        if (!username || !password) {
            alert('Please enter both username and password.');
            return;
        }
    
        const requestBody = {
            s_name: username,
            s_password: password,
            rememberMe: rememberMe
        };
    
        try {
            const response = await fetch('http://140.118.121.85:5000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
    
            // Check the response from the server and take appropriate action
            if (data.success) {
                // Successful login, redirect or perform other actions
                window.location.href = 'main.html';
            } else {
                // Handle failed login
                console.error('Login failed:', data.message);
                alert('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            alert('An error occurred. Please try again later.');
        }
    });