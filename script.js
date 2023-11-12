// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll("#sidebar .side-dropdown");
const sidebar = document.getElementById("sidebar");

const Profilebar = document.getElementById("Profile_bar");
const Profile = document.getElementById("Profile");

const AMFbar = document.getElementById("AMF_bar");
const SMFbar = document.getElementById("SMF_bar");
const UPFbar = document.getElementById("UPF_bar");
const AUSFbar = document.getElementById("AUSF_bar");
const NSSFbar = document.getElementById("NSSF_bar");
const PCFbar = document.getElementById("PCF_bar");
const NRFbar = document.getElementById("NRF_bar");
const UDMbar = document.getElementById("UDM_bar");
const content = document.getElementById("content");
const Charts_bar = document.getElementById("Charts_bar");
const Widgets_bar = document.getElementById("Widgets_bar");
const Message_bar = document.getElementById("Message_bar");
const Home_bar = document.getElementById("Home_bar");


const Logincontainer = document.getElementById("Login-container");
const Signupcontainer = document.getElementById("signup-container");
const Veridycontainer = document.getElementById("verify-container");

const AMF = document.getElementById("AMF");
const SMF = document.getElementById("SMF");
const UPF = document.getElementById("UPF");
const AUSF = document.getElementById("AUSF");
const NSSF = document.getElementById("NSSF");
const PCF = document.getElementById("PCF");
const UDM = document.getElementById("UDM");
const NRF = document.getElementById("NRF");
const MainChart = document.getElementById("MainChart");
const MainWidget = document.getElementById("MainWidget");
const Message = document.getElementById("Message");
const Dashboard = document.getElementById("Dashboard");
const Login = document.getElementById("Login");
const LoginClose = document.getElementById("LoginClose");
const Signup = document.getElementById("Signup");
const SignupClose = document.getElementById("SignupClose");

const Historyform = document.getElementById("Historyform");
const myForm = document.getElementById("myForm");
const VerifymyForm = document.getElementById("VerifymyForm");
const LoginmyForm = document.getElementById("LoginmyForm");
const H_Logs = document.getElementById("H_Logs");
const SignUP_btn = document.getElementById("SignUP_btn");




LoginmyForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let S_Account = document.getElementById("S_Account").value;
    let S_Password = document.getElementById("S_Password").value;
    window.sessionStorage.setItem("s_login_email", S_Account);

    let test = "http://140.118.121.109:5678/user/login?s_email=" + S_Account + "&s_password=" + S_Password;

    fetch(test, {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
        // body: JSON.stringify({
        //   test
        // })
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            Loginrender(data, S_Account);
            // console.log(data.log);
            NextStep();
        });
});

function NextStep(){
    fetch("http://140.118.121.109:5678/user/edit?s_email=" + window.sessionStorage.getItem("s_login_email", S_Account), {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            ProfileShow(data);
        })
}
// let account = window.sessionStorage.getItem("s_login_email", S_Account);


function ProfileShow(data){
    console.log(data);
    const ProfileDetail = document.getElementById("ProfileDetail");
    ProfileDetail.innerHTML ='<div class="Profile_label"><label>Last Name</label><p>'+data.s_lastname+'</p></div><br>'+
    '<div class="Profile_label"><label>First Name</label><p>'+ data.s_firstname + '</p></div><br>'+
    '<div class="Profile_label"><label>Phone</label><p>'+data.s_phone+'</p></div><br>'+
    '<div class="Profile_label"><label>Email</label><p>'+data.s_email+'</p></div><br>'+
    '<div class="Profile_label"><label>Company</label><p>'+ data.s_company +'</p></div><br>'
}

function Loginrender(data, S_Account) {
    let market = data.log;

    if (market == "0") {
        swal("Success", "Login Successfully!", "success", { timer: 1000, showConfirmButton: false });
        window.sessionStorage.setItem("email", S_Account);
        setTimeout(function () {
            content.style = "display: block";
            Logincontainer.style = "display: none";
        }, 1000);
    } else if (market == "1") {
        console.log("Please Verify your email account");
        swal("Please Verify", "Please verify your account first!", "warning", { timer: 3000, showConfirmButton: false });
    } else if (market == "2") {
        console.log("Incorrect Password");
        swal("Fail", "Incorrect Password!", "error", { timer: 3000, showConfirmButton: false });
    } else if (market == "3") {
        console.log("Account does not exist");
        swal("Fail", "Account does not exist!", "error", { timer: 3000, showConfirmButton: false });
    }
}

myForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let s_email = document.getElementById("s_email").value;
    window.sessionStorage.setItem("s_email", s_email);
    swal("Loading Now", "", "info", { timer: 2000, showConfirmButton: false });

    var formdata = new FormData(document.getElementById("myForm"));
    fetch("http://140.118.121.109:5678/user/signup", {
        method: "POST",
        body: formdata,
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            Signuprender(data);
        })
        .catch((error) => console.log("error", error));
});

function Signuprender(data) {
    let market = data.log;

    if (market == "0") {
        swal("Success", "Sign up successfully! Please verify your email.", "success", { timer: 2000, showConfirmButton: false });
        showVerifyConference();

        VerifymyForm.addEventListener("submit", function Verify(e) {
            e.preventDefault();
            var u_email = window.sessionStorage.getItem("s_email", s_email);
            var Verifydata = new FormData(document.getElementById("VerifymyForm"));
            Verifydata.append("s_email",u_email);

            fetch("http://140.118.121.109:5678/user/verify", {
                method: "PUT",
                body: Verifydata,
             }).then((response) => {
                return response.json();
            }).then((user) => {
                verifyrender(user);
            });
        });
    } else if (market == "1") {
        console.log("Account and Username existed");
        swal("Warning", "Username has been usedEmail and username have been used", "error", { timer: 2000, showConfirmButton: false });
    } else if (market == "2") {
        console.log("Account existed");
        swal("Warning", "Email has been used", "error", { timer: 2000, showConfirmButton: false });
    } else if (market == "3") {
        console.log("Username existed ");
        swal("Warning", "Username has been used", "error", { timer: 2000, showConfirmButton: false });
    }
}
function verifyrender(user){
    // console.log(user.log)
    var x = user.log;
    if(x == 0){
        setTimeout(function () {
            Veridycontainer.style = "display: none";
            content.style = "display: block";
        }, 2000);
        swal("Success", "Verify successfully!", "success", { timer: 2000, showConfirmButton: false });
    }
    else{
        swal("Warning", "Verify failed!", "warning", { timer: 2000, showConfirmButton: false });
    }

}

function showVerifyConference() {
    Signupcontainer.style = "display: none";
    Veridycontainer.style = "display: block";
}

function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
}

function formatDate(date) {
    return (
        [date.getFullYear(), padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate())].join("-") +
        " " +
        [padTo2Digits(date.getHours()), padTo2Digits(date.getMinutes()), padTo2Digits(date.getSeconds())].join(":")
    );
}

Historyform.addEventListener("submit", function (e) {
    e.preventDefault();

    let NF = document.getElementById("H_NFs").value;
    let DateB = document.getElementById("DateBegin").value;
    let DateE = document.getElementById("DateEnd").value;
    let DateBegin = formatDate(new Date(document.getElementById("DateBegin").value));
    let DateEnd = formatDate(new Date(document.getElementById("DateEnd").value));


    console.log(NF);
    console.log(DateBegin);
    console.log(DateEnd);

    let param = "http://140.118.121.109:5678/nfs/log/recode?s_nf=" + NF + "&dt_infotimefrom=" + DateBegin + "&dt_infotimeto=" + DateEnd;
    fetch(param, {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // if (data.length > 2000){
            //     swal("Warning", "Time Range is too big", "error", { timer: 2000, showConfirmButton: false });
            // }
            // else {
            //     H_render(data);
            // }
            H_render(data);
        });
});

function H_render(data) {
    // Logs = data;
    console.log(data[0].s_log);
    for (i = 0; i <= data.length; i++) {
        H_Logs.innerHTML +="<p>" + i +". " + data[i].s_log + "</p><br>";
    }
}

