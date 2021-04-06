function bmiCalculator(weight,height) {   
  var BMI = weight/Math.pow(height,2);
  console.log(Math.round(BMI));
}

var bmi = bmiCalculator(65,1.8);
