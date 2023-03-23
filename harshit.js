// declare a variable
// var firstName="akku";
// use a variable
// console.log(firstName)
// change the variable value
// firstName="anu";
// console.log(firstName)


// ******let*************can declare a variable only once and can update
// let firstName="akku"
// console.log(firstName)
// firstName="anu"
// console.log(firstName)

// ****const**********************cant change the variable value
// const firstName="akku"
// console.log(firstName)
// // firstName="annu"
// console.log(firstName)


// ******************************string***********************

// let firstName="anukool";
// console.log(firstName[2]);
// console.log(firstName.length)  

// *******last index of a string********

// console.log(firstName.length-1)  
//  firstName=" anukool ";
// console.log(firstName.trim())
//  firstName=firstName.toUpperCase();
//  firstName=firstName.toLowerCase();
// console.log(firstName)

// **********Slice()*********************
// let firstName="anukool";
// let newstring=firstName.slice(0,5)
// console.log(newstring)

// 888888888888 typeof()88888888888

// let a=20;
// let name="anukool"
// console.log(typeof a);
// console.log(typeof name);

// 8***********convert string to number(it convert a string inmtyo and return same string)**************

// let a="annu";
// a=+"annu"
// console.log(typeof a)
// ***********number to string ***************
// let a=20;
// let b= 20 + ""
// console.log(typeof b)

// **************concatination**************
// let a= "annu"
// let b="kool"
// console.log(a+b)

// let a="2"
// let b="4"
// console.log(+a + +b)

// *************************template string************
// my name is anukool and my age 21

// let name="anukool"
// let age=21;
// console.log("my name is "  +name + " and my age "+21)

// let name="anukool"
// let age=21;
// console.log(`my name is ${name}and my age is ${age}` )

// **************undefined*****************
// let a;
// console.log(typeof a)

// 8888***************null****************8
// let a=null;
// console.log(typeof null)

// *****************bigint*************
// let a=1234567897654212456789;
// console.log(BigInt(a)) 
// or 
// console.log(23n)

// ******************booleans abd comparison operator*************
// let a=5;
// let b=7;
// console.log(a==b)
// console.log(a<b)

// if else condition****************************************

// let age=18;
// if(age=18){
//     console.log("u can play")
// }else{
// console.log("u can not play")
// }


// let i=2;
// if(i%2==0){
//     console.log("even")
// }else{
// console.log("odd")
// }

// *****************8ternary operator*************
// let age=25;
// let drink;
// if(age<=25){
//     drink="coffee"
// }else{
//     drink="green tea"
// }
// console.log(drink)

// orrrrrrrrrr

// let age=25;
// let drink=age<=25?"coffee":"green tea"
// console.log(drink)

// ************* and or operator****************

// let firstname="annu"
// let age=21;
// if(firstname[0]=="a"&& age==21){
//     console.log("did u like me")
// }else{
//     console.log("u so sweet")
// }

// let firstname="annu1"
// let age=26;
// if(firstname[3]=="a" || age==21){
//     console.log("did u like me")
// }else{
//     console.log("u so sweet")
// }

// *****
// *********if else if********************
// let a=20;
// if(a==20){
//     console.log("a")
// }else if(a<20){
//     console.log("b")
// }else if(a>20){
//     console.log("c")
// }else{
//     console.log("invalid")
// }

// ************switch****************
// let day=2;
// switch(day){
//     case 1:
//         console.log("sunday")
//         break;
//         case 2:
//             console.log("monday")
//             break;
//             case 3:
//             console.log("monday")
//             break;
//             case 3:
//             console.log("monday")
//             break;
//             case 4:
//             console.log("monday")
//             break;
//             case 5:
//             console.log("monday")
//             break;
//             case 6:
//             console.log("monday")
//             break;
//             case 7:
//             console.log("monday")
//             break;
// }


// *****************8while loop88******************
// let i=0;
// while(i<=10){
//     console.log(i)
//     i++;
// }
// *****88888?************** for loop****************
// let i=0;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=10)

// in the foolowing condiotion do while loop run atleast one time because in this firsly print action perform then after if checks the condition

//  let i=11;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=10)


// *********************for loop*****************************

// let i;
// for(i=0;i<=10;i++){
//     console.log(i)
// }

// *********************break  and continue statement**********
// let i;
// for(i=0;i<=10;i++){
//     if(i==3){
//         break;
//     }
//     console.log(i)
// }
// console.log("outer part will exicute")

