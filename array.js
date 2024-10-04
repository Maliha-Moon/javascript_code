// In js, array is a special type of object
/*  object   |  array
   key:value | index:value
   every value has different var_name |  every value has same var_name
   #--- Array is mutable(changable) --#
*/
let marks = [92, 88, 85, 96, 90];
console.log(marks);
console.log(typeof (marks)); //object

let sum = 0;
//for-of: -- do not access index directly --
for (let el of marks) {
    console.log(el);
    sum += el;
}

let avg = sum / marks.length;
console.log(`Average mark = ${avg}`);

// #--- to change in array, we need to access index ---#
/** all items have an offer of 10% OFF on them.
 * change the array to store final price after applying offer. 
 */

let items = [250, 645, 300, 900, 50];
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
    items[i] = items[i] - (items[i] / 10);
    console.log(items[i]);
}

//using for-of loop
// let idx = 0
// for (let val of items) {
//     console.log(`value at ${idx} is ${val}`);
//     items[idx] = items[idx] - (items[idx] / 10);
//     console.log(`value after offer = ${items[idx]}`);
//     items[idx]++;
// }

//array methods
let food = ["Potato", "Tomato", "Apple", "Chicken"];
food.push("Chips", "Suger"); // add at the end
console.log(food);
let dlt = food.pop();  //remove from the end
console.log(food);
console.log(`deleted = ${dlt}`);
console.log(food.toString()); //convert into string

/** concat()
 *  combine arrays & create new array
 * do not change original array
 */
let basic =["html","css","js"];
let jsFramework = ["react","node"];
let cssFramework = ["tailwind","bootstrap"];
let development = basic.concat(cssFramework,jsFramework);
console.log(development);
console.log(basic);

/** unshift() -> add at start
 *  shift() -> remove from start
 */
console.log(food.shift());
food.unshift("Mango");
console.log(food);

/**  slice(strIdx,endIdx) -> do not change original array
*/
console.log(food.slice(2,5));

/** splice(strIdx,delCount,newEle...) -> change original array.
 * used to add new items to an array or delete element from array.
 * replace any element.
 */
//food.splice(2,0,"Lemon","Kiwi"); //add elements
//food.splice(2,1); //delete elements
food.splice(2,1,"Lemon","Kiwi"); // replace
console.log(food);

//practise
let company = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// remove the first company
company.shift()
console.log(company);
//["Microsoft","Uber","Google","IBM","Netflix"]
//remove Uber & Add Ola in its place
company.splice(1,1,"Ola");
console.log(company);
//["Microsoft","Ola","Google","IBM","Netflix"]
//Add Amazon at the end
company.push("Amazon");
console.log(company);

