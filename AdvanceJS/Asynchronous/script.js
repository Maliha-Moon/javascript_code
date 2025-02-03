/* By Default
  ? Synchronous
  ? Single Threaded 
*/

// const a = function () {
//     console.log('Function');
//     let aTime = new Date().getTime();
//     while(aTime + 10000 >= new Date().getTime());
//         console.log('Blocked');

// }
// console.log('first');
// a();
// console.log('last');

// Asynchronous javascript
/*
* setTimeout
* setInterval
* promises
* fetch
* axios
* XMLHttpRequest
*/

// setTimeout(callback, timeInms);
// console.log('Hello');
// console.log('Hello2');
// setTimeout(function () {
//   console.log('Hello3');
// }, 7000);
// console.log('Hello4');
// console.log('Hello5');

// // Promise((resolved, rejected) => {})
// const promise = new Promise((resolve, reject) => {
//   // Perform async operation
//   if (false) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// promise.then(function () {
//   console.log('resolved');
// }).catch(function () {
//   console.log('reject');
// })

const num = new Promise((res, rej) => {
  let randomNum = Math.floor(Math.random() * 10);
  console.log(randomNum);
  if (randomNum < 5) {
    return res();
  } else {
    return rej();
  }
});

num.then(function () {
  console.log('Below')
}).catch(function () {
  console.log('Above')
});

// const p1 = new Promise((res, rej) => {
//   setTimeout(function () {
//     res('Step one done')
//   }, 2000);
// });
// const p2 = new Promise((res, rej) => {
//   setTimeout(function () {
//     res('Step two done')
//   }, 2000);
// });
// // Promise.all(iterable)
// Promise.all([p1,p2]).then((res) => {
//   console.log(res);
// })

// chaining

const promise1 = new Promise((res, rej) => {
  setTimeout(function () {
    res('Step one done')
  }, 2000);
});

promise1.then((data) => {
  console.log(data);
  let promise2 = new Promise((res, rej) => {
    setTimeout(() => {
      res('Step two done')
    }, 3000);
  });
  return promise2;
}).then((value) => {
  console.log(value);
  return 20;
}).then((num) => {
  console.log(num);
});


