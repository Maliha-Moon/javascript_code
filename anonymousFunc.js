//Syntax:
// function(){}
// to access & call the function,
// we need to store it in a variable

let sum = function(x,y){
    return x+y;
};
console.log(sum(10,40));

(
function(){
    console.log("Welcom to js");
})();

//setTimeout(function,time in ms)
setTimeout(function(){
    console.log("Hello github");
},2000); //will print after 2000ms