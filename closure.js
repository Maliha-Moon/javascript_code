/** In closure,
 * call stack memory holds execution flow 
 * heap memory holds data that is referenced by execution context
 */
function creatCounter(){
    let count = 0;      // store in heap memory
    function increment(){
        count++;
        console.log(`counter increased to ${count}`);
    }

    return increment;  // reference to laxical scope

}

const myFunct = creatCounter();
myFunct();
myFunct();
myFunct();

console.dir(myFunct);
