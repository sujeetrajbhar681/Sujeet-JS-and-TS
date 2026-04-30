var Order = /** @class */ (function () {
    function Order(orderId, customerName, orderAmount) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.orderAmount = orderAmount;
    }
    Order.prototype.display = function () {
        console.log(this.orderId + this.customerName + this.orderAmount);
    };
    return Order;
}());
var o = new Order(1, "hey", 500);
o.display();
