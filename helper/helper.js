function formatDisplacement(displacement) {
    return `${displacement}c`;
  }
  
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: 2,
});

function formatPrice(price) {
    const priceInCurrencyFormat = formatter.format(price);
    let priceChars = priceInCurrencyFormat.split(',').join('.').split('');
    priceChars.splice(-3, 1, ',');
    const priceFormated = priceChars.join('');
    return priceFormated;
}

function reduceProductsDataForPrice(productsData, { brand, model }) {
    return (productsData += `${brand} ${model} \n`);
}

function isNotALetter(text) {
    const re = new RegExp('[a-zA-Z]');
    return (
        typeof text !== 'string' || text.length !== 1 || text.match(re) === null
    );
}
  
module.exports = { formatDisplacement, formatPrice, reduceProductsDataForPrice, isNotALetter };