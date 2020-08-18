const Vehicle = require('./Vehicle');
const { formatPrice } = require('../helper/helper');

class Car extends Vehicle {
    constructor({ brand, model, doors, price }) {
        super({ brand, model, price });
        this.doors = doors;
    }

    getData() {
        const carData = `Marca: ${this.brand} // Modelo: ${this.model} // Puertas: ${this.doors} // Precio: ${formatPrice(this.price)}`;
        return carData;
        }
}

module.exports = Car;