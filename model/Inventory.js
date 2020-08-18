class Inventory {
    constructor(list) {
        this.products = list;
    }

    getPrices() {
        const priceList = this.products.map((product) => product.price);
        return priceList;
    }

    getProductData(product) {
        return product.getData();
    }

    getProductsWithHighestPrice() {
        const highestPrice = Math.max(...this.getPrices());
        const productsWithHighestPrice = this.products.filter((product) => product.price === highestPrice);
        return productsWithHighestPrice;
    }

    getProductsWithLowestPrice() {
        const lowestPrice = Math.min(...this.getPrices());
        const productsWithLowestPrice = this.products.filter((product) => product.price === lowestPrice);
        return productsWithLowestPrice;
    }

    findByLetter(letter) {
        const productsWithLetter = this.products.filter(({ model }) => model.includes(letter));
        return productsWithLetter;
    }

    sortProductsByDescendingPrice() {
        const productsSortedByDescendingPrice = this.products.sort((product, nextProduct) => nextProduct.price - product.price);
        return productsSortedByDescendingPrice;
    }
}

module.exports = Inventory;