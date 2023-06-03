function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (ordered = 0) {
    message = 'There are no products in the order!';
  } else if (available>=ordered) { 
    message = 'The order is accepted, our manager will contact you';
  } else (available<ordered){
   message = 'Your order is too large, there are not enough items in stock!';
  }
  // Change code above this line
  return message;
}