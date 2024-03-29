/**************
 * Data Types *
 **************
    - undefined
    - null
    - boolean
    - string
    - symbol
    - number
    - object
    **************/

var myName = "Ilham"; // Globa variable
myName = "John";

let ourName = "Mayer"; // Local variable

const pi = 3.14;

console.log(myName + " " + ourName)

/*******************************************
 * Storing Values with Assignment Operator *
 *******************************************/

var a; // Declaring variable
var b = 2; // Declaring and assigning variable

console.log(b);

/***************************************************
 * Initializing Variables with Assignment Operator *
 ***************************************************/

a = 7; // Assigning variable or initializing variable
b = a;

console.log(b);

/***************************
 * Uninitialized Variables *
 ***************************/

// Initialize variables
var a = 5;
var b = 10;
var c = "I am a";

// Uninitialized variables
a = a + 1;
b = b + 5;
c = c + " String!";

console.log(a);
console.log(b);
console.log(c);

/*********************************
 * Case Sensitivity in Variables *
 *********************************/

// Declarations
var CaseSensitive;

// Assignments
caseSensitive = 10;

console.log(caseSensitive);