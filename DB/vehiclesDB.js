const Car = require('../model/Car');
const Motorcycle = require('../model/Motorcycle');

const db = [
  { brand: 'Peugeot', model: '206', doors: 4, price: 200000 },
  { brand: 'Honda', model: 'Titan', displacement: 125, price: 60000 },
  { brand: 'Peugeot', model: '208', doors: 5, price: 250000 },
  { brand: 'Yamaha', model: 'YBR', displacement: 160, price: 80500.5 },
];

function createVehicle(vehicle) {
    return vehicle.displacement ? new Motorcycle(vehicle) : new Car(vehicle);
}

const vehiclesList = db.map(createVehicle);

module.exports = vehiclesList;