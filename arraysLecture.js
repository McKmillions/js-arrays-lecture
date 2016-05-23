//JS-Arrays

// Create a simple array of some color names, in alphabetical order

/// Brown, Red, Green, Purple
var colors = ["Brown", "Red", "Green", "Purple"];

// Alert the second color in the array
// console.log(colors[1]);

// Add two new strings to the end of the array
// colors[colors.length] = "Yellow";
// colors[colors.length] = "Pink";
// console.log(colors);

// Remove the last string from the array and alert it
// var removed = colors.pop();
// console.log(removed);
// console.log(colors);
// Add a new string to the front of the array
// colors.unshift('Yellow');
// console.log(colors);

// Remove the first string in the array and alert it
// console.log(colors);
// var removed = colors.shift();
// console.log(removed);
// console.log(colors);

// Combine all the strings in the array into a single string
// var myArray = colors.join(" ");
// console.log(myArray);

// Now split the single string back into an array of colors
// var colors2 = myArray.split(" ");
// console.log(colors2);

// Find which index contains the color ‘Red'
// var idx = colors.indexOf('Red');
// console.log(colors[idx]);
// console.log(colors.indexOf('Red'));
// Create a new array with the 3rd and 4th colors (slice)
colors.push('Yellow');

// var last2Colors = colors.slice(2, 4);
// console.log(colors);
// console.log(last2Colors);
// Create another array with just the last 3 colors - Method 1
// var last3ColorsM1 = colors.slice(colors.length - 3);
// console.log("last3ColorsM1", last3ColorsM1);

// Create another array with just the last 3 colors - Method 2
// var last3ColorsM2 = colors.slice(-3);
// console.log("last3ColorsM2", last3ColorsM2);

console.log(colors);
// Remove Green and Purple from the array
var removed = colors.splice(colors.indexOf('Green'), 2);
console.log(removed);
console.log(colors);

// Add Pink to the array after Red index
colors.splice(2,0, 'Pink');
console.log(colors);

// Reverse the order of the colors
// colors.reverse();
// console.log(colors);

// Loop through all the colors and display on the console
// for(var color in colors){
//   console.log(color);
// }

// for (var index in colors){
//   console.log(colors[index]);
// }

for(var i = 0; i < colors.length; i++){
  console.log(colors[i]);
}
