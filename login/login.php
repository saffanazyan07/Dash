<?php
// Assuming you have a MySQL database set up with a 'users' table

$servername = "140.118.121.85";
$username = "root";
$password = "rtlab666";
$dbname = "dashboard";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $$password = $_POST["password"];

    // Perform a query to check if the username and password match a record in the database
    $sql = "SELECT * FROM users WHERE username='$s_name' AND password='$s_password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "Login successful!";
    } else {
        echo "Login failed. Invalid username or password.";
    }
}

$conn->close();
?>
