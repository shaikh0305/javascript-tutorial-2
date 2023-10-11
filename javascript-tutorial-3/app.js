//  Primitives and Objects 
// Primitives datatypes 
/* => 1.Null
      2.Number
      3.Symbol
      4.String
      5.Boolean
      6.Bigint
      7.Undefined
*/
// // nn bb ss u
// let a = null;
// let b = 200;
// let c = true; // can also be false
// let d = BigInt("300")+BigInt("10")
// let e = "string";
// let f = Symbol("i am a nice symbol");
// let g = undefined
// console.log(a,b,c,d,e,f,g);
// console.log(typeof b);

// // Non Primitives Data Type - Objects in Js
// const item = {
//     "Ramesh": true,
//     "Sahil": false,
//     "Rohan": 90,
//     "Punit": undefined
// }
// console.log(item["Ramesh"])


/* Introduction to Strings */ 
// let name = "jon"
// console.log(name[0])

// let friend = 'Ramesh'
// console.log(friend)

// // Template literals
// let boy1 = "Nilesh"
// let boy2 = "Prakash"
// let sentence = `${boy2} is a friend of ${boy1}`
// console.log(sentence);

// // Escape Sequence Characters
// let fruit = 'App\'le'
// console.log(fruit)

// String Methods
// let name = "Apple"
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.slice(2,4))
// console.log(name.slice(2))
// console.log(name.replace("Ap","Gl"))


/* Introduction to Arrays */
let a = marks_class_12 = [69,85,75,65,false,"Not Present"];
console.log(marks_class_12)
marks_class_12[6] = 55 // Adding a new value to the array
marks_class_12[0] = 70 // Changing the value of an array 
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])      
console.log(marks_class_12[5])
console.log(marks_class_12[6])
console.log(marks_class_12.length)  
console.log(typeof marks_class_12)

let num =[1,2,3,4,5,6,7,8,9];

console.log(num)
console.log(num.toString())
console.log(num.length)
console.log(typeof num)





// /*Object*/
// let car = {
//     name : 'BMW X3',
//     topSpeed : 120,
//     run: function (){
//         console.log("car is running");
//     }
// }
// console.log(car);



/* Prototype */

// let a =  {
//     name2: "Jon",
//     language: "JavaScript",
//     run: () => {
//         alert("self run")
//     }
// }
// console.log(a);


// let p = {
//     run: () => {
//         alert("run")
//     }
// }

// p.__proto__ = {
//     name: "Doe"
// }

// a.__proto__ = p
// a.run()
// console.log(a.name)