allDropdown.forEach((item) => {
    const a = item.parentElement.querySelector("a:first-child");
    a.addEventListener("click", function (e) {
        e.preventDefault();

        if (!this.classList.contains("active")) {
            allDropdown.forEach((i) => {
                const aLink = i.parentElement.querySelector("a:first-child");

                aLink.classList.remove("active");
                i.classList.remove("show");
            });
        }

        this.classList.toggle("active");
        item.classList.toggle("show");
    });
});
// Initial
AMF.style = "display: none";
content.style = "display: none";
SMF.style = "display: none";
UPF.style = "display: none";
AUSF.style = "display: none";
NSSF.style = "display: none";
PCF.style = "display: none";
UDM.style = "display: none";
NRF.style = "display: none";
Profile.style = "display: none";
MainChart.style = "display: none";
MainWidget.style = "display: none";
Message.style = "display: none";
Logincontainer.style = "display: block";
Signupcontainer.style = "display: none";
Veridycontainer.style = "display: none";

Home_bar.addEventListener("click", function (e) {
    content.style = "display: block";
    AMF.style = "display: none";
    SMF.style = "display: none";
    UPF.style = "display: none";
    AUSF.style = "display: none";
    NSSF.style = "display: none";
    PCF.style = "display: none";
    UDM.style = "display: none";
    NRF.style = "display: none";
    Profile.style = "display: none";
    MainChart.style = "display: none";
    MainWidget.style = "display: none";
    Message.style = "display: none";
    Logincontainer.style = "display: none";
    Signupcontainer.style = "display: none";
    Veridycontainer.style = "display: none";
});

// Page Control
AMFbar.addEventListener("click", function (e) {
    content.style = "display: none";
    AMF.style = "display: block";
    SMF.style = "display: none";
    UPF.style = "display: none";
    AUSF.style = "display: none";
    NSSF.style = "display: none";
    PCF.style = "display: none";
    UDM.style = "display: none";
    NRF.style = "display: none";
    Profile.style = "display: none";
    MainChart.style = "display: none";
    MainWidget.style = "display: none";
    Message.style = "display: none";
});

SMFbar.addEventListener("click", function (e) {
    content.style = "display: none";
    SMF.style = "display: block";
    AMF.style = "display: none";
    UPF.style = "display: none";
    AUSF.style = "display: none";
    NSSF.style = "display: none";
    PCF.style = "display: none";
    UDM.style = "display: none";
    NRF.style = "display: none";
    Profile.style = "display: none";
    MainChart.style = "display: none";
    MainWidget.style = "display: none";
    Message.style = "display: none";
});

UPFbar.addEventListener("click", function (e) {
    content.style = "display: none";
    UPF.style = "display: block";
    SMF.style = "display: none";
    AMF.style = "display: none";
    AUSF.style = "display: none";
    NSSF.style = "display: none";
    PCF.style = "display: none";
    UDM.style = "display: none";
    NRF.style = "display: none";
    Profile.style = "display: none";
    MainChart.style = "display: none";
    MainWidget.style = "display: none";
    Message.style = "display: none";
});

AUSFbar.addEventListener("click", function (e) {
    content.style = "display: none";
    AUSF.style = "display: block";
    SMF.style = "display: none";
    UPF.style = "display: none";
    AMF.style = "display: none";
    NSSF.style = "display: none";
    PCF.style = "display: none";
    UDM.style = "display: none";
    NRF.style = "display: none";
    Profile.style = "display: none";
    MainChart.style = "display: none";
    MainWidget.style = "display: none";
    Message.style = "display: none";
});

NSSFbar.addEventListener("click", function (e) {
    content.style = "display: none";
    NSSF.style = "display: block";
    SMF.style = "display: none";
    UPF.style = "display: none";
    AUSF.style = "display: none";
    AMF.style = "display: none";
    PCF.style = "display: none";
    UDM.style = "display: none";
    NRF.style = "display: none";
    Profile.style = "display: none";
    MainChart.style = "display: none";
    MainWidget.style = "display: none";
    Message.style = "display: none";
});

