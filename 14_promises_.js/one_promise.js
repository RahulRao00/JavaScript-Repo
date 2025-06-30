// const promise = new promise(function (resolve, reject) {
  // Asynchronous operation
//    Call resolve(value) if successful
//    Call reject(error) if there is an error
// });

const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("promise is resolved ");
  } else {
    reject("Promise is not resolved ");
  }
});

myPromise
  .then((message) => {
    console.log("Resolve, ", message);
  })
  .catch((error) => {
    console.log("Rejected, ", error);
  });

// const promiseOne = new Promise(function(resolve, reject) {

//     console.log('promise resolving  ')
//     resolve()
// }).then( function() {
//     console.log('another way to resolve a promise ');

// })

// promiseOne.then( function(){
//     console.log('promise resolved ');
// })
