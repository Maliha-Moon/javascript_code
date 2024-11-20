function addChild (childName){
    const newList = document.createElement('li')
    newList.innerHTML = `${childName}`  // it traverse the DOM tree
    const language = document.querySelector('.Language')
    language.appendChild(newList)
}

addChild('python')
addChild('typescript')

//optimized way
function optimized(childName){
    const newList = document.createElement('li')
    newList.appendChild(document.createTextNode(`${childName}`))
    document.querySelector('.Language').appendChild(newList)
}
optimized('React')

//edit
const secondLang = document.querySelector('li:nth-child(2)')
//secondLang.innerHTML = 'c++'
//more optimized for large project -> replace 
const newList = document.createElement('li')
newList.textContent = 'c++'
secondLang.replaceWith(newList)

const firstLang = document.querySelector('li:first-child')
firstLang.outerHTML = '<li>Nodejs</li>'  //Replaces the entire element

//remove
const lastLang = document.querySelector('li:last-child')
lastLang.remove()