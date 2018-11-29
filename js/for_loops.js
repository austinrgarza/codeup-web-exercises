'use strict';

// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70


function showMultiplicationTable(input){
    for (var num = 1; num <= 10; num++){
    console.log(input + " x " + num + " = " + input * num);
    }
}
// showMultiplicationTable(7);


for (var i = 0; i <10; i++) {
    var num = Math.floor(Math.random() * 180) + 1;
    if (num % 2 ==0){
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    }
}

function numberTree() {
    for (var i= 1; i < 10; i++){
        var it = '';
        for (var j = 0; j<i; j++){
            it = it + i;
        }
        console.log(it);
    }

}
numberTree();

var countBackwardsByFives = function () {
    for (var i = 100; i >= 5; i-=5) {
        console.log(i)
    }
}
countBackwardsByFives();
