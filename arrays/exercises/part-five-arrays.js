let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];
let newstr = '';

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));

console.log("split divides a string into smaller pieces which are then stored in a new array.");

//2) Use the join method on the array to identify the purpose of the parameter inside the ().

newstr = arr.join('+');
console.log(newstr);

newstr = arr.join('');
console.log(newstr);

newstr = arr.join('_');
console.log(newstr);

console.log("join combines all elements of a n array into a string.");

//3) Do split or join change the original string/array?

console.log("Yes.");

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

console.log(cargoHold.split(',').sort().join(','));
