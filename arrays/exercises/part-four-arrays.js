let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];
let holdCabinet3 = [];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.

holdCabinet3 = holdCabinet1.concat(holdCabinet2);
console.log(holdCabinet3);

holdCabinet3 = holdCabinet2.concat(holdCabinet1);
console.log(holdCabinet3);

console.log(holdCabinet1.concat(holdCabinet2,holdCabinet1));

console.log("holdCabinet1");

//2) Print a slice of two elements from each array. Does slice alter the original arrays?

let items = holdCabinet1.slice(1,3);
console.log(items);

let items2 = holdCabinet2.slice(0,2);
console.log(items2);

console.log('slice does not alter the original arrays.');

//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?

holdCabinet1.reverse();
console.log(holdCabinet1);

holdCabinet2.sort();
console.log(holdCabinet2);

console.log("The difference between the two methods are that reverse is starting from the end of the array and sort is sorting the array in increasing order. The two methods do not alter the original array.");