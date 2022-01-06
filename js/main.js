/*

JavaScript Conditionals:

By using JavaScript conditionals we are able to make decisions in our code.
We reach an outcome based on the decision that is made. 
Common types of conditional statements are if, else, and else if. 

*/

let coding = prompt('Do you like to code?');

// Conditional
// if (coding == 'Yes') {
//   alert('Great answer!');
// } else if (coding == 'No') {
//   alert('Sorry to hear. You should give it a try.');
// } else {
//   alert('Try answering Yes or No');
// }

// Ternary Operator
// condition ? if : else;
// coding == 'Yes' ? alert('Great answer!') : coding == 'No' ? alert('Sorry to hear. You should give it a try.') : alert('Try answering Yes or No');

// Nested conditional

if (coding == 'Yes') {
  alert('Great answer!');
  let language = prompt('What is your favourite coding language?');
  if (language == 'JavaScript') {
    alert('Me too!');
  } else {
    alert(language + ' is a good choice too!');
  }
} else if (coding == 'No') {
  alert('Sorry to hear. You should give it a try.');
} else {
  alert('Try answering Yes or No');
}
