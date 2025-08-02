const removeFromArray = function(arr,...del) {
    return arr.filter(item => !del.includes(item));
    
};

// Do not edit below this line
module.exports = removeFromArray;
