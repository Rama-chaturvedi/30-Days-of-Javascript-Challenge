const constant = 234;   //declare a variable and assign value using 'const' keyword 
console.log(constant);  // output: 234

constant = 2345;             // re-assign value
console.log(constant);      // output: TypeError: Assignment to constant variable.

// Observation: The 'const' keyword in JavaScript ensures that a variable's value cannot be changed once it's assigned, and any attempt to reassign a value will result in a 'TypeError'.