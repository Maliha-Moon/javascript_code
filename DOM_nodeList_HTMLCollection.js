// querySelector vs querySelectorAll

/** The NodeList is a static collection, meaning it doesn’t update if the DOM changes.
 * querySelector → First matching element or null.
 * querySelectorAll → All matching elements in a static NodeList or an empty NodeList.
 */

const list = document.querySelector('li')  //return the first element that matches CSS selector
console.log(list); 
list.style.color = 'red';

const allList = document.querySelectorAll('li')  //return nodeList (list of all matches elements)
console.log(allList); 
allList[1].style.color = 'green'
console.log(typeof(allList))

const allClass = document.querySelectorAll('.anchore')  //return nodeList
console.log(allClass);

//foeEach function for nodeList
allList.forEach(function (li){
    li.style.backgroundColor = 'pink'
})

allClass.forEach(function(cl){
    cl.style.color = 'orange'
})

//HTMLcollection
const tempClassList = document.getElementsByClassName('Lorem')
console.log(tempClassList)
//converted to array
const convertedArray = Array.from(tempClassList)
console.log(typeof(tempClassList))
console.log(convertedArray)
convertedArray.forEach(function(arr){
    arr.style.color = 'yellow'
})
