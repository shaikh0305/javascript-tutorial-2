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
// Checkage = ages.filter(age => age < 18)
// console.log(Checkage)



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

// const num = [1,2,3,4,5,6,7,8,9]
// const num1 = num.find(newArray)

// console.log(num1)

// function newArray (age) {
//     return age > 5
// }

// // // 12. findIndex Methods
// /*(Returns the index of the firstelement
// in an array that pass a test)*/

// const arr = ["Danny","Jon","Ruby","Many"];
// const indexfinder = arr.findIndex(arr => arr === "Danny")
// console.log(indexfinder)

// // // 13. indexOf Methods
// /*(Search the array for an element
// and returns its position)*/

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let index = fruits.indexOf("Apple");
// console.log(index)

// // 14. fill Methods
/*(Fill the elements in an array 
with a static value)*/

// const arr = new Array(3);
// console.log(arr)
// console.log(arr.fill(10));

/*Ex 2*/
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("kiwi");
// console.log(fruits)

// // 15. slice Methods
/*(Selects a part of an array, and 
returns the new array)*/

// const arr =  ["a","b","c","d","e"];
// const sliced = arr.slice(2,4)
// console.log(sliced)

/*Ex 2*/
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const fruits2 = fruits.slice(1,3)
// console.log(fruits2);

// // 16. reverse Methods
/*(	Reverses the order of the 
elements in an array)*/

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.reverse();
// console.log(fruits)

// /*Ex 2*/
// const num = [1,2,3,4,5,6,7,8,9];
// num.reverse();
// console.log(num);

// // 17. push Methods
/*(Adds new elements to the end of an
array, and returns the new length)*/

// const fruits = ["Banana", "Orange"];
// fruits.push("Apple","Mango");
// console.log(fruits)

// /*Ex 2*/
// const num = [1,2,3,4,5];
// num.push(6,7,8,9,10);
// console.log(num)

// // 18. pop Methods
/*(Removes the last element of an 
array, and returns that element)*/

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop()
// console.log(fruits)

// /*Ex 2*/

// const num = [1,2,3,4,5]
// num.pop()
// console.log(num)

// // 19. shift Methods
/*(Removes the first element of an 
array, and returns that element)*/

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits)

/*Ex 2*/

// const num = [1,2,3,4,5]
// num.shift()
// console.log(num)

// // 20. unshift Methods
/*(Adds new elements to the beginning of 
an array, and returns the new length)*/

const cars = [
  { brand: "audi", model: "A5", year: 2020 },
  { brand: "bmw", model: "X7", year: 2019 },
  { brand: "Alto", model: "800", year: 2020 },
  { brand: "Toyota", model: "Rav4", year: 2022 },
  { brand: "Mercedes", model: "E-Class", year: 2022 },
  { brand: "Kia", model: "Kia EV6", year: 2019 },
  { brand: "Nissan", model: "XL", year: 2020 },
  { brand: "honda", model: "City 4th generation", year: 2020 },
  { brand: "hyundai", model: "Alcazar", year: 2022 },
];

// const carsIn2020 = cars.filter((car) => car.year === 2020);
// const carsIn20201 = cars.filter((car) => car.year === 2019);
// const carsIn20202 = 
// console.log(carsIn2020,carsIn20201,carsIn20202)

useryear = prompt( )
const fn = (year) => {
    return cars.filter((car) => car.year === (useryear));
}
console.log(fn(2020))
