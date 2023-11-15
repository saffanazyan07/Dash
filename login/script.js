 /*   const container = document.querySelector(".container"),
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
    })*/

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: '140.112.121.85',
    user: 'root',
    password: 'rtlab666',
    database: 'dashboard',
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Perform database query using username and password
    const query = 'SELECT * FROM account WHERE s_name = ? AND s_password = ?';
    db.query(query, [s_name, s_password], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            if (results.length > 0) {
                res.status(200).json({ message: 'Login successful' });
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

