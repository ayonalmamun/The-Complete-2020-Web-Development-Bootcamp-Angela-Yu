function getMilk(dollars) {   
  var price = 1.5;
  console.log("bought " + calcBottles(dollars,price) + " bottles of milk.")
  return dollars % price;
}

function calcBottles(dollars,price){
  var bottles = Math.floor(dollars/price);
  return bottles;
}
var input = prompt("How much dollars you have: ");
var change = getMilk(input);
console.log("You have " + change + " dollars left");