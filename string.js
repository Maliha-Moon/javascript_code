let obj = {
    item: "pen",
    price: 10,
};

console.log("The cost of", obj.item, "is", obj.price, "taka");

//Template literals
let specialString = `This is Template literals`;
console.log(specialString);
console.log(typeof (specialString));

let str = `addition: ${2 + 3 + 4}`;
/* first calculate value, 
& then become part of the string*/
console.log(str);

/* string interpolation
   ${expression} is placeholder, become string 
   value inside ${expression} calculate during runtime*/
let output = `The cost of ${obj.item} is ${obj.price} taka`;
console.log(output);

//Escape characters
let esc = `Hello\nworld`; //11 including \t,\n
console.log(esc.length); 

/* string methods
  .toUpperCase();
  .toLowerCase();
  .trim(); -> remove whitespaces from starting & ending
  .slice()
  .concat()
  .replace
  #---Strings are immutable(unchangable)---#
  ...these methods do not change the original string, create a new string
 */
let str2 = `javascript`;
let newStr=str2.toUpperCase();
console.log(newStr); 

let str3 = `   web development `;
//let newStr = str3.trim();
console.log(str3.trim());

let str4 = `abcdefgh`;
let newSlice = str4.slice(3,7); //excluding end index
console.log(newSlice);

let newConcat = `Hello` + 123; //internally convert 123 into string & concat them
console.log(newConcat);

let str5=`hellololo`;
console.log(str5.replace("lo","lp")); //replace the first occurance
console.log(str5.replaceAll("lo","lp"));

let str6=`IloveJavascript`;
str6[0] = `S`;
console.log(str6); //won't change 

/** Q: Prompt the user to enter their fullname without space.
 * Generate a username based on the input starting with @, 
 * followed by full name & end with the fullname length.
 */

let fullName = prompt("Enter your full name without space");
let userName = "@" + fullName + fullName.length;
console.log(userName); 



