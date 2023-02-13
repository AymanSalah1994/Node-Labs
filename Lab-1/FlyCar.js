const Car = require("./carModule");

// co  = new Car("Picanto" , 1995) ;
// No Instance to Be created  ;
// --> Just Maknig Sure the Stricts are Working

exports.FlyCar = class FlyCar extends Car {
  constructor(model, year) {
    super(model, year);
    this.canFly = true;
  }
  carData() {
    super.carData();
    console.log("I Can Fly Too");
  }
};
