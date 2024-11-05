let arr =[1,2,3,4,5];

let output = arr.reduce((res,val) => {
    return res+val;
});

console.log(output);

let arr2 = [5,2,8,6];

let largest = arr2.reduce((pre,cur) => {
    return pre>cur ? pre : cur;
});
console.log(largest);

//*--practice--*
let n = prompt("Enter a number");
let array = [];
for(let i=1;i<=n;i++){
    array[i-1] = i;
}
console.log(array);
let prod = array.reduce((prev,curr) => {
    return prev*curr;
});
console.log(prod);


