function checkConditions(a, b) {
    if (a > 10 || b < 5) {
      return "One or both conditions are true.";
    } else {
      return "Neither condition is true.";
    }
  }
  
  // Test cases
  console.log(checkConditions(15, 3)); // One or both conditions are true.
  console.log(checkConditions(8, 4));  // One or both conditions are true.
  console.log(checkConditions(5, 6));  // Neither condition is true.