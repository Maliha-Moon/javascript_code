/* DOM -> Document Object Model
 * rdefines html documents in the form of objects, properties, methods & events data strucutre.
 * it is an interface(API) or connectivity between html & javascript
 * javascript get access of html elements with the help of DOM
*/

console.log(document.getElementById('dom'));
console.log(document.getElementById('dom').id);
console.log(document.getElementById('title').id);


/*document is an object
 * it represents HTML page
*/

// here, container is DOM element
const cont = container.getElementsByClassName('anchore')
console.log(cont);

//dynamic content
const element = document.getElementById('dom')
element.innerHTML = Date()

// setAttribute() always override attribute name
document.getElementById('title2').setAttribute('class', 'test heading')
let className = document.getElementById('title2').getAttribute('class')
console.log(className);

//style
let title = document.getElementById('title')
title.style.backgroundColor = 'green'
title.style.padding = '10px'
title.style.borderRadius = '15px'

//add content
const p = document.getElementById('dom');
p.innerHTML = "Hello World!"
// let div = document.getElementById('newDiv')
// div.innerHTML = '<p>Hello from MOON</p>';
// innerHTML defines anything that is written between open & closing tag, 
// can get & set HTML markup

//innerText -> Only shows text that is visible in the browser
console.log(title.innerText)
// textContent -> Retrieves the text exactly as it appears in the HTML source

/** KEY DIFFERENCE
 *  HTML supports HTML tags
 *  innerText, textContent doesnot support HTML tags
 */

//query selector
let unorder = document.querySelector('#list')
unorder.querySelectorAll('li') 
unorder.querySelector('li').style.backgroundColor='green' 

