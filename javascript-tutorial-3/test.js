// let lincence = prompt();
// let toNum = parseInt(lincence);
// console.log(toNum < 18);
// console.log(toNum === 18);
// console.log(toNum > 18)

// // if( toNum < 18 ){
// //     document.write("You age not a eligible driving lincence",toNum)
// // } else if (toNum === 18 ) {
// //     document.write("You age eligible driving lincence", toNum);
// // } else {
// //     document.write("enjoy you driving", toNum);   
// // }


// counter word and string cunter with displaying live with ui 

// let str = 'nikunj italiya jgjhg';

  
// let str = 'nikunj italiya jgjhg';
// console.log("Word count:", numberOfWords(str));

// textarea 


// let totalStrLength = "aksdl;kasd asdlaksd asldkajsdlkjksdjflsdjkfl idflafa"

// kajsdajsd DKjad aksdjf aksjd aksdjh 



// Output=[1, 5, 5, 1, 5, 1, 5, 4, 5],        

// let num = [1, 5, 1, 5, 1, 5, 4, 5, 5]; 

// let lastElemnt = num.pop();

// num.splice(2 , 0, lastElemnt)

// console.log(num);


/* JavaScript Array Methodes */
// // 1. Map Methods
/*(Creates a new array with the result of 
calling a function for each array element)*/


// const number = [10,20,30,40];
// const newNumber = number.map(myFunction);
// console.log(newNumber)

// function myFunction(num){
//     return num * 10;
// }


// // 2. filter Methods
/*(Creates a new array with every element in an 
array that pass a test)*/

// const ages = [10,15,30,20,18,25]
// const result = ages.filter(Checkage);

// console.log(result)

// function Checkage(age){
//     return age < 18;
// }


// // 3. sort Methods
/*(Sorts the elements of an array)*/

// const fruits = [2,3,1,6,5,8,4,9,7];
// const fruits2 = fruits.sort();
// console.log(fruits2)


// // 4. forEach Methods
/*(Calls a function for each array element)*/

// const arr = [1,2,3,4,5,6,]

// arr.forEach((arr)=> console.log(arr));


// // 5. concat Methods
/*(Joins arrays and returns an 
array with the joined arrays)*/

// const arr1 = ['a','b','c']; 
// const arr2 = ['d','e','f'];

// console.log(arr1.concat(arr2));
// console.log(arr1);
// console.log(arr2)


// // 6. every Methods
/*(Checks if every element in 
an array pass a test)*/

// const ages = [32,33,16,40];

// console.log(ages.every(Chechage))

// function Chechage(age){
//   return age > 18
// }


// // 7. some Methods
/*(Checks if any of the elements 
in an array pass a test)*/

// const num = [3,10,18,20];

// console.log(num.some(Checknum))

// function Checknum(numbesr){
//   return numbesr > 20 ;
// }


// // 8. includes Methods
/*(Check if an array contains 
the specified element)*/

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("Orange"));


// // 9. join Methods
/*(Joins all elements of an array into a string)*/

// const fruits = ["A","P","P","L","E"];
// console.log(fruits.join(""));


// // 10. reduce Methods
/*(Reduce the values of an array to 
a single value (going left-to-right))*/

// const array1 = [20,20,20,20];

// const num = array1.reduce((total,sum)=>total+sum)
// console.log(num)


// // 11. find Methods
/*(Returns the value of the first element 
in an array that pass a test)*/

const num = [1,2,3,4,5,6,7,8,9]
const num1 = num.find(newArray)

console.log(num1)

function newArray (age) {
    return age > 5
}



// const Name1 = "Hello World";

// function reverse1(str){
//     let r = "";
//     for(let i = str.length-1; i >= 0; i--){
//       r += str[i];
//     }
//     return r;
//   }

//   let newValue = reverse1.
//   console.log(reverse1("Hello World"))

 