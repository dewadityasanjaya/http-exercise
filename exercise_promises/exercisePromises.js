// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'success');
});

// #2) Run the above promise and make it console.log "success"
promise.then(result => console.log(result));

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
Promise.resolve('success').then(value => console.log(value))

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch(value => console.log('Ooops something went wrong'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.dev/api/people/1',
  'https://swapi.dev/api/people/2',
  'https://swapi.dev/api/people/3',
  'https://swapi.dev/api/people/4'
]

Promise.all(urls.map(url => {
  return fetch(url).then(response => response.json())
})).then(results => {
  results.map(result => {
    console.log(result);
  })
}).catch(() => console.log('error'))

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
const urls2 = [
  'https://swapi.dev/api/peole/1',
  'https://swapi.dev/api/people/2',
  'https://swapi.dev/api/people/3',
  'https://swapi.dev/api/people/4'
]

Promise.all(urls2.map(url => {
  return fetch(url).then(response => response.json())
})).then(results => {
  results.map(result => {
    console.log(result);
  })
}).catch(() => console.log('error', err))