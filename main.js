// Assignment - Functions
// Homework - Lasha Shamugia

// 1. What is a function?
// ფუნქცია არის კოდის ის ნაკრები რომელსაც ერთხელ დავწერთ და ბევრჯერ გამოვიყენებთ
// სადაც დაგვჭირდება. ფუნქცია არსებობს არგუმენტებით და არგუმენტების გარეშე.


// 2. What is a function call?
// ამ დროს ხდება ფუნქციის შიდა კოდის გაშვება, ფუნქციის გამოძახებაში მოცემული ნებისმიერი მნიშვნელობა
// ენიჭება ფუნქციის პარამეტრებს და თუ აქვს return გაწერილი, მაშინ ეს მნიშვნელობა ბრუნდება იქ,
// სადაც ფუნქცია იყო გამოძახებული.


// 3. What is a code block, and how does it relate to a function?
// Code block ეს არის curly braces { } ფიგურულ ფრჩხილებში მოგცეული კოდი,
// რომლებიც ენიჭება ფუნქციას. ის აჯგუფებს კოდის მრავალ ხაზს ერთ ერთეულში.


// 4. Create a function that takes a string as an argument and greets the user.
// For example, if the function is called with "John," the function should return "Hello, John!"

// const greet = () => {
//   let user = "John"
//   console.log(`Hello ${user}`)
// }
// greet();



// 5. Create a function that takes a string as an argument and returns a string
// with the argument value in reverse. For example, if the function is called
// with the input "hello," the function should return "olleh."
// (Use a loop, not a method that does this in one step.)

// function reverseString(stringg) {
//   return stringg.split('').reverse().join('');
// }
// console.log(reverseString("hello"));



// 6. What is a default argument, and how does it work?
// function greet(name = "Guest") {
//   console.log(`Hello, ${name}!`);
// }
// greet(); // In the first call, no argument is passed, so name takes the default value "Guest".
// greet("Alice"); // In the second call, the value "Alice" overrides the default value.


// 7. What is the scope and lifetime of a variable?

// Global Scope -	Variables accessible anywhere in the program.	
// var x = 10;
// Function Scope	- Variables declared in a function are accessible only there.	
// function test() { var x; }
// Block Scope -	Variables declared with let or const exist within {}.	
// if (true) { let x = 5; }


// 8. What is a return value?

// The return keyword is used to return a value.
// The function can return any data type (string, number, object, array, function, etc.)



// 9. What is the return value of a function that does not have a return statement?

// If a function does not explicitly use the return keyword to send back a value, the function completes
//  its execution and implicitly returns undefined.



// 10. Given the following function, find mistakes in the code and explain what
// the function is supposed to do:

// function foo(x) {
//   x * 2;
// }
// let x = 7;
// x = foo(x);
// console.log(x);

// The expression x * 2 is evaluated but its result is not returned because there is no return keyword.
// The corrected function should look like this:

// function foo(x) {
//   return x * 2; // Use return to send the result back
// }
// let x = 7;
// x = foo(x);
// console.log(x);

// 11. Given the following code, find and correct the mistake in the code:

// function bar(x = 8) {
//   x += 1;
// }

// function foo() {
//   bar();
//   x *= 2;
// }

// let x = 7;
// foo(x);
// console.log(x); // x should change!


// The corrected function should look like this:

// function bar(x = 8) {
//   return x + 1; // Return the updated value of x
// }
// function foo(x) {
//   x = bar(x); // Update x using the returned value from bar
//   x *= 2;     // Double the updated value of x
//   return x;   // Return the final value of x
// }
// let x = 7;
// x = foo(x); // Update the global x with the returned value
// console.log(x); 


// 12. Given the following function, what is the return value of the 
// function call foo(2)? Explain your answer.

// function foo(x) {
//   if (x > 5) {
//       return x;
//   } else {
//       return x + foo(x + 1);
//   }
// }

// If x > 5, the function returns x immediately.
// Otherwise, the function returns x + foo(x + 1).
// Once x reaches a value greater than 5, the recursion stops, 
// and the values begin to resolve back up the recursive call stack.

// if x = 2, and since 2 < 5, the function returns 2 + foo(3).




// 13. Create a function that takes an array of numbers as an argument and 
// returns the sum of the odd numbers in the array. 
// (Use a loop, not a method that does this in one step.)

// function oddNumbers(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) { 
//       if (arr[i] % 2 !== 0) { 
//           sum += arr[i];
//           console.log(arr[i]);
//       }
//   }
//   return sum; 
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(`sum of odd numbers is ${oddNumbers(numbers)}`);