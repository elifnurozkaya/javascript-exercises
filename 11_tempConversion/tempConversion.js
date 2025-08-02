const convertToCelsius = function(num) {
  return Math.round((num-32)*50/9) /10;
};

const convertToFahrenheit = function(num) {
  return Math.round(((num*9/5 + 32)*10)) /10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
