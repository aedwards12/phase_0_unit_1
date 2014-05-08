// I paired [by myself, with:] on this challenge.

// I work by myself for this challenge


// Pseudocode
// make secretNumber a number
// make secretNumber value 7
// the value of password should be a string
// variable passworkd should say 'just open the door'
// allowedIn shoud be a boolean (true)
// change allowedIn to equal false
// make members a variable
// make members an array
// first member should be 'John'
// fourth member should be 'Mary'

// __________________________________________
// Write your code below.

//var secretNumber = 9
var secretNumber = 7

// var password = "password"

var password = "just open the door"

//var allowedIn = true

var allowedIn = false

var members
//members = new.Array
members = new Array

members[0] = "John"
members[3] = 'Mary'

// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 


var secretNumber = 7
var password = "just open the door"
var allowedIn = false
var members
members = new Array
members[0] = "John"
members[3] = 'Mary'


// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// 
// 
// 
// 
// 
U1.W3: JavaScript Variables and Object Types:

For this challenge I worked by myself. Once I fully understood how this challenge worked I enjoyed it. 
I had a tough time installing node on my mac. Somewhere along the line I missed the directions on how to 
install it. I ended up googling tutorials on how to install node via terminal commands. This challege provided
 a good exercise on making various variable objects and arrays. It was nice to add object to that array in 
 specified locations within the array. Im curious to learn the how this tutorial was made. I did not find 
 this challenge tedious. This was much better than the second challenge. I did not learn too much on this 
 challege but got more practice declaring various objects.  I am confident with the learning competencies of
  this challenge.


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

