const parent = document.querySelector('.parent')
console.log(parent);
console.log(parent.children);    
/** return an HTML collection of all the child elements of the specified element
 *  children is a property of individual DOM elements (e.g., <div>, <span>, etc.) (not NodeList)  
 *  read-only property
 */
console.log(parent.children[1]);

for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerText);
}

parent.children[0].style.color = 'green'
console.log(parent.firstElementChild.innerText)
console.log(parent.lastElementChild.innerText)

//access child to parent
const day1 = document.querySelector('.day')
console.log(day1)
console.log(day1.parentElement.innerText)
console.log(day1.nextElementSibling)

/** childNode
 *  returns a node’s child nodes as a nodeList object. 
 *  White spaces and comments are also considered as nodes
 *  REACT works through childNodes
 */
console.log("Nodes: ",parent.childNodes)
