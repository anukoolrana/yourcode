// function pankaj(){
//     console.log("hello")
// }
// pankaj();

// let pankaj=function(){
//     console.log("hello")
// }
// pankaj();
// pankaj();
// pankaj();

// arrow function
// let pankaj=()=>{
//     console.log("pankaj")
// }
// pankaj();

// ............Game ...*...************************


// let games = function game() {
//     for (x = 1; x <= 3; x++) {
//         let a = parseInt(Math.random() * 10);
//         let c = reqiure("readline-sync")
//         let b = c.questionInt("enter any number:-");
//         console.log("computer guessed no = " + a)
//         if (a == b) {
//             console.log("you guessed the correct number and you win")
//             break;
//         } else {
//             console.log("you guessed the wrong number ")
//             break;
//         }
//     }
// }
// games();

// for (i = 1; i <= 100; i++) {
//     let c = require("readline-sync")
//     let e = c.questionInt("do you want to play again? (Y/N)=");
//     if (e == 'y' || e == 'Y') {
//         game();
//     } else if (e == 'n' || e == 'N') {
//         console.log("thanks for playing")
//         break;
//     }
// }




// ************************************  simple function  ********************************************

// function fun(){
//     console.log("hello");
// }
// fun();

// ************************************** variable function********************************************

// let a=function(){
//     console.log("hello")
// }
// a();
// a();
// a();

// ****************************************** ARROW FUNCTION ********************************************

// let a=()=>{
//     console.log("my name is anukool")
// }
// a();

// ****** WRAP FUNCTION ***********ANIMIOUS FUNCTION ******** SELF INVOKE FUNCTION *************************

// (function(){
//     console.log("hello")
// })();

// (function(){
//     console.log("my name is anukool")
// })();


// (()=>{
//     console.log("hello")
// })();


// (()=>console.log("hello")
// )();


//  ******** string templates******backtick*********literals*******************************

// function a(name,age,mob){
//     console.log(`${name} ${age} ${mob}`)
// }
// a("anukool",21,1345678);

// function a(name,age,mob){
//     return(`${name},${age},${mob}`)
// }
// let b=a("anukool",21,23456789)
// console.log(b)


// ******************** CONSTRUCTOR IN OBJECT *****************************************************

// function a(){
//     this.name="anukool";
//     this.age=21;
//     this.mob=12345678999990
// }
// let obj=new a();
// console.log(obj)

// ********************** to change element *************************************************************

// function a(){
//     this.name="anukool";
//     this.age=21;
//     this.mob=12345678999990
// }
// let obj=new a();
//  obj.name="tarun"
// console.log(obj)

// 888*************************to add anything in object*********************************************

// function a(){
//     this.name="anukool";
//     this.age=21;
//     this.mob=12345678999990
// }
// let obj=new a();
//  obj.name="tarun";
//  obj.email="xyz@gmail.com";
// console.log(obj)

// **************************to delete element********************************************************


// 


// **************************prototype**********************

// function anu(){
//     this.firstname="anukool";
//     this.lastname="rana";
//     anu.address="sahranpur";
//     anu.prototype.age=21;
// }
// let obj=new anu();
// console.log(obj);
// anu.prototype.age=27
// delete anu.prototype.address;
// console.log(anu.prototype);    

// *******************************call back function************************************

// function one(a){
//     console.log("one")
//     a(three);
// }
// function two(b){
//     console.log("two")
//     b(four);
// }
// function three(c){
//     console.log("three")
//     c();
// }
// function four(){
//     console.log("four")
// }
// one(two);

// ************************* asynchronous and synchronuous ***********************

//  function one(a){
//      console.log("one")
//     setTimeout(()=>{
//         a(three);
//     },1000)
//     }
//     function two(b){
//         console.log("two")
//         b(four);
//     }
//     function three(c){
//         console.log("three")
//         c();
//     }
//     function four(){
//         console.log("four")
//     }
//     one(two);
    

// selfexercise**********

// function one(){
//     console.log("a")
// }
// one();
// function two(){
//     console.log("b")
// }
// two();
// function three(){
//     console.log("c")
// }
// three();
// function four(){
//     console.log("d")
// }
// four();