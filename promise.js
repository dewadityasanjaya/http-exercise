const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Worked');
    } else {
        reject('Error')
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, '1');
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, '2');
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, '3');
});

// Promise all take all promise then return after all finished
Promise.all([promise, promise2, promise3, promise4])
    .then(values => console.log(values));

// Promise is similar to Callback
// Catch only executed when there is an error

promise
    .then(result => result + "!")
    .then(result2 => result2 + "?")
    .catch(() => console.log('Error caught!'))
    .then(result3 => {
        console.log(result3 + "!")
    })

// Example
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(results => {
    results.map(result => {
        console.log(result);
    })
}).catch(() => console.log('error'))