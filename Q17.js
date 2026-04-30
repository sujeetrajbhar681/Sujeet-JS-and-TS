function Restaurant(isAvailable) {
    if (!isAvailable) {
        throw new Error("Restaurant not available");
    } else {
        console.log("Order accepted by restaurant");
    }
}

function placeOrder() {
    Restaurant(false);
}

function Order() {
    try {
        placeOrder();
    } catch (error) {
        console.log(error.name + ": " + error.message);
    }
}

Order();