function getMilk(dollars) {   
  var price = 1.5;
  var milk = Math.floor(dollars/price);
  console.log("bought " + milk + " bottles of milk.")
  return dollars % price;
}

var change = getMilk(5); // 5 dollars, buy as much as you can
console.log("You have " + change + " dollars left");