/** Assignment 8
Create a function racePromises that takes an array of promises and returns the result of the first promise that
resolves or rejects. Use Promise.race() to implement this.  */

function racePromises(promises) {
    return Promise.race(promises);
}


const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'First Promise Resolved'));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 500, 'Second Promise Rejected'));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Third Promise Resolved'));

racePromises([promise1, promise2, promise3])
    .then(result => {
        console.log('First resolved/rejected promise result:', result);
    })
    .catch(error => {
        console.error('First resolved/rejected promise error:', error);
    });
