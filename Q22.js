const increaseOrders = function(orders) {
    return orders.map(amount => amount + 50);
};

const orders = [100, 200, 300];
const updatedOrders = increaseOrders(orders);

console.log(updatedOrders);