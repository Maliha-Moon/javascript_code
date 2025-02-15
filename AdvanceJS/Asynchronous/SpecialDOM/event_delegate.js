const myList = document.querySelector('#myList');
const ListValue = document.querySelector('#listValue')
const getLists = (event) => {
    console.log(event.target);
    // console.log(event.currentTarget);
    ListValue.innerHTML = event.target.textContent;
}
myList.addEventListener('click',getLists);

