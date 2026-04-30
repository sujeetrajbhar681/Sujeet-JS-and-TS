class Order{
    orderId:number;
    customerName:string;
    orderAmount:number;

    constructor(orderId:number,
    customerName:string,
    orderAmount:number){
        this.orderId=orderId;
        this.customerName=customerName;
        this.orderAmount=orderAmount;
    }
    display(){
        console.log(this.orderId+this.customerName+this.orderAmount);
        
    }

}

const o = new Order(1,"hey",500);
o.display();