// access elements

const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');

// click on Add
function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!');
    }
    else {
        let list = inputBox.value;
        let li = document.createElement('li');
        li.innerHTML = list;
        listContainer.appendChild(li);

        //cross icon
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

// done, remove
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// store data in localStorage
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

// display stored data
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();