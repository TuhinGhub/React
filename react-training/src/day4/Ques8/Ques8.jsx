import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (event) => {
    const celsiusValue = event.target.value;
    const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
    setFahrenheit(fahrenheitValue);
    setCelsius(celsiusValue);
  };

  const handleFahrenheitChange = (event) => {
    const fahrenheitValue = event.target.value;
    const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
    setCelsius(celsiusValue);
    setFahrenheit(fahrenheitValue);
  };

  return (
    <div>
      <label>
        Celsius:
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder="Enter Celsius temperature"
        />
      </label>
      <label>
        Fahrenheit:
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          placeholder="Enter Fahrenheit temperature"
        />
      </label>
    </div>
  );
};

export default TemperatureConverter;
