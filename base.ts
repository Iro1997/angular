// function add(a:number,b:number, c:number):number{
//     return (a*b)+c
// }
//add(1,2,3)

//import { getImpliedNodeFormatForFile } from "typescript";

//2

// var myString : string ;
// var myNumber :number;
// var myBolean : boolean;

// myString = myNumber.toString();

// (myString =='Sam')? myBolean=true:myBolean=false
//  if (myBolean==true){
//         myNumber=1
//  }else{
//      myNumber=0
//  }

//3
// let array1: string[] = ['first','second','third']

// for (var val in array1){
//     console.log(val)
// }

//4
//  let Add =function (arg1:any , arg2:any){
//       if (typeof(arg1) && typeof(arg2)==='string'){
//           return arg1 + arg2

//       }else if (typeof(arg1) && typeof(arg2)==='number'){
//           return arg1 +arg2
//       }else{
//           return arg1+arg2
//       }


//  }

//5

// let ann = function(num1:number,num2:number){
//     return num1 + num2
// }

//6
// function concatString(a:string,b:string,c?:string):any{
//     if (c==undefined){
//         return a.concat(b.concat())
//     }else{
//         return a.concat(b.concat(c.toString()))
//     }
// }
// let add = concatString
//console.log(add('a','b'))

//7

// function testArguments(arg){

//     for(let i = 0;i<arg.length;i++){
//         console.log(`${i} ${arg[i]}`);
//     };
// }

// let arg = [7]
// testArguments(arg);

//8
// interface IOptionalProp {
//     id: number;
//     name?:string;
//     getId :()=> string
// }

// let idOnly : IOptionalProp = {
//     id:1,
//     getId :()=>{return 'Hello}}
    
    

}
//10
// class Animal{
//     constructor(name:string){
//       this.name=name;
//     }
    
//     get sayName(){
//         console.log("Name" +this.name)
//     }
// }
// class Dog extends Animal{
//     constructor(name:string,age:number){
//         super(name);
//         this.age=age;
//     } 
//     get sayName(){
//         console.log("Hello from child class")
//     }
    
// }
// var obj1=Animal("rocky")
// var obj2 = Dog("baki",1)
// console.log(obj1.getSayName())