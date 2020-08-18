const { reduceProductsDataForPrice, formatPrice, isNotALetter} = require('../helper/helper');

class Logger {
    constructor(inventory) {
        this.inventory = inventory;
    }

    logAllProducts() {
        const allProductsLog = this.inventory.products.reduce((log, product) => {
                log += this.inventory.getProductData(product) + '\n';
                return log;
            },
            ''
        );
        console.log(`${allProductsLog}=============================`);
    }

    logHighestPriceProducts() {
        let highestPriceLog;
        const productsWithHighestPrice = this.inventory.getProductsWithHighestPrice();
        const numberOfProductsWithHighestPrice = productsWithHighestPrice.length;

        if (numberOfProductsWithHighestPrice === 1) {
            const [{ brand, model }] = productsWithHighestPrice;
            highestPriceLog = `Vehículo más caro: ${brand} ${model}`;
        }
        if (numberOfProductsWithHighestPrice > 1) {
            highestPriceLog = productsWithHighestPrice.reduce(reduceProductsDataForPrice, 'Los vehículos más caros son:\n');
        }
        console.log(highestPriceLog);
    }

    logLowestPriceProducts() {
        let lowestPriceLog;
        const productsWithLowestPrice = this.inventory.getProductsWithLowestPrice();
        const quantityOfProductsWithLowestPrice = productsWithLowestPrice.length;

        if (quantityOfProductsWithLowestPrice === 1) {
            const [{ brand, model }] = productsWithLowestPrice;
            lowestPriceLog = `Vehículo más barato: ${brand} ${model}`;
        }
        if (quantityOfProductsWithLowestPrice > 1) {
            lowestPriceLog = productsWithLowestPrice.reduce(reduceProductsDataForPrice, 'Los vehículos más baratos son:\n');
        }
        
        console.log(lowestPriceLog);
    }

    logProductsWithLetter(letter) {
    if (isNotALetter(letter)) {
        const error = new Error(
        `El argumento debe ser una letra, pero ingresó '${letter}'`
        );
        console.log(error.message);
        throw error;
    }

    let filteredProductsLog;
    const filteredProducts = this.inventory.findByLetter(letter);

    const numberOfFilteredProducts = filteredProducts.length;

    if (numberOfFilteredProducts === 1) {
        const [{ brand, model, price }] = filteredProducts;
        filteredProductsLog = `Vehículo que contiene en el modelo la letra '${letter}': ${brand} ${model} ${formatPrice(price)}`;
    }

    if (numberOfFilteredProducts > 1) {
        filteredProductsLog = filteredProducts.reduce((log, { brand, model, price }) => {
            log += `${brand} ${model} ${formatPrice(price)}\n`;
            return log;
            }, 
            `Vehículos que contienen en el modelo la letra '${letter}:'\n`
        );
    }

    console.log(filteredProductsLog);
    }

    logProductsDescPrice() {
        const productsDescPrice = this.inventory.sortProductsByDescendingPrice();
        const productsDescPriceLog = productsDescPrice.reduce(
            (log, { brand, model }) => {
            log += `${brand} ${model}\n`;
            return log;
            },
            `=============================\nVehículos ordenados por precio de mayor a menor:\n`
        );
        console.log(productsDescPriceLog);
        }
    }

module.exports = Logger;