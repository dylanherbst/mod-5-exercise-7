
// class Product {
//     #stockCount;
//     constructor (id, title, price, description) {
//         this.id = id;
//         this._title = title;
//         this._price = price;
//         this._description = description;
//         this.#stockCount = 0;
//     }
//     static compare(p1, p2) {
//         if (p1.price > p2.price) {
//             return `${p1.title} is more expensive than ${p2.title}`;
//         } else {
//             return `${p1.title} isnt more expensive ${p2.title}`;
//         }
//     }
//     get stockCount () {
//         return this.#stockCount;
//     }
//     set newStockCount (num) {
//         this.#stockCount += num;
//         return this.#stockCount;
//     }
//     get title () {
//         return this._title;
//     };
//     set title(newtitle) {
//         if (newtitle === '' || typeof newtitle === 'number') {
//             throw new Error('Error Try Again');
//         } else {
//             this._title = newtitle;
//         }
//     }
//     get price () {
//         return this._price;
//     };
//     set price(newPrice) {
//         if (typeof newPrice === '' || newPrice <= 0) {
//             throw new Error('Error Try Again');
//         } else {
//             this._price = newPrice;
//         }
//     }
//     get description () {
//         return this._description;
//     };
//     set description(newdescription) {
//         if (newdescription === '' || typeof newdescription === 'number') {
//             throw new Error('Error Try Again');
//         } else {
//             this._description = newdescription;
//         }
//     }
// }

// function addCard(product) {
//     // clone the template
//     const template =
//     document.getElementById("card-template")
//     .content.cloneNode(true);
//     // populate the template
//     template.querySelector('.card-title').innerText =
//     product.title;
//     template.querySelector('.card-text').innerText =
// product.description;
// template.querySelector('.card-price').innerText =
// product.price;
//     document.querySelector('#card-list')
//     .appendChild(template);
//     }
    let product1 = new Product(1, "Le Club Armchair", 13265.00, "Made in Italy");
    let product2 = new Product(2, "Bristol System Coffee Table", 30100.00, "Made in Italy Designed by Jean-Marie Massaud");
    let product3 = new Product(3, "High ESI Luxury Sofa", 11990.00, "Everything Studios Italy");
    let product4 = new Product(4, "DUNE Pierre Paulin Contour Sofa in Boucle", 10190.00, "Dune - Pierre Paulin Inspired");
    let product5 = new Product(5, "Elia Marble Dining Table", 148000, "Elia Marble effortlessly commands attention in any space.");
    let product6 = new Product(6, "Voyage Dining Table II - the essentialist", 92000, "theessentialist, essentialist, the essentialist studio, the essentialist furniture");
// addCard(product1);
// addCard(product2);
// addCard(product3);
// addCard(product4);
// addCard(product5);
// addCard(product6);

///// OPEN CART BUTTON ///////
document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.getElementById('iconify-icon');
    const cartView = document.querySelector(".cart-view");
    
    cartIcon.addEventListener('click', () => {
        cartView.classList.toggle('active');
    });
    const closeShop = document.querySelector('.closeShop');
    closeShop.addEventListener('click', () => {
        cartView.classList.remove('active');
    });
});
///// OPEN CART BUTTON ///////
let products = [product1, product2, product3, product4,product5, product6 ];
let cartList = [];
function addCard(product) {
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
// Add products to the page
products.forEach(product => addCard(product));

function reloadCart() {
    console.log("Reloading cart with items:", cartList);
    const listCartElement = document.querySelector('.listCart');
    listCartElement.innerHTML = "";
    let count = 0;
    let totalPrice = 0;
    cartList.forEach((item, key) => {
        totalPrice += item.price * item.quantity;
        count += item.quantity;
        let newDiv = document.createElement("li");
        newDiv.innerHTML = `
            <div class="cartTitle">${item.title}</div>
            <div class="cartText">${item.description}</div>
            <div class="cartPrice">$ ${(item.price * item.quantity).toLocaleString()}</div>
            <div>
                <button  class="cartButtonTake" onclick="changeQuantity(${key}, -1)"> <iconify-icon icon="ri:subtract-line"></iconify-icon></button>
                <button class="cartButton" onclick="changeQuantity(${key}, 1)"> <iconify-icon icon="mdi:add-bold"></iconify-icon></button>
            </div>
        `;
        listCartElement.appendChild(newDiv);
    });
    const totalElement = document.querySelector('.total');
    const quantityElement = document.querySelector('.quantity');
    if (totalElement) totalElement.innerText = totalPrice.toLocaleString();
    if (quantityElement) quantityElement.innerText = count;
};
reloadCart();
function addToCart (productId) {
    console.log("Adding to cart:", productId); // Debugging line
   
    const productToAdd = products.find(product => product.id === productId);
    console.log("Product to add:", productToAdd); 
    if (!productToAdd) {
        console.error('Product not found!');
        return;
    }
    const foundIndex = cartList.findIndex(item => item.id === productToAdd.id);
    if (foundIndex === -1) {
        // cartList.push({ ...productToAdd, quantity: 1 });
        cartList.push({ 
            id: productToAdd.id,
            title: productToAdd.title, 
            description: productToAdd.description, 
            price: productToAdd.price, 
            quantity: 1 
        });
    } else {
        cartList[foundIndex].quantity += 1;
    }
    reloadCart();
};

// Function to change quantity (needs implementation)
const changeQuantity = (key, change) => {
    if (cartList[key]) {
        cartList[key].quantity = Math.max(cartList[key].quantity + change, 0);
        if (cartList[key].quantity === 0) {
            cartList.splice(key, 1);
        }
reloadCart();
}
};
const totalElement = document.querySelector('.total');
totalElement.innerText = totalPrice.toLocaleString();

