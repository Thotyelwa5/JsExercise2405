// // what is a Variable
// A variable is a named storage location in programming that holds a value, which can be modified and accessed throughout the program
// //What is a value
// A value is a specific piece of data or information that can be assigned to a variable
// // What is a data type
// A data type is a classification of data that determines the kind of operations that can be performed on it, the values it can hold, and the way it is stored in memory
// // difference between const,var,let
// var has function scope and allows redeclaration and reassignment, let has block scope and allows reassignment but not redeclaration, and const has block scope and is used for variables with a constant value that cannot be reassigned or redeclared
// //what is a variable scope 
// Variable scope refers to the portion of code where a variable is visible and can be accessed
// // When can you decide when to use a for or while, forEach and do while loop?
// Use a for loop when you know the number of iterations in advance or need more control over the loop parameters
// Use a while loop when you have a condition that needs to be checked before each iteration
// Use a forEach loop when you want to iterate over elements of an array and perform a callback function for each element
// Use a do while loop when you want to execute the loop body at least once before checking the condition
// // Define hoisting and variable scoping
// Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, while variable scoping determines the visibility and accessibility of variables within a particular context or block of code
// How to create a function called fullName that returns your full name and displays it
// on the console
// function fullName() {
//     let firstName = "Thotyelwa";
//     let lastName = "Mpongwana";
//     let fullName = firstName + " " + lastName;
//     console.log(fullName);
//     return fullName;
//   }
  
//   // Call the function
//   fullName();

// // Question2
// var firstName = "Thotyelwa";
// var lastName = "Mpongwana";
// var age = 22;
// var subjects = ["Math", "Geograph", "English"];
// var address = {
//   streetName: "Imizamo Yethu Street",
//   streetNumber: 7689,
//   suburb: "Hout Bay",
//   city: "Cape Town",
//   country: "South Africa"
// };

// console.log("First Name: " + firstName);
// console.log("Last Name: " + lastName);
// console.log("Age: " + age);
// console.log("Subjects: " + subjects.join(", "));
// console.log("Address: " + address.streetNumber + " " + address.streetName + ", " + address.suburb + ", " + address.city + ", " + address.country);


// QUESTION3

// function calculateResult() {
//     let number1 = parseFloat(document.querySelector("#number1").value) ;
//     let operator = document.querySelector("#operator").value;
//     let number2 = parseFloat(document.querySelector("#number2").value);
  
//     let result = document.querySelector('#lblResult');
  
//     if (operator === "+") {
//       result.innerText = number1 + number2;
//     } else if (operator === "-") {
//       result.innerText = number1 - number2;
//     } else if (operator === "*") {
//       result.innerText = number1 * number2;
//     } else if (operator === "/") {
//       result.innerText = number1 / number2;
//     } else {
//       result.innerText = "Invalid operator";
//     }
  
    
//     console.log(result); 
//   }
  
//   let btnResult = document.querySelector("#btnResult");
//   btnResult.addEventListener("click", calculateResult);

// QUESTION 4
// let subject = "programming";
// let reversedSubject = "";
// for (let i = subject.length - 1; i >= 0; i--) {
//   reversedSubject += subject[i];
// }
// console.log(reversedSubject);

// Question5

let array = [
  { name: 'Mish-AI',
   dateOfBirth: '2020-05-31'
   }];

  
  let today = new Date();
  let mish = array[0]; 
  let mishDob = new Date(mish.dateOfBirth);
  
  let ageDiff = today.getFullYear() - mishDob.getFullYear();
  let isBirthdayPassed = today.getMonth() > mishDob.getMonth() ||
    (today.getMonth() === mishDob.getMonth() && today.getDate() >= mishDob.getDate());
  let age = isBirthdayPassed ? ageDiff : ageDiff - 1;
  
  
  let nextBirthday = new Date(today.getFullYear(), mishDob.getMonth(), mishDob.getDate());
  if (today > nextBirthday) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }
  let daysLeft = Math.floor((nextBirthday - today) / (1000 * 60 * 60 * 24));
  
  console.log(`Mish's age is ${age}, and there are ${daysLeft} days left until their birthday.`);
  


