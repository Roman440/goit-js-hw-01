function checkStorage(available, ordered) {
  if (ordered > available) {
    return "Not enough goods in stock!";
  } else {
    return "Order is processed, our manager will contact you";
  }
}

console.log (checkStorage(100, 50))
console.log(checkStorage(100, 130))


function checkStorage(available, ordered) {
  if (ordered === 0) {
    return "There are no products in the order!";
  } else if (ordered > available) {
    return "Your order is too large, there are not enough items in stock!";
  } else if (ordered < available) {
    return "The order is accepted, our manager will contact you";
  } else { 
    return "The order is accepted, our manager will contact you";
  }
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));
console.log(checkStorage(80, 80));

function getSubscriptionPrice(type) {
  let price;

  switch (type) {
    case "starter":
      price = 0;
      break;
    case "professional":
      price = 20;
      break;
    case "organization":
      price = 50;
      break;
    default:
      return "Invalid subscription type!";
  }

  return price;
}

// Приклади викликів функції
console.log(getSubscriptionPrice("professional")); // 20
console.log(getSubscriptionPrice("organization")); // 50
console.log(getSubscriptionPrice("starter")); // 0
console.log(getSubscriptionPrice("random")); // "Invalid subscription type!"
console.log(getSubscriptionPrice("premium")); // "Invalid subscription type!"

function getSubstring(string, length) {
return string.slice(0, length);

  
}
console.log(getSubstring("Hello world", 3));  // "Hel"
console.log(getSubstring("Hello world", 5));  // "Hello"
console.log(getSubstring("Hello world", 8));  // "Hello wo"
console.log(getSubstring("Hello world", 11)); // "Hello world"
console.log(getSubstring("Hello world", 0));  // ""

 
