//for-of loop -> only for string & array
/* No initialization
   no condition to stop loop
   no update(increment/decrement)....all of these happen automatically
*/

let str = "javasript"
for(let i of str){
    console.log(i);
}

// for-in loop -> object type
let student ={
    name: "Moon",
    id: 12345,
    cgpa: 4.0,
    dep: "CSE"
};

for(let key in student){
    console.log("key = ",key , "value = ",student[key]);
}