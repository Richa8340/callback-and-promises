/** Assignment 3
Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL and returns
the parsed JSON response.   */
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error; 
    }
}


fetchData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => {
        console.log('Fetched data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });


    /***   output
     * Fetched data: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
     */