var sedan = {
        type: "sedan",
        price: 40,
        available: "yes",
        rentSedan: function sedan1 () {
            //this.price = this.price - x;
            //console.log(this.price);
            return this.type + " " + this.price + " " + this.available;
        }
    };
    
    var suv = {
        type: "suv",
        price: 55,
        available: "no",
        rentSuv: function suv1 () {
            return this.type + " " + this.price + " " + this.available;
        }
    };
    
    var sports = {
        type: "sports",
        price: 75,
        available: "yes",
        rentSports: function sports1 () {
            return this.type + " " + this.price + " " + this.available;
        }
    };

function rentalAvailability () {
    console.log(sedan.rentSedan(1),"\n",suv.rentSuv(),"\n",sports.rentSports());
     //doesn't work - console.log(sedan.rentSedan.sedan1());//"\n",suv.rentSuv(),"\n",sports.rentSports());
}


rentalAvailability();

//console.log(sedan.rentSedan());