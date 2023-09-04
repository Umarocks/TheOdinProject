const add = function(num1 ,num2) {
	return (num1+num2);
};

const subtract = function() {
	return (num1-num2);
};

const sum = function(...args) {
  let sum=0;
  for(i=0;i<args.length;i++){
    sum+=args[i];
  }
	return (sum);
};

const multiply = function(num1 ,num2) {
  return (num1*num2);
};

const power = function() {
	return (num1**num2);
};

const factorial = function(num1) {
  let factorial=1;
	for(i=num1;i>=1;i--){
    factorial*=i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
