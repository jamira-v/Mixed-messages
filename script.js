/* MIXED MESSAGES PROJECT: 
want to make it a random number generator that outputs a random number and 
that number gives a random fortune 
WILL USE: 
variables, objects, functions, if/else or switch statements, arrays
Use variables to state random number generator 
use console log often to check 
username is entered as a string, 
*/

//what do i want to define first: 
//where user can input their username: 
let userName = 'Jane';  //(outputs a name with a greeting when logged to the console)

//do a random number generator up to 4 numbers: 
const randomNumber = Math.floor(Math.random() * 4); 
let fortune = '';

//Make a switch statement for the fortunes: 
switch(randomNumber) {
    case 0:
    fortune = 'A beautiful, smart, and loving person will be coming into your life';
    break;
    case 1:
    fortune = 'A faithful friend is a strong defense';
    break;
    case 2: 
    fortune = 'A fresh start will put you on your way';
    case 3:
    fortune = 'A friend asks only for your time not your money';
}
console.log(`Hello, ${userName}, your fortune today is: ${fortune}`);

