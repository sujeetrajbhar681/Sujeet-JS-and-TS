<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>

    <h2>Customer Login</h2>

    <input type="email" id="email" placeholder="Enter Email"><br><br>
    <input type="password" id="password" placeholder="Enter Password"><br><br>

    <button id="btn">Login</button>

    <script>
        const btn = document.getElementById("btn");

        btn.addEventListener("click", () => {
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            const customers = JSON.parse(localStorage.getItem("customers")) || [];

            const validUser = customers.find(user => 
                user.email === email && user.password === password
            );

            if (validUser) {
                alert("Login Successful");
            } else {
                alert("Invalid Email or Password");
            }
        });
    </script>

</body>
</html>