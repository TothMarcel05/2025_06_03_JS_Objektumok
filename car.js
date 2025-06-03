class Car{
    constructor(model,year,color)
    {
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

class DetailedCar extends Car{
    constructor(model, year, color, fuelConsumption, tankSize) {
        super(model, year, color);
        this.fuelConsumption = fuelConsumption;
        this.tankSize = tankSize;
    }
}

const carMazda = new Car("Mazda RX7", 1997, "dark-orange")
const carMazdaDetailed = new DetailedCar("Mazda RX7", 1997, "dark-orange", 3424, 342)
console.log(carMazda.model)
console.log(carMazdaDetailed)