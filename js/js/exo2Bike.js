class Bike {

  constructor(brand, model, weight){
      this.brand = brand;
      this.model = model;
      this.weight = weight;
  }

  pedal() {
      console.log("Je pédale !");
  }
}

class Tandem extends Bike {

  static seat_number = 2;

  pedal(){
      super.pedal();
      console.log("Nous sommes", Tandem.seat_number, "à pédaler !");
  }
}

const velo1 = new Bike("Cannondale", "HIGH-PERFORMANCE ROAD BICYCLES", 285);
const velo2 = new Tandem("Canyon", "Road bikes", 265);

//Méthodes pedal
velo1.pedal();
velo2.pedal();