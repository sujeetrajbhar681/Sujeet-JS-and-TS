var deliveryAgent = /** @class */ (function () {
    function deliveryAgent() {
    }
    deliveryAgent.prototype.provideService = function (isPresent) {
        if (isPresent) {
            console.log("Service provided");
        }
        else {
            console.log("service not provided");
        }
    };
    return deliveryAgent;
}());
