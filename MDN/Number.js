//literal forms

console.log(255); 
console.log(255.0);
console.log(255 === 255.0);
console.log(255 === 0xff); //hexidecimal notation
console.log(255 === 0b11111111); //binary notation
console.log(255 === 0.255e3); //decimal exponential notation

//The Number Function converts strings and other data types to number or return NaN

console.log(Number("123")); // returns the number 123
console.log(Number("123") === 123); // true

console.log(Number("unicorn")); // NaN
console.log(Number(undefined)); // NaN
