let myFavNumber =7;
let baseURL = "http://numbersapi.com"

//1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. 
//(Make sure you get back JSON by including the json query key, specific to this API. 
// let futureFavPromise = axios.get(`${baseURL}/${myFavNumber}?json`)
// futureFavPromise.then(res => {
//     console.log(res)
// }).catch(err =>{
//     console.log("errrrrrr",err)
// })
$.getJSON(`${baseURL}/${myFavNumber}?json`).then(res => console.log(res));

//2. Figure out how to get data on multiple numbers in a single request. 
//Make that request and when you get the data back, put all of the number facts on the page.
let favNumber = [3,5,9,11];

$.getJSON(`${baseURL}/${favNumber}?json`).then(res => console.log(res));

// let futurePromise = axios.get(`${baseURL}/${favNumber}?json`)
// futurePromise.then(res => {
//     console.log(res)
// }).catch(err =>{
//     console.log("errrrrrr",err)
// })
//3. Use the API to get 4 facts on your favorite number. 
//Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

Promise.all(
    Array.from({ length: 4 }, () => {
      return $.getJSON(`${baseURL}/${myFavNumber }?json`);
    })
  ).then(facts => {
    console.log(facts)
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
  });