PCFbar.addEventListener("click", function (e) {
    content.style = "display: none";
    PCF.style = "display: block";
    SMF.style = "display: none";
    UPF.style = "display: none";
    AUSF.style = "display: none";
    NSSF.style = "display: none";
    AMF.style = "display: none";
    UDM.style = "display: none";
    NRF.style = "display: none";
    Profile.style = "display: none";
    MainChart.style = "display: none";
    MainWidget.style = "display: none";
    Message.style = "display: none";
});

UDMbar.addEventListener("click", function (e) {
    content.style = "display: none";
    UDM.style = "display: block";
    SMF.style = "display: none";
    UPF.style = "display: none";
    AUSF.style = "display: none";
    NSSF.style = "display: none";
    PCF.style = "display: none";
    AMF.style = "display: none";
    NRF.style = "display: none";
    Profile.style = "display: none";
    MainChart.style = "display: none";
    MainWidget.style = "display: none";
    Message.style = "display: none";
});

NRFbar.addEventListener("click", function (e) {
    content.style = "display: none";
    NRF.style = "display: block";
    SMF.style = "display: none";
    UPF.style = "display: none";
    AUSF.style = "display: none";
    NSSF.style = "display: none";
    PCF.style = "display: none";
    UDM.style = "display: none";
    AMF.style = "display: none";
    Profile.style = "display: none";
    MainChart.style = "display: none";
    MainWidget.style = "display: none";
    Message.style = "display: none";
});

Dashboard.addEventListener("click", function (e) {
    content.style = "display: block";
    AMF.style = "display: none";
    SMF.style = "display: none";
    UPF.style = "display: none";
    AUSF.style = "display: none";
    NSSF.style = "display: none";
    PCF.style = "display: none";
    UDM.style = "display: none";
    NRF.style = "display: none";
    Profile.style = "display: none";
    MainChart.style = "display: none";
    MainWidget.style = "display: none";
    Message.style = "display: none";
});

Profilebar.addEventListener("click", function (e) {
    content.style = "display: none";
    AMF.style = "display: none";
    SMF.style = "display: none";
    UPF.style = "display: none";
    AUSF.style = "display: none";
    NSSF.style = "display: none";
    PCF.style = "display: none";
    UDM.style = "display: none";
    NRF.style = "display: none";
    Profile.style = "display: block";
    MainChart.style = "display: none";
    MainWidget.style = "display: none";
    Message.style = "display: none";
});

Charts_bar.addEventListener("click", function (e) {
    content.style = "display: none";
    AMF.style = "display: none";
    SMF.style = "display: none";
    UPF.style = "display: none";
    AUSF.style = "display: none";
    NSSF.style = "display: none";
    PCF.style = "display: none";
    UDM.style = "display: none";
    NRF.style = "display: none";
    Profile.style = "display: none";
    MainChart.style = "display: block";
    MainWidget.style = "display: none";
    Message.style = "display: none";
});

Widgets_bar.addEventListener("click", function (e) {
    content.style = "display: none";
    AMF.style = "display: none";
    SMF.style = "display: none";
    UPF.style = "display: none";
    AUSF.style = "display: none";
    NSSF.style = "display: none";
    PCF.style = "display: none";
    UDM.style = "display: none";
    NRF.style = "display: none";
    Profile.style = "display: none";
    MainChart.style = "display: none";
    MainWidget.style = "display: block";
    Message.style = "display: none";
});

// Message_bar.addEventListener("click", function (e) {
//     content.style = "display: none";
//     AMF.style = "display: none";
//     SMF.style = "display: none";
//     UPF.style = "display: none";
//     AUSF.style = "display: none";
//     NSSF.style = "display: none";
//     PCF.style = "display: none";
//     UDM.style = "display: none";
//     NRF.style = "display: none";
//     Profile.style = "display: none";
//     MainChart.style = "display: none";
//     MainWidget.style = "display: none";
//     Message.style = "display: block";
// });

// Login.addEventListener("click", function (e) {
//     content.style = "display: none";
//     AMF.style = "display: none";
//     SMF.style = "display: none";
//     UPF.style = "display: none";
//     AUSF.style = "display: none";
//     NSSF.style = "display: none";
//     PCF.style = "display: none";
//     UDM.style = "display: none";
//     NRF.style = "display: none";
//     Profile.style = "display: none";
//     MainChart.style = "display: none";
//     MainWidget.style = "display: none";
//     Message.style = "display: none";
//     Logincontainer.style = "display: block";
// });

