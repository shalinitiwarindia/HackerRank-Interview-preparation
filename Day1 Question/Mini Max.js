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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    arr.sort((a, b) => a - b); // Sort array in ascending order

    let minSum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0); // Sum of the first 4 elements
    let maxSum = arr.slice(1, 5).reduce((sum, num) => sum + num, 0); // Sum of the last 4 elements

    console.log(minSum, maxSum);
}

function main() {
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    miniMaxSum(arr);
}



