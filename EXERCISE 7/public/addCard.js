
let fetchedProducts = [];

function fetchProducts() {
    fetch('/api/list')
        .then(response => response.json())
        .then(products => { // products is now directly an array
            console.log("Fetched Products:", products);
            products.forEach(product => {
                addCard(product);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
}


function addToCart(productId) {
    console.log("Added product to cart:", productId);
    // Implement adding to cart logic here
}


function addCard(product) {
    const template = document.getElementById("card-template").content.cloneNode(true);

    // Populate the template with product details
    template.querySelector('.card-title').innerText = product._title;
    template.querySelector('.card-text').innerText = product._description;
    template.querySelector('.card-price').innerText = `Total: $ ${product._price}`;

    // Add event listener to the Add to Cart button
    const addToCartButton = template.querySelector('.addToCart');
    addToCartButton.addEventListener('click', () => {
        addToCart(product.id); // Call addToCart with the product id
    });

    document.querySelector('#card-list').appendChild(template);
}

document.addEventListener('DOMContentLoaded', fetchProducts);
