'use strict';

/**
 * const vs var
 * const dictates that the pointer cannot change
 * the object pointed to CAN change properties inside
 */
var foo = {firstName: 'Bob'};
const x = foo;

x.firstName = 'Hero';

console.log(x); // "Hero"

/**
 * Maths
 */
const a = 2;
const b = 20;

console.log(a + b); // 22
console.log(a - b); // -18
console.log(a * b); // 40
console.log(a / b); // 0.1
console.log(a % b); // 2

/**
 * Order of Operations
 */

console.log(a + b * a); // 42
console.log(a + b - a); // 20
console.log(a % b - b); // -18
console.log((a + b) * (a)); // 44
console.log(a % b / a); // 1
console.log(6 / a % b); // 3 Modulus and Division are on the same level (whichever comes first wins)

/**
 * Logic Statements
 */

if (true) { // This is run
  console.log('Does this run?'); // "Does this run?"
} else { // Does not run
  console.log('Wat');
}

if (false) { // Doesn't pass the test
  console.log('Hello World');
} else { // Do this instead
  console.log('Foo');
}

/**
 * Don't leave out brackets!!!
 * Here be 🐲
 */

if (true) // Brackets can be left out, only run one line
  console.log('Do this'); // "Do this"

if (false) // Brackets can be left out, only effects one line
  console.log(`Don't this`);
  console.log(`Try this out...?`); // (This will always run) "Try this out"

if (false)
  console.log('Do this');
else // Else statement without brackets
  console.log('Am I run?');

/**
 * Mulitple if else blocks
 */

if (2 === 'foo') {
  console.log('This will never work');
} else if ('something' === 'everything') {
  console.log('All the things');
} else {
  console.log('When is this run');
}

// What Javascript is doing with invisible braces
if (2 === 'foo') {
  console.log('This will never work');
} else {
  if ('something' === 'everything') {
    console.log('All the things');
  } else {
    console.log('When is this run');
  }
}

/**
 * While Loops
 */

var loopMe = 2;

// This would go on forever
// while (loopMe) {
//   console.log('HEYO');
// }

while (loopMe) { // Runs once
  console.log('One hop this time');

  loopMe = 0;
}

loopMe = 2;

while (loopMe) { // Run twice
  console.log('Loop me is:', loopMe);
  console.log('Two hops this time');

  loopMe--;
  console.log('Loop me will be:', loopMe);
}

// loopMe = 3;

while (loopMe) {
  if (loopMe === 2) {
    console.log('Everybody FREEZE!');
    break;
  }

  console.log(`Left foot let's stomp`);
  loopMe--;
}

/**
 * Better Looping
 */

for (var i = 0; i < 24; i++) { // It goes to 11!
  console.log(i);
  console.log(`Everybody clap your hands`);
}

const arr1 = [
  'Josh', 'John', 'Nick',
  'Tamarcus', 'Jonathan', 'Emily',
  'Boone', 'Stefan', 'Dan',
  'Anders', 'Kate'
];

for (var j = 0; j < arr1.length; j++) {
  console.log(`A student is named: ${arr1[j]}`);
  // console.log('A student is named: ' + arr1[j]);
}
