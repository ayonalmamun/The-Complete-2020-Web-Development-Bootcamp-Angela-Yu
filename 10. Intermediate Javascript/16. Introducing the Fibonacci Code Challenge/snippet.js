function fibonacci(n){
  var output = [];
  if(n==1){
    output.push(0);
  }
  else if(n==2){
    output.push(0);
    output.push(1);
  }
  else if(n>2){
    output.push(0);
    output.push(1);
    for(var i=2;i<n;i++){
      var x = output [i-2] + output [i-1];
      output.push(x);
    }
  }
  return output;
}

var input = prompt();
var result = fibonacci(input);
console.log(result);