const sumAll = function(num1 , num2 ) {
    let sum=0;
    if(Number.isInteger(num1)&&Number.isInteger(num2)&&num1>=0&&num2>=0){
        for(i=Math.min(num1,num2);i<=Math.max(num1,num2);i++){
            sum+=i;
        }
        return sum;
    }
    return "ERROR";
    
};

// Do not edit below this line
module.exports = sumAll;
