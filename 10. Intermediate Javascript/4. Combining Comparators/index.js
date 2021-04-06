prompt("Boy's Name: ");
prompt("Girl's Name: ");

var percantage = Math.random();
percantage = (percantage * 100);
percantage = Math.floor(percantage) + 1;

if(percantage > 80){
  console.log("Love Percentage: " + percantage);
  console.log("Turu Love");
}
else if(percantage < 80 && percantage >= 60){
  console.log("Love Percentage: " + percantage);
  console.log("Okay");
}
else{
  console.log("Love Percentage: " + percantage);
  console.log("Pocha");
}