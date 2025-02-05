// const rendomUser = () => {
//     fetch('https://randomuser.me/api/')
//         .then(
//             function (raw) {
//                 // make it readable
//                 return raw.json();
//             }).then(function (data) {
//                 console.log(data);
//             })
//             .catch(()=>{
//                 console.log('No data found');
//                 // console.log(error);
//             })
// };

// rendomUser();

/**
 * USING ASYNC/AWAIT
 */


async function rendomUser() {
  let urlAPi = await fetch('https://randomuser.me/api/');
  // make it readable
  let rawData = await urlAPi.json();
  console.log(rawData);
  console.log(`${rawData.results[0].name.title} ${rawData.results[0].name.first} ${rawData.results[0].name.last}`);
  console.log(`${rawData.results[0].email} `)
};

rendomUser();