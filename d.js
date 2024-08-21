/** Assignment 5
Implement a function multiplyWithCallback that takes an array of numbers and a callback function. The
function should multiply each element of the array by 2 and pass the result to the callback.
   */
function multiplyWithCallback(numbers, callback) {
    const results = numbers.map(num => num * 2);
    callback(results);
}


const numbers = [1, 2, 3, 4, 5];

multiplyWithCallback(numbers, (result) => {
    console.log('Multiplied results:', result); // Output: Multiplied results: [2, 4, 6, 8, 10]
});


