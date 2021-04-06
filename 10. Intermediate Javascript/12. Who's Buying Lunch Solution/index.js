function whoIsPaying(names){
  var names = ["Ayon", "Kabila", "Discount", "Habu"];
  var n = Math.random();
  var l = names.length;
  n = (n * l);
  n = Math.floor(n);

  console.log("Lunch will be bought by: "+ names[n] + ".");
}

