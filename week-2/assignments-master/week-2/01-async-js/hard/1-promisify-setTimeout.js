/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  const pr = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const oderId = 2;
      resolve(oderId);
    }, n * 1000);
  });
  console.log(pr);
  return pr;
}
wait(1);

wait(1).then((oderId) => console.log(oderId));

// console.log(promise);

module.exports = wait;
