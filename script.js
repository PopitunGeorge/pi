// Select all add-to-cart buttons
var addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add event listener to each button
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Get the parent product div
        var product = this.closest('.product');

        // Get the product details
        var productDetails = {
            name: product.querySelector('.product-name').textContent,
            quantity: parseInt(product.querySelector('.quantity').value),
            price: parseInt(product.querySelector('.price').textContent),
            addedAt: new Date().toLocaleString()
        };

        // Get the cart from local storage
        var cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the product to the cart
        cart.push(productDetails);

        // Save the cart back to local storage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update the total
        updateTotal();

        // Display the added product details
        var addedProductElement = document.getElementById('added-product');
        addedProductElement.textContent = 'Produs adăugat: ' + productDetails.name + ', Cantitate: ' + productDetails.quantity + ', Adăugat în coș la: ' + productDetails.addedAt;
    });
});

function updateTotal() {
    // Get the cart from local storage
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Calculate the total
    var total = 0;
    cart.forEach(function(item) {
        total += item.quantity * item.price;
    });

    // Display the total in the HTML
    var totalElement = document.getElementById('total');
    totalElement.textContent = 'Total: ' + total + ' lei';
}
///Stergere cos//////////////////////////////
// Select the clear-cart button
var clearCartButton = document.getElementById('clear-cart');

// Add event listener to the button
clearCartButton.addEventListener('click', function() {
    // Clear the cart in local storage
    localStorage.removeItem('cart');

    // Update the total
    updateTotal();

    // Clear the added product details
    var addedProductElement = document.getElementById('added-product');
    addedProductElement.textContent = '';
});