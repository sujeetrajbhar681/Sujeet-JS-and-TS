const orders = [100, 500, 300, 800, 200];

const withDelivery = orders.map(amount => amount + 50);

const highValueOrders = withDelivery.filter(amount => amount > 300);

const totalRevenue = highValueOrders.reduce((sum, amount) => sum + amount, 0);

console.log("Original Orders:", orders);
console.log("After Delivery:", withDelivery);
console.log("High Value Orders:", highValueOrders);
console.log("Total Revenue:", totalRevenue);