class Product {
    #stockCount;
    constructor (id, title, price, description) {
        this.id = id;
        this._title = title;
        this._price = price;
        this._description = description;
        this.#stockCount = 0;
    }
    static compare(p1, p2) {
        if (p1.price > p2.price) {
            return `${p1.title} is more expensive than ${p2.title}`;
        } else {
            return `${p1.title} isnt more expensive ${p2.title}`;
        }
    }
    get stockCount () {
        return this.#stockCount;
    }
    set newStockCount (num) {
        this.#stockCount += num;
        return this.#stockCount;
    }
    get title () {
        return this._title;
    };
    set title(newtitle) {
        if (newtitle === '' || typeof newtitle === 'number') {
            throw new Error('Error Try Again');
        } else {
            this._title = newtitle;
        }
    }
    get price () {
        return this._price;
    };
    set price(newPrice) {
        if (typeof newPrice === '' || newPrice <= 0) {
            throw new Error('Error Try Again');
        } else {
            this._price = newPrice;
        }
    }
    get description () {
        return this._description;
    };
    set description(newdescription) {
        if (newdescription === '' || typeof newdescription === 'number') {
            throw new Error('Error Try Again');
        } else {
            this._description = newdescription;
        }
    }
    addCard(product) {
        const template = document.getElementById("card-template").content.cloneNode(true);
        // Populate the template with product details
        template.querySelector('.card-title').innerText = product.title;
        template.querySelector('.card-text').innerText = product.description;
        template.querySelector('.card-price').innerText = `Total: $ ${product.price}`;
        // Add event listener to the Add to Cart button
        const addToCartButton = template.querySelector('.addToCart');
        addToCartButton.addEventListener('click', () => {
            addToCart(product.id); // Call addToCart with the product id
        });
        document.querySelector('#card-list').appendChild(template);
    }
}


let product1 = new Product(1, "Le Club Armchair", 13265.00, "Made in Italy")
let product2 = new Product(2, "Bristol System Coffee Table", 30100.00, "Made in Italy Designed by Jean-Marie Massaud");
let product3 = new Product(3, "High ESI Luxury Sofa", 11990.00, "Everything Studios Italy");
let product4 = new Product(4, "DUNE Pierre Paulin Contour Sofa in Boucle", 10190.00, "Dune - Pierre Paulin Inspired");
let product5 = new Product(5, "Elia Marble Dining Table", 148000, "Elia Marble effortlessly commands attention in any space.");
let product6 = new Product(6, "Voyage Dining Table II - the essentialist", 92000, "theessentialist, essentialist, the essentialist studio, the essentialist furniture");


let productList = [product1, product2, product3, product4, product5, product6]



module.exports = {Product, productList}
