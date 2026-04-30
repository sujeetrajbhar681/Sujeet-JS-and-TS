var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DeliveryStaff = /** @class */ (function () {
    function DeliveryStaff() {
    }
    return DeliveryStaff;
}());
var DeliveryAgent = /** @class */ (function (_super) {
    __extends(DeliveryAgent, _super);
    function DeliveryAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeliveryAgent.prototype.getSalary = function () {
        console.log("Sal");
    };
    DeliveryAgent.prototype.getRole = function () {
        console.log("DeliveryAgent");
    };
    return DeliveryAgent;
}(DeliveryStaff));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.getSalary = function () {
        console.log("sal");
    };
    Manager.prototype.getRole = function () {
        console.log("Manager");
    };
    return Manager;
}(DeliveryStaff));
var m = new Manager();
m.getSalary();
m.getRole();
