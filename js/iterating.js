(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ["Quavo", "Offset", "Takeoff", "Cardi"];



    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    console.log("*****************");

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

   console.log(names);

   console.log("*********************");


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (var i = 0; i < names.length; i++){
            console.log('The name at index ' + i + ' is: ' + names[i]);
    }

console.log("*************************");

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function (name) {
        console.log(name + " is an AMAZING name, you should probably be a rapper")
    });

    console.log("**********************");

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(array) {
        return array[0];
    }
    function second(array) {
        return array[1];
    }
    function third(array) {
        return array[array.length - 1];
    }
    console.log(first(names));
    console.log(second(names));
    console.log(third(names));







    // var arrayList = [
    //     ['1', '2', '3', '4', '5'],
    //     ['1', '2', '3', '4', '5'],
    //     ['1', '2', '3', '4', '5'],
    //    ];


})();

console.log("*********************");

