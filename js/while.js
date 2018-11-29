'use strict';


function powersOfTwo() {
    var i = 1;
    while (i < 65536) {
        // i *= 2;
        i = i * 2;
        console.log(i);

    }
}
powersOfTwo()

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
var remaining = allCones;
do {
    console.log('You have ' + remaining + ' left to sell');
    var toSell = Math.floor(Math.random() * 5) + 1;
    if (toSell > remaining){
    console.log ('You don\'t have enough cones to sell!');
    } else {
        console.log('You just sold ' + toSell + ' cones.');
        remaining = remaining - toSell;
    }
}while (remaining > 0);

console.log('Yay! We sold them all');









