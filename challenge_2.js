exports.sumOfEvenFibonacciNumbers = function(n){

  var allNumbers = []; //declared an array variable
  var i = 0;
  var x = 0;


  while (i < n){
    allNumbers.push(i);
    i++;
  }

  var add = function(x, y){ return (x + y);};
  allNumbers.reduce(add);
    
  allNumbers.map(function(x){
      if (x%2 === 0){
        return x;

      }
  }).reduce(add);
console.log(x);
};


