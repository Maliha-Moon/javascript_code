function outer() {
    let username = "Google"
    function inner()  //accesible only within the body of outer() function
    {
        console.log(`inner ${username}`);
        let secret = 'my123'
    }
    function innerTwo(){
        console.log(`innerTwo ${username}`);
        console.log(`secret ${secret}`); //not accesible
    }
   // console.log(`outer ${secret}`); //cannot access var. inside child function
    inner();
    innerTwo();
    
    
}
outer();
//inner(); -> any local var. & child function inside any function scope is not accessible out of the scope!
console.log(`Too outer ${username}`);