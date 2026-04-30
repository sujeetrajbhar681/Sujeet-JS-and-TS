class Restaurant {
    restaurantLocation;
    restaurantName;
    restaurantRating;

    constructor(restaurantLocation,
    restaurantName,
    restaurantRating){
        this.restaurantLocation=restaurantLocation;
        this.restaurantName=restaurantName;
        this.restaurantRating=restaurantRating;
    }

    display(){
        console.log(this.restaurantLocation+this.restaurantName+this.restaurantRating);
        
    }
}

const r = new Restaurant("Mum","Sobo","Good");
r.display();