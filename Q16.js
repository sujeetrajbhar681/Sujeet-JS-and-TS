try {
    const address = "";

    if (!address) {
        throw new Error("Delivery address is required!");
    }

    console.log("Order placed successfully");
} catch (error) {
    console.log(error.message);
}