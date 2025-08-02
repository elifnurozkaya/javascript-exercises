const reverseString = function(str) {
    let letters = str.split("");
    let reversedArray =[];
    for(let i= 0;i<letters.length;i++){
        reversedArray[i] = letters[letters.length-1-i];
    }
    let reversedString = reversedArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
