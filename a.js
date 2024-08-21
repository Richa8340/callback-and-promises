/**   Assignment 1
Write a function sumAsync that takes two numbers as arguments and uses a callback to return their sum after
a delay of 1 second.*/


function sumAsync(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 1000); 
}


sumAsync(5, 7, (result) => {
    console.log('Sum:', result); //output: Sum: 12
});
