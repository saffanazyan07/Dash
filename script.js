const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");
/*const signUp = document.getElementById("signUp");
const login = document.getElementById("login");
const verify = document.getElementById("verify");
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const verifyForm = document.getElementById("verifyForm");*/

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
function submitsignupForm() {
 // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        verify.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });
      
/* js code to appear signup and login form
        signUp.addEventListener("click", () => {
            signupForm.classList.add("active");
            loginForm.classList.remove("active");
            verifyForm.classList.remove("active");
        });

        login.addEventListener("click", () => {
            signupForm.classList.remove("active");
            loginForm.classList.add("active");
            verifyForm.classList.remove("active");
        });

        verify.addEventListener("click", () => {
            signupForm.classList.remove("active");
            loginForm.classList.remove("active");
            verifyForm.classList.add("active");
        });*/

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
            window.location.href = 'home.html';
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
function submitsignupForm() {
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
 //try
      try {
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
            const data = await response.json();
        console.log('signup response:', data);

        if (data.status_code === 200) {
            console.log('signup successfully:', data.message);
            window.location.href = 'verify';
        } else {
            console.error('signup failed:', data.message);
            alert('varification failed. Please check your email.');
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert('An error occurred. Please try again later.');
    }
}
document.getElementById('signupButton').addEventListener('click', submitsignupForm);
            
//verify
async function verifyUser() {
    const email = document.getElementById('s_email').value;
    const verify = document.getElementById('s_verify').value;

    // Validate username and password (add additional validation if needed)
    if (!s_email || !s_verify) {
        alert('Please enter both email and verify code');
        return;
    }

    const requestBody = {
        s_email: email,
        s_verify: verify
    };

    try {
        const response = await fetch('http://140.118.121.85:5000/user/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
//response verify-login 
        const data = await response.json();
        console.log('verify response:', data);

        if (data.message === "User found" || data.status_code === 200) {
            console.log('verify successful:', data.message);
            window.location.href = 'login';
        } else {
            console.error('verification failed:', data.message);
            alert('varification failed. Please check your email.');
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert('An error occurred. Please try again later.');
    }
}
document.getElementById('verifyButton').addEventListener('click', verifyUser);
