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

//signup call API
/* document.getElementById('signUp').addEventListener('click', async function(e) {
    e.preventDefault();
  
    const s_name = document.getElementById('s_name').value;
    const s_email = document.getElementById('s_email').value;
    const s_password = document.getElementById('s_password').value;
    const s_passwordconfirm = document.getElementById('s_password confirm').value;
    const s_phone = document.getElementById('s_phone').value;
  
   if (!password || !passwordConfirm || password !== passwordConfirm) {
      alert('Passwords do not match.');
      return;
    }
  
    const termCon = document.getElementById('termCon').checked;
  
    if (!termCon) {
      alert('Please accept all terms and conditions.');
      return;
    }
  
    const user = {
      s_name,
      s_email,
      s_password,
      s_phone
    };
  
    swal({
      title: "Loading Now",
      timer: 2000,
      onOpen: () => {
        swal.showLoading();
      }
    });
  
    try {
      const response = await fetch('http://140.118.121.85:5000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      
      const data = await response.json();
      Signuprender(data);
      
    } catch (error) {
      console.error('An error occurred:', error);
    }
});*/

function submitForm() {
            var name = document.getElementById("s_name").value;
            var email = document.getElementById("s_email").value;
            var password = document.getElementById("s_password").value;
            var passwordconfirm = document.getElementById('s_password confirm').value;
            var phone = document.getElementById("s_phone").value;
            var termsChecked = document.getElementById("termCon").checked;

            // Additional form validation can be added here

            if (termsChecked) {
                // Create an object with the form data
                var formData = {
                    s_name: name,
                    s_email: email,
                    s_password: password,
                    s_passwordconfirm: passwordconfirm,
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