// let i;
// for(i=0;i<=10;i++){
//     if(i==3){
//         continue;
//     }
//     console.log(i)
// }
// console.log("it break only those part on which loop is attaches")
// console.log("outer part will exicute")


// *************************  array    ********************************************************************

// let array=["anukool","mukul","sachn","dikshant",12]
// let array=[1,2,3,4]
// console.log(array)
// console.log(array[1])
// console.log(array[3])

// changing Element of an aaray
// array[1]=1
// array[3]="undefined"
// console.log(array)

// checktype......
// console.log(typeof array[1])
// console.log(typeof array[4])

// check length
// console.log(array.length)

// last indexed*************
// console.log(array.length-1)

// check given array is an aray or not
// console.log(Array.isArray(array))

// push() and Pop()****************
// push is used to insert item from last n pop remove item from last but also return the popped item

// array.push("akshita")
// console.log(array)

// array.pop()
// console.log(array)

// returns popped item***
// poppedItem=array.pop()
// console.log(array)
// console.log("popped item is" +poppedItem)

// *************8shift and unshift()****
// shift()is used to remove element from first and also 

// array.shift()
// console.log(array)
// shiftedItem=array.shift()
// console.log(shiftedItem)

// unshift() is used to add item in array

// unshiftItem=array.unshift("akshita")
// console.log(array)

// ****primitive and referencetype**** ***
// in primitive if we change a item another item is not update

// let n1=7;
// let n2=n1;
// console.log(n1)
// console.log(n2)
// n1++;
// console.log("after increment")
// console.log(n1)
// console.log(n2)

// ******referencetype********

// let array1=[1,2,3,4,5]
// let array2=array1
// console.log(array1)
// console.log(array2)
// array1.push("anukool");
// console.log(array1)
// console.log(array2)

// ***how to clone an array**** three method is used for cloning means copy karna 
// let array1=["item1","item2"]
//  let array2=["item1","item2"]
// console.log(array1===array2)
// array1.push(array2)
// console.log(array1)
// console.log(array2)

// ****using slice()
// let array1=["item1","item2"]
// let array2=array1.slice(0)
// console.log(array1===array2)
// array1.push("item3")
// console.log(array1)
// console.log(array2)

// using concat()
// let array1=["item1","item2"]
// let array2=array1.concat()
// console.log(array1===array2)
// array1.push("item3")
// console.log(array1)
// console.log(array2)

// or mainmethod by concat 

// let array1=["item1","item2"]
// let array2=[].concat(array1)
// console.log(array1===array2)
// array1.push("item3")
// console.log(array1)
// console.log(array2)

// using spread operator*****
// let array1=["item1","item2"]
// let array2=[...array1]
// console.log(array1===array2)
// console.log(array1)
// console.log(array2)
// array1.push("item3")
// console.log(array1)
// console.log(array2)


// let array1=["item1","item2"]
// let array2=["item3","item4"]
// // let array3=[...array1, ...array2]
// let array3=[...array1, ...array2,3,4,66]
// console.log(array3)

// for of loop in array****it gives element 
// let array=["a","b","c"]
// for(arrays of array){
//     console.log(arrays)
// }

// ****for in loop***** it gives index
// let array=["a","b","c"]
// for(arrays in array){
//     console.log(arrays)
// }

// ********while loop in array******
//  let array=["anu","dikshant","mukul"]
// let i=0;
// while(i<=array.length){
//     console.log(i)
//     i++
// }

// let array=["anu","dikshant","mukul"]
// let i=0;
// while(i<=array.length){
//     console.log(array[i])
//     i++
// }

// ********* arraydestructuring********

// let array=["anukool","akku","sachin"]
// let arr1=array[0]
// let arr2=array[1]
// console.log(arr1)
// console.log(arr2)

// orrrrrrr

// let array=["anukool","akku","sachin"]
// let[arr1,arr2]=array
// console.log(arr1)
// console.log(arr2)


// *************************  object  ***************************************************

// object is referencetype.array is good but sufficient for real world data .it stores key value pairs and have no index
// how to create an Object
// const person={
//     name:"anukool",
//     course:"mca",
//     rollno:7,
// };
// console.log(person)
// console.log(person.name,person.course)
// console.log( typeof person.rollno)

// *****we can also use an aaray in Object*******

