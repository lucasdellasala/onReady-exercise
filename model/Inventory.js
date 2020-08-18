class Inventory {
    constructor(list) {
      this.products = list;
    }
  
    getPrices() {
      const priceList = this.products.map((product) => product.price);
      return priceList;
    }
  
    getProductData(product) {
      return product.data;
    }
  
    getProductsWithHighestPrice() {
      const highestPrice = Math.max(...this.prices);
      const productsWithHighestPrice = this.products.filter((product) => product.price === highestPrice);
      return productsWithHighestPrice;
    }
  
    getProductsWithLowestPrice() {
      const lowestPrice = Math.min(...this.prices);
      const productsWithLowestPrice = this.products.filter((product) => product.price === lowestPrice);
      return productsWithLowestPrice;
    }
  
    findByLetter(letter) {
      const productsWithLetter = this.products.filter(({ product }) => product.includes(letter));
      return productsWithLetter;
    }
  
    sortProductsByDescendingPrice() {
      const productsSortedByDescendingPrice = this.products.sort((product, nextProduct) => nextProduct.price - product.price);
      return productsSortedByDescendingPrice;
    }
}

module.exports = Inventory;