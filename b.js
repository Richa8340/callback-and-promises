/**   Assignment 2
Create a function getData that returns a Promise. The Promise should resolve after 2 seconds with a message
"Data fetched successfully." */

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully.");
        }, 2000); 
    });
}


getData().then((message) => {
    console.log(message); // Output : Data fetched successfully.
});
