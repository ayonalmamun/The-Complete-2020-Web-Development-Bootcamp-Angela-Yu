function lifeInWeeks(age) {  
  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365;    
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining * 12;

  console.log("Days left: " + days);
  console.log("Weeks left: " + weeks);
  console.log("Months left: " + months);
}

var count = prompt("Enter your age: ");
lifeInWeeks(count);