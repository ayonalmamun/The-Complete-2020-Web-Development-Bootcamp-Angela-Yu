var year = prompt("Enter Year: ");

if(year%4==0 && year%100==0 && year%400==0){
  console.log("Leap");
}
else if(year%4==0 && year%100!=0){
  console.log("Leap");
}
else{
  console.log("Nope");
}