/* 3.Create a functional component named Weather that accepts a prop called temperature (a number).
Display a message like "It's sunny today!" if the temperature is above 25°C and "It's cold today!" if the temperature is below 10°C.
Import and render the Weather component in the App component with different temperature values.*/
const Weather = (props) => {
    const { temp } = props;
    if (temp > 25) return "It's sunny today!";
    else if (temp < 10) return "It's cold today!";
  };
  export default Weather;