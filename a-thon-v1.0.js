var sedan = {
        type: "Sedan",
        price: 40,
        available: "yes",
        numAvail: 5,
        rentSedan: function sedan1 () {
            //this.price = this.price - x;
            //console.log(this.price);
            return "Car type: " + this.type + " " + "Rental Price: $" + this.price + " " + "Available: " + this.available + " " + "#Available: " + this.numAvail;
        }
    };
    
    var suv = {
        type: "Suv",
        price: 55,
        available: "no",
        numAvail: 0,
        rentSuv: function suv1 () {
            return "Car type: " + this.type + " " + "Rental Price: $" + this.price + " " + "Available: " + this.available + " " +"#Available: " + this.numAvail;
        }
    };
    
    var sports = {
        type: "Sports",
        price: 75,
        available: "yes",
        numAvail: 2,
        rentSports: function sports1 () {
            return "Car type: " + this.type + " " + "Rental Price: $" + this.price + " " + "Available: " + this.available + " " +"#Available: " + this.numAvail;
        }
    };

function rentalAvailability () {
    console.log(sedan.rentSedan(1),"\n",suv.rentSuv(),"\n",sports.rentSports());
     //doesn't work - console.log(sedan.rentSedan.sedan1());//"\n",suv.rentSuv(),"\n",sports.rentSports());
}


rentalAvailability();

//console.log(sedan.rentSedan());