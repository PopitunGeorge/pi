
// Get the add to cart button element
const addToCartButton = document.getElementById('add-to-cart');

// Add click event listener to the button
addToCartButton.addEventListener('click', addToCart);

// Function to add the product to the cart
function addToCart() {
  // Get the product details
  const productName = document.getElementById('product-name').innerText;
  const productPrice = parseFloat(document.getElementById('product-price').innerText);
  const productImage = document.getElementById('product-image').src;
  const productDescription = document.getElementById('product-description').innerText;

  // Create a new cart item element
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');

  // Create elements for product details
  const nameElement = document.createElement('h3');
  nameElement.innerText = productName;
  cartItem.appendChild(nameElement);

  const priceElement = document.createElement('p');
  priceElement.innerText = `Price: $${productPrice.toFixed(2)}`;
  cartItem.appendChild(priceElement);

  const imageElement = document.createElement('img');
  imageElement.src = productImage;
  cartItem.appendChild(imageElement);

  const descriptionElement = document.createElement('p');
  descriptionElement.innerText = productDescription;
  cartItem.appendChild(descriptionElement);

  // Add the cart item to the cart container
  const cartContainer = document.getElementById('cart-container');
  cartContainer.appendChild(cartItem);

  // Update the total price
  const totalPriceElement = document.getElementById('total-price');
  const currentTotalPrice = parseFloat(totalPriceElement.innerText.replace('$', ''));
  const newTotalPrice = currentTotalPrice + productPrice;
  totalPriceElement.innerText = `$${newTotalPrice.toFixed(2)}`;
}
//creaza un scriptul care sterge toate produsele din cos
// Create a button
var clearCartButton = document.createElement('button');
clearCartButton.textContent = 'Golește coșul';

// Add an event listener to the button
clearCartButton.addEventListener('click', function() {
    // Clear the cart in local storage
    localStorage.removeItem('cart');

    // Clear the cart container in the HTML
    var cartContainer = document.querySelector('.cart-container');
    cartContainer.innerHTML = '';
});

// Add the button to the body of the document
document.body.appendChild(clearCartButton);