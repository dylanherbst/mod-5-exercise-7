// const Product = require('../libraries/products');

// let newProd = new Product()


// let product1 = new Product(1, "Le Club Armchair", 13265.00, "Made in Italy")
// let product2 = new Product(2, "Bristol System Coffee Table", 30100.00, "Made in Italy Designed by Jean-Marie Massaud");
// let product3 = new Product(3, "High ESI Luxury Sofa", 11990.00, "Everything Studios Italy");
// let product4 = new Product(4, "DUNE Pierre Paulin Contour Sofa in Boucle", 10190.00, "Dune - Pierre Paulin Inspired");
// let product5 = new Product(5, "Elia Marble Dining Table", 148000, "Elia Marble effortlessly commands attention in any space.");
// let product6 = new Product(6, "Voyage Dining Table II - the essentialist", 92000, "theessentialist, essentialist, the essentialist studio, the essentialist furniture");


// let productList = [product1, product2, product3, product4, product5, product6]


// function showList () {
// return productList;

// }

// exports.showList = (req, res) => {

//     res.json({productList });
// };

// const getProducts = () => {
//     fetch('../libraries/products')
//         .then(response => response.json())
//         .then(response => res.status(200).json(response.data))
//         .catch(error => res.status(500).json({errror: error.message}))
// }
const { Product, productList } = require('../libraries/products');

const getProducts = (req, res) => {
    res.json(productList); // Send the array directly
}

module.exports = getProducts;