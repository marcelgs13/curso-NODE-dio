const {getFullName,productType} = require('./services/products');
const products = require('./services/products');

const config = require('./services/config');
const database = require('./services/database');

async function main() {
    console.log('carrinho compras:');

    getFullName('1', 'Teclado');
    products.getFullName('123', 'Mousepad');
    console.log(productType);

    // product.getFullName('123', 'Mousepad');
    // product.getFullName('14', 'Teclado');
    // product.getProductLabel('Monitor');

    database.connectToDatabase("my-data");
}

main();