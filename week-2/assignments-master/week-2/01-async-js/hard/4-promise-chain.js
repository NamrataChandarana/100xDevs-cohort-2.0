/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

const wait = require("./1-promisify-setTimeout");

function wait1(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      console.log(`Promise 1 resolved at ${Date.now()}`);
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      console.log(`Promise 2 resolved at ${Date.now()}`);
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      console.log(`Promise 3 resolved at ${Date.now()}`);
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const start = Date.now();
  // const p1 = wait1(t1);
  // const p2 = wait2(t2);
  // const p3 = wait3(t3);

  return wait1(t1)
    .then((result1) => {
      console.log(result1);
      return wait2(t2);
    })
    .then((result2) => {
      console.log(result2);
      return wait3(t3);
    })
    .then((result3) => {
      console.log(result3);
      const end = Date.now();
      const totaltime = end - start;
      return `total time taken is ${totaltime}`;
    });
}

calculateTime(3, 5, 6)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = calculateTime;
