function processPayment(amount) {
    const limit = 5000;

    if (amount > limit) {
        throw new Error("Payment amount exceeds allowed limit!");
    }

    return "Payment Successful";
}

try {
    const result = processPayment(7000);
    console.log(result);
} catch (error) {
    console.log(error.message);
}