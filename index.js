var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var itemObject = {itemName: item, itemPrice: price};
  itemObject[item] = price;
  cart.push(itemObject);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var i;
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  for (i = 0; i < cart.length; i++) {
    
    }
   
  
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
