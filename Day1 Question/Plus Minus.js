'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let n = arr.length;
    let positiveCount = 0, negativeCount = 0, zeroCount = 0;

    for (let num of arr) {
        if (num > 0) positiveCount++;
        else if (num < 0) negativeCount++;
        else zeroCount++;
    }



