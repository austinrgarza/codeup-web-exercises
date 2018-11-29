'use strict';

function isNumeric(num) {
    return (!isNaN(parseFloat(num)));
}


var userInput;
do {
   userInput = prompt('Please enter an odd number between 1 and 50.');
    userInput = parseFloat(userInput);
} while (!isNumeric(userInput) || userInput % 2 === 0 || userInput < 1 || userInput > 50);
/*
if (isNumeric(userInput)
    && user input % 2 === 1
    && userInput >= 1
    && userInput <=50) break;


*/
console.log(userInput);


for (var i = 1; i <= 50; i+=2) {
    if (i === userInput){
        console.log('Yikes, skipping number: ' + userInput);
        continue;
    }
    console.log('Here is an odd number: ' + i )
}
//continue used in place of this else  // else {
