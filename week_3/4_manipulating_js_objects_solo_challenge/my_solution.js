// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
 
  make a new object adam with no properties yet

2. Give adam a name property with the value "Adam".

 assign adam the property name Adam

3. Add a spouse property to terah and assign it the value of adam.

to the object terah add a property value of  spouse and assign it adam

4. Change the value of the terah weight property to 125.

 change terah weight propert to 125

5. Remove the eyeColor property from terah.

remove the property eyeColor from terah object

6. Add a spouse property to adam and assign it the value of terah.

add a new property of spouse to adam and assign it the value of terah

7. Add a children property to terah and and use object literal notation to assign 
 this variable the value of a JavaScript Object object with no properties

  add a new empty object property name children to terah

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

to the childern property of terah and a new property carson and name it Carson

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

to the childern property of terah and a new property carter and name it Carter

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

to the childern property of terah and a new property colton and name it Colton

11. Add a children property to adam and assign it the value of terah children.


*/

// __________________________________________
// Write your code below.

// initial  code attep

/*var adam;
var adam = {};
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = {};
//terah.children = {name: "Carson"};
//terah.children.carson.name = Carson;
var carson = {name: "Carson"};
terah.children.carson = carson;
terah.children.carter = {name: "Carter"};
terah.children.colton = {name: "Colton"};
adam.children = terah.children;
//console.log(adam);
*/

// cleaner code 

var adam = {};
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = {};
terah.children.carson = {name: "Carson"};
terah.children.carter = {name: "Carter"};
terah.children.colton = {name: "Colton"};
adam.children = terah.children;


// __________________________________________
// Reflection: Use the reflection guidelines
// 
// Solo Challenge reflection:
/*This challenge taught me the most thus far.  I had to do some extra research on objects vs object literals. 
I also had to do some research on the delete feature to delete a property, which is now nice to know going forward.  
I still think I am unsure about object literals but I will practice more on it. I believe I understand most of it,
but it will be more clearer the use of it as we move forward or in my own practice time.  I am fairly confident in 
my Learning Competencies of this challenge.  I enjoyed the test drive portion of this challenge. I thought repeating 
the add children.’name’ part was a little tedious maybe we could have done something else instead print out adam also. 
*/

// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)
