let cartItems = 
function(i) {
    let cart = [
      "id: 1, product: shirt, price: $24.00, quantity: 1",
      "id: 2, product: pants, price: $84.00, quantity: 2",
      "id: 3, product: skirt, price: $42.00, quantity: 1",
      "id: 4, product: shorts, price: $60.00, quantity: 1",
      "id: 5, product: shoes, price: $104.00, quantity: 3",
      "id: 6, product: accessories, price: $36.00, quantity: 1"
    ];
    
    let selection = cart[Math.floor(Math.random()*cart.length)];
    return selection[i];
    }
    cartItems();

    module.exports.ks = cartItems;

    