// const person={
//     name:"anukool",
//     course:"mca",
//     rollno:7,
//     hobbies:["cricket","singing",123]
// };
// console.log(person)
// console.log(person.hobbies)
// console.log(person["hobbies"])
// console.log(typeof person.hobbies)

// ****how to add key value pair in object*****
// const person={
//     name:"anukool",
//     course:"mca",
//     rollno:7,
// };
// console.log(person)
// person.hobby=["cricket","singing",123]
// console.log(person)

// orrr we can add item in object by bracket notation in palace of dot operator

// const person={
//     name:"anukool",
//     course:"mca",
//     rollno:7,
// };
// // console.log(person)
// person["hobby"]=["cricket","singing",123]
// person["gender"]="male"
// console.log(person)

// difference between dot and bracket notation *********
// we can not use course name without doble quotes because js not allow space in this case 
// we write it in double quotes

// const person={
//     name:"anukool",
//     "course name":"mca"
// }
// console.log(person)
// person.email="anukool@gmail.com"
// console.log(person)


// in the following case it take key not email property 
// const key="email";
// const person={
//     name:"anukool",
//     "course name":"mca"
// }
// console.log(person)
// person["key"]="anukoolrana211@gmail.com"
// console.log(person)

// to solve this we remove double quotes from key
// const key="email";
// const person={
//     name:"anukool",
//     "course name":"mca"
// }
// console.log(person)
// person[key]="anukoolrana211@gmail.com"
// console.log(person)

// how to iterate a object. it is used to stire the values of object in anoter variable

// const person={
//     name:"anukool",
//     course:"mca",
// };
// for(let persons in person){
    // console.log(persons)
    // console.log(person[persons])
    // console.log(`${persons}:${person[persons]}`)
    // console.log(`${persons} ${person[persons]}`)
    // console.log(`${persons}:${person[persons]}`)
// }
   
// *******computed properties******************

// const key1="mykey1"
// const key2="mykey2"
// const value1="myvalue1"
// const value2="myvalue2"
// const obj={
//     ["key1"]:value1,
//     ["key2"]:value2
// }
// console.log(obj)

// const key1="mykey1"
// const key2="mykey2"
// const value1="myvalue1"
// const value2="myvalue2"
// const obj={
//     [key1]:value1,
//     [key2]:value2
// }
// console.log(obj)


// ***********spread operator in object **************

// const person1={
//     name:"anukool",
//     course:"mca"
// };
// const person2={
//     name1:"lucky",
//     course1:"bca"
// };
// console.log(person1)
// console.log(person2)
// const combine={...person1,...person2}
// console.log(combine)

// in followin example it will always take the updated value means second operator value
// const person1={
//     name:"anukool",
//     course:"mca"
// };
// const person2={
//     name:"lucky",
//     course1:"bca"
// };
// console.log(person1)
// console.log(person2)
// const combine={...person1,...person2}
// console.log(combine)


// const person1={
//     name:"anukool",
//     course:"mca"
// };
// const person2={
//     name:"lucky",
//     course1:"bca"
// };
// console.log(person1)
// console.log(person2)
// const combine={...person2,...person1}
// console.log(combine)

// const person1={
//     name:"anukool",
//     course:"mca"
// };
// const person2={
//     name:"lucky",
//     course1:"bca"
// };
// console.log(person1)
// console.log(person2)
// const combine={..."item1,item2"}
// console.log(combine)


// const person1={
//     name:"anukool",
//     course:"mca"
// };
// const person2={
//     name:"lucky",
//     course1:"bca"
// };
// console.log(person1)
// console.log(person2)
// const combine={..."abcdegs"}
// console.log(combine)


// ***************object destructureing**********used to store the object item into new single variable
// simple way
// const person={
//     name:"anukool",
//     course:"mca",
// };
// name=person.name;
// course=person.course
// console.log(name,course)

// mordern method

// const person={
//     name:"anukool",
//     course:"mca",
// };
// const{name,course}=person
// console.log(name)
// console.log(course)


// const person={
//     name:"anukool",
//     course:"mca",
//     age:"21",
//     gender:"male"
// };
// const{name,course,...restprops}=person;
// console.log(name,course);
// console.log(restprops);


// ***********object inside array*******
//  const array=[
//     { name:'anukool',course:'mca'},
//     {name:'Sachin',course:'mca'},
//     {name:'mukul',course:'ielts'},
//  ]
// console.log(array)
// for(let arrays of array){
//     // console.log(arrays)
//     console.log(arrays.course)
// }