// LoginClose.addEventListener("click", function (e) {
//     content.style = "display: block";
//     Logincontainer.style = "display: none";
// });

Signup.addEventListener("click", function (e) {
    // Logincontainer.style = "display: none";
    content.style = "display: none";
    AMF.style = "display: none";
    SMF.style = "display: none";
    UPF.style = "display: none";
    AUSF.style = "display: none";
    NSSF.style = "display: none";
    PCF.style = "display: none";
    UDM.style = "display: none";
    NRF.style = "display: none";
    Profile.style = "display: none";
    MainChart.style = "display: none";
    MainWidget.style = "display: none";
    Message.style = "display: none";
    Signupcontainer.style = "display: block";
});

SignupClose.addEventListener("click", function (e) {
    // Logincontainer.style = "display: block";
    content.style = "display: block";
    Signupcontainer.style = "display: none";
});

// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector("nav .toggle-sidebar");
const allSideDivider = document.querySelectorAll("#sidebar .divider");

if (sidebar.classList.contains("hide")) {
    allSideDivider.forEach((item) => {
        item.textContent = "-";
    });
    allDropdown.forEach((item) => {
        const a = item.parentElement.querySelector("a:first-child");
        a.classList.remove("active");
        item.classList.remove("show");
    });
} else {
    allSideDivider.forEach((item) => {
        item.textContent = item.dataset.text;
    });
}

toggleSidebar.addEventListener("click", function () {
    sidebar.classList.toggle("hide");

    if (sidebar.classList.contains("hide")) {
        allSideDivider.forEach((item) => {
            item.textContent = "-";
        });

        allDropdown.forEach((item) => {
            const a = item.parentElement.querySelector("a:first-child");
            a.classList.remove("active");
            item.classList.remove("show");
        });
    } else {
        allSideDivider.forEach((item) => {
            item.textContent = item.dataset.text;
        });
    }
});

sidebar.addEventListener("mouseleave", function () {
    if (this.classList.contains("hide")) {
        allDropdown.forEach((item) => {
            const a = item.parentElement.querySelector("a:first-child");
            a.classList.remove("active");
            item.classList.remove("show");
        });
        allSideDivider.forEach((item) => {
            item.textContent = "-";
        });
    }
});

sidebar.addEventListener("mouseenter", function () {
    if (this.classList.contains("hide")) {
        allDropdown.forEach((item) => {
            const a = item.parentElement.querySelector("a:first-child");
            a.classList.remove("active");
            item.classList.remove("show");
        });
        allSideDivider.forEach((item) => {
            item.textContent = item.dataset.text;
        });
    }
});

// PROFILE DROPDOWN
const profile = document.querySelector("nav .profile");
const imgProfile = profile.querySelector("img");
const dropdownProfile = profile.querySelector(".profile-link");

imgProfile.addEventListener("click", function () {
    dropdownProfile.classList.toggle("show");
});

// MENU
const allMenu = document.querySelectorAll("main .content-data .head .menu");

allMenu.forEach((item) => {
    const icon = item.querySelector(".icon");
    const menuLink = item.querySelector(".menu-link");

    icon.addEventListener("click", function () {
        menuLink.classList.toggle("show");
    });
});

window.addEventListener("click", function (e) {
    if (e.target !== imgProfile) {
        if (e.target !== dropdownProfile) {
            if (dropdownProfile.classList.contains("show")) {
                dropdownProfile.classList.remove("show");
            }
        }
    }

    allMenu.forEach((item) => {
        const icon = item.querySelector(".icon");
        const menuLink = item.querySelector(".menu-link");

        if (e.target !== icon) {
            if (e.target !== menuLink) {
                if (menuLink.classList.contains("show")) {
                    menuLink.classList.remove("show");
                }
            }
        }
    });
});

// PROGRESSBAR
const allProgress = document.querySelectorAll("main .card .progress");

allProgress.forEach((item) => {
    item.style.setProperty("--value", item.dataset.value);
});

