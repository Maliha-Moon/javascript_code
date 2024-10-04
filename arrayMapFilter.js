//map can be used to creat new array from an existing array
// map() -> take function as argument
let nums = [67, 52, 39];

// let newArray = nums.map(function value(val) {
//     return val*2;
// });

let newArray = nums.map((val) => val*2);

console.log(newArray);

//filter -> return value based on condition
/**The filter() method creates a new array filled with elements that pass a test provided by a function.

*The filter() method does not execute the function for empty elements.

*The filter() method does not change the original array.
 */
let arr = [1,2,3,4,5,6,7,8];
let newArr = arr.filter((val) => {
    return val % 2 == 0;
});
console.log(newArr);

// *--practice--*
// filter out of the marks og students that scored 90+
let marks = [87,93,64,99,86];
let newMark = marks.filter((val) => {
    return val>90;
});
console.log(newMark);


