exports.sumOfEvenFibonacciNumbers = function(n){
  var sum = 0;
  var gold= 1.61815754;
  var num = 
  ((((gold^n)-(1-gold))^n)/Math.sqrt(5))-n;
  //

  //
  // do your work here
 
 // var num = ((n-1) + (n-2))*2;
 //Math.sqrt();

  for (var i = 0; i < n; i++) {
  
    if (num%2){
      sum += i;
      return sum;
    }  
  }
console.log(sum);
  return sum;
};




