<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Storage</title>
</head>
<body>

    <h2>Order Details</h2>

    <input type="text" id="i1" placeholder="Enter order info"><br><br>
    <button id="btn">Save Order</button>

    <ul id="ul"></ul>

    <script>
        const btn = document.getElementById("btn");
        const ul = document.getElementById("ul");

        const orders = JSON.parse(localStorage.getItem("orders")) || [];

        orders.forEach(order => {
            const li = document.createElement("li");
            li.textContent = order;
            ul.appendChild(li);
        });

        btn.addEventListener("click", () => {
            const data = document.getElementById("i1").value;

            const li = document.createElement("li");
            li.textContent = data;
            ul.appendChild(li);

            orders.push(data);
            localStorage.setItem("orders", JSON.stringify(orders));
        });
    </script>

</body>
</html>