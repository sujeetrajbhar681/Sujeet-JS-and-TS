<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h2>Customer Registration</h2>

    <input type="text" id="name" placeholder="Enter Name"><br><br>
    <input type="email" id="email" placeholder="Enter Email"><br><br>
    <input type="password" id="password" placeholder="Enter Password"><br><br>

    <button id="btn">Register</button>

    <ul id="ul"></ul>

    <script>
        const btn = document.getElementById("btn");
        const ul = document.getElementById("ul");

        const customers = JSON.parse(localStorage.getItem("customers")) || [];

        customers.forEach(cust => {
            const li = document.createElement("li");
            li.textContent = `${cust.name} - ${cust.email}`;
            ul.appendChild(li);
        });

        btn.addEventListener("click", () => {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            if (name === "" || email === "" || password === "") {
                alert("All fields are required!");
                return;
            }

            if (!email.includes("@")) {
                alert("Invalid email!");
                return;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters!");
                return;
            }

            const customer = { name, email, password };

            customers.push(customer);
            localStorage.setItem("customers", JSON.stringify(customers));

            const li = document.createElement("li");
            li.textContent = `${name} - ${email}`;
            ul.appendChild(li);

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        });
    </script>

</body>
</html>