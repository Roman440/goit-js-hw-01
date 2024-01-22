function getShippingCost(country) {
  let msg = "";

  switch (country) {
    case "China":
      msg = "Shipping to China will cost 100 credits";
      break;
    case "Chile":
      msg = "Shipping to Chile will cost 250 credits";
      break;
    case "Australia":
      msg = "Shipping to Australia will cost 170 credits";
      break;
    case "Jamaica":
      msg = "Shipping to Jamaica will cost 120 credits";
      break;
    default:
      msg = "Sorry, there is no delivery to your country";
      break;
  }

  return msg;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"