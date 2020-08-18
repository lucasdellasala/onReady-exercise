const Vehicle = require('./Vehicle');
const { formatDisplacement, formatPrice } = require('../helper/helper');

class Motorcycle extends Vehicle {
    constructor({ brand, model, displacement, price }) {
        super({ brand, model, price });
        this.displacement = displacement;
    }

    getData() {
        const motorcycleData = `Marca: ${this.brand} // Modelo: ${this.model} // Cilindrada: ${formatDisplacement(this.displacement)} // Precio: ${formatPrice(this.price)}`;
        return motorcycleData;
    }
}

module.exports = Motorcycle;    