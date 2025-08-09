const add = function(num1,num2) {
	return num1 +num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((toplam,item)=>{
    toplam += item;
    return toplam;
  },0);
};

const multiply = function(arr) {
  return arr.reduce((prev,item)=>{
    prev *= item;
    return prev;
  },1);
};

const power = function(num,pow) {
  let powered = 1;
	for(let i=0;i<pow;i++){
    powered *= num;
  }
  return powered;
};

const factorial = function(num) {
	if(num==0)
    return 1;
  else
    return num*factorial(num-1);
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
