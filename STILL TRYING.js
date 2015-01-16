exports.sumOfEvenFibonacciNumbers = function(n){
 
  var f = [];
  for (var i = 0; i < n; ++i) {

    if (n%2)
            sum = sum + i;  
    f.push((n < 2) ? n : f[n-1] + f[n-2]);
  }
  return sum;
};