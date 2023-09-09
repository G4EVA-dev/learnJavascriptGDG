/* TASK ON ARRAYS FROM JAVASCIPT BOOK "ELOQUENT JAVASCRIPT" 
!QUESTION
Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.
As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].
*/

//!CODE
const range = (start, end) => {  //range arrow function 
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}

const sum = (arrayOfNumbers) => {
  let sum = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum = sum + arrayOfNumbers[i]; // sum =+ arrayOfNumbers[i]
  }
  return sum;
}
console.log(range(1, 10));
console.log("The Sum is:" + " " + sum(range(1, 10)));

//!BONUS, Not Complete :(
const Range = (start, end, step) => {  //range arrow function 
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(i + step);
  }
  return array;
}
console.log(Range(1, 10, 2));
console.log("\n *****NEXT TASK!!!***** \n");

//!TASK ON OBJECTS.
// Create a JavaScript object to represent a person. The object should have the following properties: name, age, and address, school.
// Create a function to print the information about the person. The function should take the person object as an argument.
// Create a function to update the person's information. The function should take the person object and the new information as arguments.
const person = {
  name: 'John Doe',
  age: 19,
  address: "Ndongo Buea"
}

function printPerson(object) {
  console.log(`Name is ${person.name}`); //Usin String Interpolation
  console.log(`Age is ${person.age}`);
  console.log(`Address is ${person.address}`);
}
printPerson(person); //Print the object

function updatePerson(object, newName, newAge, newAddress) {
  person.name = newName;
  person.age = newAge;
  person.address = newAddress;
}
updatePerson(person, "Mary", 17, "Yaounde")
console.log(person);
console.log("\n *****NEXT TASK!!!***** \n");

//!CHECK PALINDROMOE
//A Palindrome is a word, phrase digit or sepuence of digits that reads thesame in a reverse order like radar
const checkPalindrome = (textCheck) => {
  let reverseArray = textCheck.split('').reverse().join("");
  if (textCheck === reverseArray) {
    console.log("Yes, That's a Palindrome");
  } else {
    console.log("Sorry, No Palindrome");
  }
} 
checkPalindrome("radar");
checkPalindrome("Javascript");
checkPalindrome("4444");
