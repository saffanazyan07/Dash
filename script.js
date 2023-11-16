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

//signUp.addEventListener("button", function (e) {
    //e.preventDefault();

    //let s_email = document.getElementById("s_email").value;
    //window.sessionStorage.setItem("s_email", s_email);
    //swal("Loading Now", "", "info", { timer: 2000, showConfirmButton: false });

    //var formdata = new FormData(document.getElementById("form signup"));
    //fetch("http://140.118.121.85:5000/user/signup", {
        //method: "POST",
        //body: formdata,
    //})
        //.then((response) => {
            //return response.json();
        //})
        //.then((data) => {
            //Signuprender(data);
        //})
        //.catch((error) => console.log("error", error));
//});

//function Signuprender(data) {
    //let market = data.log;

    //if (market == "0") {
        //swal("Success", "Sign up successfully! Please verify your email.", "success", { timer: 2000, showConfirmButton: false });
        //showVerifyConference();


