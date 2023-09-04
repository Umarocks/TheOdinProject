const convertToCelsius = function(temp) {
  let tempInCelsius = (temp-32)/1.8
  tempInCelsius=Math.round(tempInCelsius*10)/10
  return tempInCelsius
};

const convertToFahrenheit = function(temp) {
  let tempInFahrenheit = (temp*1.8)+32;
  tempInFahrenheit = Math.round(tempInFahrenheit*10)/10;
  console.log(tempInFahrenheit);
  return tempInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
