function selectUnitType() {
    var unitType = document.getElementById("unitType").value;
  
    var lengthConversion = document.getElementById("lengthConversion");
    var temperatureConversion = document.getElementById("temperatureConversion");
    var weightConversion = document.getElementById("weightConversion");
  
    lengthConversion.style.display = "none";
    temperatureConversion.style.display = "none";
    weightConversion.style.display = "none";
  
    if (unitType === "length") {
      lengthConversion.style.display = "block";
    } else if (unitType === "temperature") {
      temperatureConversion.style.display = "block";
    } else if (unitType === "weight") {
      weightConversion.style.display = "block";
    }
  }
  
  function convertLength() {
    var lengthInput = document.getElementById("lengthInput").value;
    var lengthUnit = document.getElementById("lengthUnit").value;
    var lengthResult = document.getElementById("lengthResult");
  
    var lengthInMeters;
  
    if (lengthUnit === "m") {
      lengthInMeters = parseFloat(lengthInput);
    } else if (lengthUnit === "cm") {
      lengthInMeters = parseFloat(lengthInput) / 100;
    } else if (lengthUnit === "ft") {
      lengthInMeters = parseFloat(lengthInput) * 0.3048;
    } else if (lengthUnit === "in") {
      lengthInMeters = parseFloat(lengthInput) * 0.0254;
    } else {
      lengthResult.textContent = "Please select a valid length unit.";
      return;
    }
  
    var lengthInFeet = lengthInMeters / 0.3048;
    var lengthInInches = lengthInMeters / 0.0254;
    var lengthInCentimeters = lengthInMeters * 100;
  
    lengthResult.innerHTML = lengthInput + " " + lengthUnit + " is equal to:<br/>" +
      lengthInMeters.toFixed(2) + " m<br/>" +
      lengthInCentimeters.toFixed(2) + " cm<br/>" +
      lengthInFeet.toFixed(2) + " ft<br/>" +
      lengthInInches.toFixed(2) + " in";
  }
  
  function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var temperatureUnit = document.getElementById("temperatureUnit").value;
    var temperatureResult = document.getElementById("temperatureResult");
  
    var temperature;
  
    if (temperatureUnit === "c") {
      temperature = parseFloat(temperatureInput);
    } else if (temperatureUnit === "f") {
      temperature = (parseFloat(temperatureInput) - 32) / 1.8;
    } else if (temperatureUnit === "k") {
      temperature = parseFloat(temperatureInput) - 273.15;
    } else {
      temperatureResult.textContent = "Please select a valid temperature unit.";
      return;
    }
  
    var temperatureInFahrenheit = (temperature * 1.8) + 32;
    var temperatureInKelvin = temperature + 273.15;
  
    temperatureResult.innerHTML = temperatureInput + " " + temperatureUnit + " is equal to:<br/>" +
      temperature.toFixed(2) + " °C<br/>" +
      temperatureInFahrenheit.toFixed(2) + " °F<br/>" +
      temperatureInKelvin.toFixed(2) + " K";
  }
  
  function convertWeight() {
    var weightInput = document.getElementById("weightInput").value;
    var weightUnit = document.getElementById("weightUnit").value;
    var weightResult = document.getElementById("weightResult");
  
    var weightInKilograms;
  
    if (weightUnit === "kg") {
      weightInKilograms = parseFloat(weightInput);
    } else if (weightUnit === "g") {
      weightInKilograms = parseFloat(weightInput) / 1000;
    } else if (weightUnit === "lb") {
      weightInKilograms = parseFloat(weightInput) * 0.45359237;
    } else if (weightUnit === "oz") {
      weightInKilograms = parseFloat(weightInput) * 0.0283495231;
    } else {
      weightResult.textContent = "Please select a valid weight unit.";
      return;
    }
  
    var weightInGrams = weightInKilograms * 1000;
    var weightInPounds = weightInKilograms / 0.45359237;
    var weightInOunces = weightInKilograms / 0.0283495231;
  
    weightResult.innerHTML = weightInput + " " + weightUnit + " is equal to:<br/>" +
      weightInKilograms.toFixed(2) + " kg<br/>" +
      weightInGrams.toFixed(2) + " g<br/>" +
      weightInPounds.toFixed(2) + " lb<br/>" +
      weightInOunces.toFixed(2) + " oz";
  }