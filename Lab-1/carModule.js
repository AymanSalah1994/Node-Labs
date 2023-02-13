module.exports = class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
    if (this.constructor  == Car )
    {
        throw new Error("This Class Can't Have Children") ; 
    }
  }
  carData() {
    console.log("Car Data : " + this.model + "  " + this.year);
    console.log("Editing after the Monitor");
  }
};