// *********************    function  ********************************************
// ****simple function******
// function anukool(){
//     console.log("this is my function")
// }
// anukool();
// anukool();
// anukool();

// function anukool(){
//     console.log(2+3)
// }
// anukool();

// function anukool(){
//     return "this is my first function"
// }
// const anu=anukool();
// console.log(anu)

// function anukool(){
//         return "this is my first function"
//     }
//     console.log(anukool());


// parameter pas krna or reusable function****
//  function anukool(number1,number2){
//        console.log(number1+number2)
//     }
//     anukool(2,4);
  

// function anukool(number1,number2){
//     return number1+number2;
//  }
//  console.log(anukool(2,4));

// function anukool(number1,number2){
//     return number1*number2;
//  }
//  console.log(anukool(2,4));

// ***isEven***
// function isEven(number){
//     if(number%2===0){
//         return true;
//     }else{
//         return false
//     }
// }
// console.log(isEven(1))


// input string nd show first character
// function anukool(string){
// return string[0]
// }
// console.log(anukool("dishu"))

// function
// input:Array,target(number)
// output:index of trget if target is present in array

// function anu(array,target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]==target){
//             return i;
//         }
//     }
//     return -1;
// }
// const array=[1,2,3,5,8,9]
// console.log(anu(array,9))


// const akshu=anu(array,9)
// console.log(akshu)

// *****variable function or expression function or animious function

// const anukool=function(){
//     console.log("hello world")
// }
// anukool()

// const anukool=function(){
//     console.log(4+6)
// }
// anukool()

// ***isEven***
// const  isEven=function(number){
//     if(number%2===0){
//         return true;
//     }else{
//         return false
//     }
// }
// console.log(isEven(1))


// input string nd show first character
// const anukool=function(string){
// return string[0]
// }
// console.log(anukool("dishu"))

// function
// input:Array,target(number)
// output:index of trget if target is present in array

// const anu=function(array,target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]==target){
//             return i;
//         }
//     }
//     return -1;
// }
// const array=[1,2,3,5,8,9]
// console.log(anu(array,9))


// const akshu=anu(array,9)
// console.log(akshu)


// *******arrow function******

// const anukool=()=>{
//     console.log("this is my first arrow function")
// }
// anukool();

// const anukool=(number1,number2)=>{
//     console.log(4+4)
// }
// anukool();


// const anukool=(n1,n2)=>{
//     return n1+n2;
// }
//  console.log(anukool(4,4));

// isEven******
// const anukool=(n)=>{
//  if(n%2===0){
//     return true;
//  }else{
//     return false
//  }
// }
// console.log(anukool(10));

// input string nd show first character
// const anukool=(anystring)=>{
//     return anystring[0];
// }
// console.log(anukool("deepak"))

// function
// input:Array,target(number)
// output:index of trget if target is present in array
 
// const anukool=(array,target)=>{
//     for(let i=0;i<=array.length;i++){
//         if(array[i]==target){
//             return i;
//         }
//     }
//         return -1
// }
// const array=[1,2,3,4,5]
// console.log(anukool(array,5))


// ******hoisting*******to call a function before its declaration is called hoisting.
// but it is only possible with simple function not variable function and arrow function

// anukool();
// function anukool(){
//   console.log("hoisting")  
// }

// *************function inside function*********
// const anukool=()=>{
//     const akshu=()=>{
//         console.log("function2")
//     }
//     const akshu2=()=>{
//         console.log("function3")
//     }
//     console.log("function1")
//     akshu();
//     akshu2();
// }
// anukool();


// ************lexical function********means first function check the variable in its local 
// scope and if it find it will print otherwise it check it in its global scope and print 
// so to find varibale in its globle scope then the global scope function is known lexical scope for this 
// variable function

// function anukool(){
//     const var1="value1";

//     function func1(){
//         console.log("my first func",var1)
//     }

//     function func2(){
//         const var1="value2"
//         console.log("mu second func",var1)
//     }
//     console.log(var1)
//     func1();
//     func2();
// }
// anukool();

// block and function scope
// let and const are block scope
// var is function scope

// {
// let firstName="anukool"
// console.log(firstName)
// }

// {
//     const firstName="anukool"
//     console.log(firstName)
//     }

// {
//     let firstName="anukool"
// }
// console.log(firstName)

// {
//     var firstName="anukool"
// }
// console.log(firstName)

// ********default parameter***********

// function anukool(a,b){
//     return a+b;
// }
// console.log(anukool(3))

