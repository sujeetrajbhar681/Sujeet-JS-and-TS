const calculateBill = (items, deliveryCharge) => {
    const itemsTotal = items.reduce((sum, price) => sum + price, 0);
    return itemsTotal + deliveryCharge;
};

const total = calculateBill([200, 150, 300], 50);
console.log("Total Bill:", total);