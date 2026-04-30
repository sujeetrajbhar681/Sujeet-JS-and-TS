function filterHighValueOrders(orders, minAmount) {
    return orders.filter(amount => amount > minAmount);
}

const orders = [100, 500, 300, 800, 200];
const result = filterHighValueOrders(orders, 300);

console.log(result);