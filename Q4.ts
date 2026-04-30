abstract class DeliveryStaff {
    abstract getSalary():void;
    abstract getRole():void;
}

class DeliveryAgent extends DeliveryStaff{
    getSalary(): void {
        console.log("Sal");
        
    }
    getRole(): void {
        console.log("DeliveryAgent");
        
    }
}

class Manager extends DeliveryStaff{
    getSalary(): void {
        console.log("sal");
        
    }
    getRole(): void {
        console.log("Manager");
        
    }
}

const m = new Manager();
m.getSalary();
m.getRole();