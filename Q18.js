function completeOrder(isPaymentDone) {
    try {
        if (!isPaymentDone) {
            throw new Error("Payment failed!");
        }

        console.log("Order completed successfully");

    } catch (error) {
        console.log(error.message);

    } finally {
        console.log("Order record updated in system");
    }
}

completeOrder(true);
completeOrder(false);