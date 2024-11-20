/** appendChild() is used to add anode to the end of the list of child node of a specific parent node
 * used to move an existing child node to the new position within the documnet
 */

//1.create a new list
const list = document.createElement('li')
list.innerText = 'Project'
const menu = document.getElementById('menu')  // 2. select element
menu.appendChild(list)    //3. move to the end of child node

// use function to add more child
function addChild (childName){
    const newList = document.createElement('li')
    newList.innerHTML = `${childName}`   //* it traverse the whole DOM tree
    const newMenu = document.querySelector('#menu')
    newMenu.appendChild(newList)
}

addChild('Service')
addChild('Feedback')

//optimized way
function optimized(childName){
    const newList = document.createElement('li')
    newList.appendChild(document.createTextNode(`${childName}`))
    document.querySelector('#menu').appendChild(newList)
}

optimized('Log in')