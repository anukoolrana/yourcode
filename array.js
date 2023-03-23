
//    for(let i=0;i<array.length;i++){
    //     if(i%2==1){
        //         console.log(array[i])
        //     }
        
        //    }
        
        
        
        // let array=["anukool","vani","pankaj","rohit","sachin","yuvraj","ankesh"];
        //    array.push("ram");
        // array.pop();
        // array.unshift("ram")
        // array.shift();
        // array.splice(2,2,"ram","shyam","sita")
        // let a=array.slice(2,5)
// let a=array.includes("ankesh");
// let a=array.indexOf("ankesh");
// let arr=[12,443,222,222];
// let a=[...array,...arr];
// let a=arr.concat(array)
//    console.log(a)

// ***************************************** Splice() ********************************************

//     array.splice(2,2)
// console.log(array)
// (here first 2 indicate index No. and second 2 two specify how many no is deleted from mid)


// **************************************** Slice() ****************************************************


// **********************spride**************************************************

// let array =["annu","sachin","dikshant","mukul"]
//  let arr=[123,234,567,789]
//  let a =[...array,...arr]
// console.log(a)


// let array =["annu","sachin","dikshant","mukul","ankesh","mukesh"];
// let a=array.copyWithin(0,1,6);
// array.findIndex((e,i,arr)=>{
//     if(e=="ankesh"){
//         console.log(i)
//     }
// })
// console.log(a)

// array.forEach((e,i,arr)=>{
//     console.log(e,i,arr)
// })

// for(e of array){
//     console.log(e)
// }


// for(i in array){
// console.log(i)
// }

// let a=array.map((e,i,arr)=>{
// return arr;
// })
// console.log(a)


// let a=array.map((a,b,arr)=>arr);
// console.log(a)

// let a=array.filter((e,i,arr)=>i%2==1);
// console.log(a)
// let arr=[3,21,4,2,1,34,2];

// let a=arr.sort((s,f)=>f-s)
// console.log(a)

// let a=array.sort();
// console.log(a)

// let arr=[3,21,4,2,1,34,2];
// let a=arr.reduce((f,s,i,arr)=>{
//     return f-s;
// },500)
// console.log(a)


// *************copywithin()********************

// let array=["annu","mukul","dikshant","sachin","mukku"]
// let a=array.copyWithin(1,3,4)
// console.log(a)
// (here first no indicates the target no i.e.where element will copy second element spcify ihe index no. of copied element and last one is copies last element+1)

// ******************findIndex()*****************

// let array=["annu","mukul","dikshant","sachin","mukku"]
// array.findIndex((e,i,arr)=>{
// console.log(e)
// })

// let array=["annu","mukul","dikshant","sachin","mukku"]
// array.findIndex((e,i,arr)=>{
// console.log(arr)
// })

// let array=["annu","mukul","dikshant","sachin","mukku"]
// array.findIndex((e,i,arr)=>{
// console.log(e,i,arr)
// })


// ******************forEach()****************************
// it shows all the element ,index and array at a time

// let array=["annu","mukul","dikshant","sachin","mukku"]
// array.forEach((e,i,arr)=>{
//     console.log(e,i,arr)
    
// })

// let array=["annu","mukul","dikshant","sachin","mukku"]
// array.forEach((e,i,arr)=>{
//     console.log(e)
//     })

// let array=["annu","mukul","dikshant","sachin","mukku"]
// array.forEach((e,i,arr)=>{
//     console.log(i)
    
// })

// let array=["annu","mukul","dikshant","sachin","mukku"]
// array.forEach((e,i,arr)=>{
//     console.log(arr)
    
// })

// ********************************** forof loop in array********(it shows elements of array )
// let array=["annu","mukul","dikshant","sachin","mukku"]
// for(e of array){
//     console.log(e)
// }

// ********************************** forin loop in array********(it shows index  of array )

// let array=["annu","mukul","dikshant","sachin","mukku"]
// for(i in array){
//     console.log(i)
// }


// **************************** map() *****************
// (it shows all the element ,index and array in a array body) ************

// let array=["annu","mukul","dikshant","sachin","mukku"]
// let a=array.map((e,i,arr)=>{
//     return e;
//     })
//     console.log(a)

// or
// let array=["annu","mukul","dikshant","sachin","mukku"]
// let a=array.map((e,i,arr)=>arr);console.log(a)

// or
// let array=["annu","mukul","dikshant","sachin","mukku"]
// let array1=array.map((num,index)=>{
//     return index;
// })
// console.log(array1)

// ********************* Filter() ********************** it is used to find an elememt from an array ***************
// let number=[1,3,4,5,7,9];
//  let evennumbers=number.filter((num)=>{
//     return num%2==0
// });
// console.log(evennumbers)


// ************************ sort() ***********************

// it will give array elements in assending order ***********************
// let array=[1,4,6,8,3,4,2,21,19]
// let a=array.sort((s,f)=>s-f);
// console.log(a)


// it will give array elements in descending order ***********************
// let array=[1,4,6,8,3,4,2,21,19]
// let a=array.sort((s,f)=>f-s);
// console.log(a)

// (it is simple sorting for strings)

// let array=["annu","mukul","dikshant","sachin","mukku"]
// let a=array.sort();
// console.log(a)

// ***************************reduce() ***********************

// let array=[1,5,4,9,10,6]
// let a=array.reduce((f,s,i,arr)=>{
//         return f-s;
// },300);
// console.log(a)


// let list={
//    name:"ankesh",
//    age:27,
//    mob:089765432,
//    email:"ankesh@gmail.com",

// }

// console.log(list);
// console.log(list.name,list.age,list.email)

