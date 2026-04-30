class InvalidOrderException extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOrderException";
    }
}

function placeOrder(quantity) {
    if (quantity <= 0) {
        throw new InvalidOrderException("Invalid order quantity!");
    }
    console.log("Order placed successfully");
}

try {
    placeOrder(0);
} catch (error) {
    console.log(error.name + ": " + error.message);
}