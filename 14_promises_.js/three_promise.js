
let promiseThree = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ name: "rahul", age: 20 });
    } else {
      reject("ERROR, Something went Wrong ");
    }
  }, 0);
});

promiseThree
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolve or rejected ");
  });

   
// ##################

async function consumePromiseFive() {
  try {
    let response = await promiseThree;
    console.log(response);
  } catch (error) {
    console.log("Error is handled");
  }
}
consumePromiseFive();
