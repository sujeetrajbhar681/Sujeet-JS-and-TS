interface Service {
    provideService(isPresent: boolean): void;
}

class DeliveryAgent implements Service {

    provideService(isPresent: boolean): void {
        if (isPresent) {
            console.log("Service provided");
        } else {
            console.log("Service not provided");
        }
    }
}

// Step 3: Usage
const agent = new DeliveryAgent();

agent.provideService(true);
agent.provideService(false);