// APEXCHART
APEXCHART_table_initial();
function APEXCHART_table_initial() {
    fetch("http://140.118.121.109:5678/ue/dashboard", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            APEXCHART_usage_table(source);
        });
}

setInterval(function () {
    fetch("http://140.118.121.109:5678/ue/dashboard", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            APEXCHART_usage_table(source);
        });
}, 3600000);

const Dashboard_User = document.getElementById("Dashboard_User");
const Dashboard_error = document.getElementById("Dashboard_error");



function APEXCHART_usage_table(source) {
    console.log(source)
    Dashboard_User.innerHTML = "<h2>"  + source[1].s_uenumofconnect + " / " + source[0].s_uenum+ "</h2>"
    // Dashboard_User_pa.innerHTML = '<span class="progress" data-value="40%"></span><span class="label">100%</span>'
    Dashboard_error.innerHTML = "<h2>"  + source[3].s_lognumoferror+ " / " + source[2].s_lognum+ "</h2>"
}


var first = [];
var user_connect = [];
var user_total = [];
var log_error = [];
var log_total = [];
for (i=0; i<=6;i++){
    user_connect[i] = 0;
    user_total[i] = 0;
    log_error[i] = 0;
    log_total[i] = 0;
}
fetch("http://140.118.121.109:5678/nfs/resource/recode?s_nf=udm", {
    method: "GET",
    headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
    },
})
    .then((response) => {
        return response.json();
    })
    .then((source) => {
        Dashboard_dt(source);
    });

setInterval(function () {
fetch("http://140.118.121.109:5678/nfs/resource/recode?s_nf=udm", {
    method: "GET",
    headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
    },
})
    .then((response) => {
        return response.json();
    })
    .then((source) => {
        Dashboard_dt(source);
    });
}, 3600000);  

function Dashboard_dt(source){
    first[0] = source[0].dt_infotime;
    first[1] = source[1].dt_infotime;
    first[2] = source[2].dt_infotime;
    first[3] = source[3].dt_infotime;
    first[4] = source[4].dt_infotime;
    first[5] = source[5].dt_infotime;
    first[6] = source[6].dt_infotime;
    first[7] = source[7].dt_infotime;
    first[8] = source[8].dt_infotime;
    first[9] = source[9].dt_infotime;


    fetch("http://140.118.121.109:5678/ue/dashboard", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
    .then((response) => {
        return response.json();
    })
    .then((source) => {
        console.log(source);
        add_data(source, first);
    });
 
}

function add_data(source, time){
    for (i=1; i<=6;i++){
        user_connect[i] = user_connect[i-1];
        user_total[i] =  user_total[i-1];
        log_error[i] =  log_error[i-1];
        log_total[i] =  log_total[i-1];
    }
    console.log(source[0].s_uenumofconnect);
    user_connect[0] = source[1].s_uenumofconnect;
    user_total[0] = source[0].s_uenum;
    log_error[0] = source[3].s_lognumoferror;
    log_total[0] = source[2].s_lognum;


    var options = {
        series: [
            {
                name: "Online Users",
                data: [user_connect[0], user_connect[1], user_connect[2], user_connect[3], user_connect[4], user_connect[5], user_connect[6]],
            },
            {
                name: "Total Users",
                data: [user_total[0], user_total[1], user_total[2], user_total[3], user_total[4], user_total[5], user_total[6]],
            },
        ],
        chart: {
            height: 350,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                time[0],
                time[1],
                time[2],
                time[3],
                time[4],
                time[5],
                time[6],
                // first[7],
                // first[8],
                // first[9],
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };
    
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    var options4 = {
        series: [
            {
                name: "Error log",
                data: [log_error[0], log_error[1], log_error[2], log_error[3], log_error[4], log_error[5], log_error[6]],
            },
            {
                name: "Total log",
                data: [log_total[0], log_total[1], log_total[2], log_total[3], log_total[4], log_total[5], log_total[6]],
            },
        ],
        chart: {
            height: 350,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                time[0],
                time[1],
                time[2],
                time[3],
                time[4],
                time[5],
                time[6],
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };
    
    var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
    chart4.render();
}




