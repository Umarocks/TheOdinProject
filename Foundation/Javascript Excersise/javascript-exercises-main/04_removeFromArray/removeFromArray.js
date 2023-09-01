const removeFromArray = function(array , ...args) {
    for(i=0;i<args.length;i++){
        const numberToRemoveIndex = array.indexOf(args[i]);
        if(numberToRemoveIndex>=0){
            array.splice(numberToRemoveIndex,1);
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
