/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  return new Promise((resolve) => {
    // setTimeout(() => {

    // }, milliseconds);
    for (i = 0; i <= milliseconds; i++) {
      console.log("runnung");
    }
    console.log("hello");
    resolve(`Thread halted for ${milliseconds} milliseconds`);
  });
}
sleep(1000)
  .then((message) => {
    console.log(message);
    console.log("Thread resumes after delay");
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = sleep;
