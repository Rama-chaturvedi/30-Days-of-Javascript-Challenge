// Using let
let x = 10;
console.log(x);   // Output: 10

x = 20;
console.log(x);   // Output: 20

// Using const
const y = 10;
console.log(y);   // Output: 10

try {
  y = 20;         // This will throw an error
} catch (error) {
  console.error(error);    // Output: Assignment to constant variable.
}

