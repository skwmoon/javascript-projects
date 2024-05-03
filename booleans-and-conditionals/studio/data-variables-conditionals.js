// Initialize Variables below

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions

const date = "Monday 2019-03-18";
const time = '10:05:34 AM';
const astronautCount = 7; 
const astronautStatus = 'ready';
const averageAstronautMassKg = 80.7;
const crewMassKg = astronautCount * averageAstronautMassKg;
const fuelMassKg = 760000;
const shuttleMassKg = 74842.31;
const totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const maximumMassLimit = 850000;
const fuelTempCelsius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150
const fuelLevel = '100%';
const weatherStatus = 'clear';
const preparedForLiftoff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount > 7){
     console.log("Not ready to Launch.");
} else {
    console.log("Ready to Launch.");
}

// add logic below to verify all astronauts are ready

if (astronautStatus === 'ready'){
    console.log("Ready to Launch.");
} else {
    console.log("Not Ready!");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg < 850000){
    console.log("Ready to Launch.");
} else { 
    console.log("Not Ready.");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius < -300 && fuelTempCelsius > -150){
    console.log('Not ready.');
} else {
    console.log('Ready to Launch.');
}

// add logic below to verify the fuel level is at 100%

if (fuelLevel !== '100%'){
    console.log("Not Ready.")
} else {
    console.log('Ready to launch.');
}

// add logic below to verify the weather status is clear

if (weatherStatus !== 'clear'){
    console.log("Not Ready.");
} else {
    console.log("Ready to Launch.");
}

// Verify shuttle launch can proceed based on above conditions

console.log("All System are a go! Initiating space shuttle launch sequence.");
console.log("Date: " + date);
console.log("Time: " + time);
console.log("Astronaunt Count: " + astronautCount);
console.log("Crew Mass: " + crewMassKg);
console.log("Fuel Mass: " + fuelMassKg);
console.log("Shuttle Mass: " + shuttleMassKg);
console.log("Total Mass: " + totalMassKg);
console.log("Fuel Temperature: " + fuelTempCelsius);
console.log("Weather Status: " + weatherStatus);
console.log("Have a safe trip astronauts!");