// older way

// function anukool(a,b){
//     if(typeof b==="undefined"){
//         b=1;
//     }
//     return a+b;
// }
// console.log(anukool(3))

// function anukool(a,b){
//     if(typeof b==="undefined"){
//         b=1;
//     }
//     return a+b;
// }
// console.log(anukool(3,4))

// morder way

// function anukool(a,b=1){
//     return a+b;
// }
// console.log(anukool(3))

// ***********rest parameter*****if we wantbthat a and b values will be fix but all the
//  rest operator will be stored in c the we use rest operator before c like ...c

// let anukool=(a,b,...c)=>{
// console.log("the value of a",a)
// console.log("the value of b",b)
// console.log("the value of c",c)
// }
// anukool(2,3,4,5,6);

// another function

// function anukool(...numbers){
//     let total=0;
// for(let number of numbers){
// total=total+number;
// }
// return total;
// }
// console.log(anukool(2,3,4))

// ********param destructuring******uesd in react and object

// let person={
//     firstName:"anukool",
//     course:"mca",
// }
// function sahil(obj){
// console.log(obj.firstName);
// console.log(obj.course);
// }
// console.log(person)

// method2***********

// let person={
//     firstName:"anukool",
//     course:"mca",
// }
// function sahil(firstName,course){
// console.log(firstName);
// console.log(course);
// }
// console.log(person)


// ********map method**********************************

// let array=['anukool','dikshant','santi','rahul']
// let a=array.map((e,i,arr)=>{

//     return e;
// })
// console.log(a);

// let array=[1,2,3,4]
// let a=array.map((number)=>{
//     return number*2
// })
// console.log(a)


// ************ filter ********************

// let array=[1,3,4,2,6,7]
// let a=array.filter((number)=>{
//     return number%2==0;
// })
// console.log(a);


// ***************Reduce()*********************

// let array=[2,3,4,5]
// let a=array.reduce((accumlator,innitialvalue)=>{
//     return accumlator+innitialvalue;
// })
// console.log(a)


// working of Reduce()
// accumlator   innitialvalue   return
// 2                 3              5
// 5                    4              9
// 9                        5             14

// ***************foreach() *****************

// let array=[2,4,3]
// array.forEach((number)=>{
//     console.log(number*number)
// });

// ****************sort()************************
 
// ******it is used only for string element sorting******************

// let array=['a','d','c','b']
// array.sort();
// console.log(array)

// **************for Number'sorting********************
// ******for assending order*******************

// let array=[1,2,4,3,5,7,6]
// array.sort((s,f)=>s-f)
//     console.log(array)


// ******for decending order*************

// let array=[1,2,4,3,5,7,6]
// array.sort((s,f)=>f-s)
//     console.log(array)

// working of sorting*******
// s      f      s-f   
// 1        2        -1  negativevalue then we put a first and b second but if it will be possitive then we take b first and a second

// **************Find()*********used to find a item from array

// let array=["anukol","dikhant","mukul"]
// let a=array.find((string)=>string.length==7)
// console.log(a)

// let array=[
//     {userid:1,name:'anukool'},
//     {userid:2,name:'anu'},
//     {userid:3,name:'akshu'},
//     {userid:4,name:'mukul'},
// ]
// let a=array.find((string)=>string.name.length==3)
// console.log(a)

// ********every()***used to check that all the element satisfy the given condition or 

// let array=[2,4,6,8]
// let a=array.every((number)=>{
//      return number%2==0
//     })
// console.log(a)


// ********some()***used to check that any one  the element satisfy the given condition or

// let array=[2,4,6,10]
// let a=array.some((number)=>number%2!==0)
// console.log(a);

// ****fill() is used to fill or chane the elememnt of an array.in this first element shows
// the inserted elememnt and second element is the index of starting point and third one is 
// index of ending point

// const array=[1,2,3,4,5]
//  const a=array.fill(2,0,3);
//  console.log(a)

// ****** splice() is used to delete and insert an array elememnt.in it first element is
//  no. of deleted item,second i deletd and third is inserted item ******
// start,delete,insert

// delete

// let array=['anukool','mukul','sahil']
// array.splice(1,2)
// console.log(array)

// insert**
// let array=[1,2,3,4]
// array.splice(3,0,5)
// console.log(array)

// insert and delete****

// let array=[1,2,3,4]
// array.splice(1,2,5,6)
// console.log(array)

