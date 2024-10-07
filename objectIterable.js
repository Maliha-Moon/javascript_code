/* 1. In js, object is not iterable
   2. iterator is the mechanism of an iterable to iterate step by step 
   3. Array is iterable bcz it has symbol.iterator property
*/

let nums = [1,2,3,4,5];
console.log(nums[Symbol.iterator]());
const numsIterator = nums[Symbol.iterator]()
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
