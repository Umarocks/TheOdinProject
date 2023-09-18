const add = function(num1 ,num2) {
	return (num1+num2);
};

const subtract = function(num1 ,num2) {
	return (num1-num2);
};

const sum = function(...args) {
  let sum=0;
  if(args[0]==''){
    return 0;
  }
 
    for(i=0;i<args[0].length;i++){
      sum+=args[0][i];
    }
    return (sum);

  
};

const multiply = function(...args) {
  let multiplies=1;
  if(args[0]==''){
    return 0;
  }
 
    for(i=0;i<args[0].length;i++){
      multiplies*=args[0][i];
    }
    return (multiplies);
};

const power = function(num1,num2) {
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
