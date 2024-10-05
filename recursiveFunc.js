//calling itself
// function myFunc(){
//     if(condition){
//         myFunc();
//     }
//     else{
//         //stop calling recursion
//     }
// }
// myFunc();

function countDown(num){
   console.log(num);
   num--;
   if(num>=0)
   countDown(num);
}
countDown(10);