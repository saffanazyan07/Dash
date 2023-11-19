const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");


    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";
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
      
async function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate username and password (add additional validation if needed)
    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    const requestBody = {
        s_name: username,
        s_password: password
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
//response login-mainpage 
        const data = await response.json();
        console.log('Login response:', data);

        if (data.message === "User found" || data.status_code === 200) {
            console.log('Login successful:', data.message);
            window.location.href = 'USER/%20index.html';
        } else {
            console.error('Login failed:', data.message);
            alert('Login failed. Please check your credentials.');
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert('An error occurred. Please try again later.');
    }
}
document.getElementById('loginButton').addEventListener('click', loginUser);

//get velue from html "id"
function signupForm() {
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
    /*try {
        const response = await fetch('http://140.118.121.85:5000/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
//response login-mainpage 
        const data = await response.json();
        console.log('Signup response:', data);

        if (data.status_code === 200) {
            console.log('Form submitted successfully:', data.message);
            window.location.href = 'verify.html';
        } else {
            console.error('signup failed:', data.message);
            alert('Error submitting the form. Please try again.');
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert('An error occurred. Please try again later.');
    }
}
document.getElementById('signupButton').addEventListener('click', signupForm);          

Make a POST request to your API*/ 
         
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
