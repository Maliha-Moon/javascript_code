//create a html element by DOM in memory
const div = document.createElement('div')  //accept tag name & return nodeList

//set properties
div.className = 'main'
//div.id = 'myId'
div.id = Math.random()
div.setAttribute('title','generated div')
div.style.backgroundColor = 'green'
div.style.color = 'white'
div.style.padding = '12px'
//div.innerText = 'Create Element'

//create text node
const text = document.createTextNode('DOM Element')
div.appendChild(text)
console.log(div)


//attach to document
document.body.appendChild(div)

//appendChild() is used to add a node to the end of the list of the child node of a specified node
