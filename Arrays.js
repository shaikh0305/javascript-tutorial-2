const num = new Array (1,2,3,4,5,6,7,8,9);

// Push
// num.push(10)

// Unshift
// num.unshift(0)

// Pop
// num.pop()

// Shaift
// num.shift()

// Change elements
// num[0] = 22


const names = ['Apple','Redmi','Dell','Xiaomi','Huawei','Redmi'];

/* indexof */
// names.indexOf('Redmi')
const names1 = names.indexOf('Redmi')

/* lastIndexOf */
// names.lastIndexOf('Apple')
const names2 =  names.lastIndexOf('Xiaomi')

// includes
// names.includes('Apple')
const names3 = names.includes('Huawei')

// console.log(names3) 



let names01 = ['Apple','Redmi','Dell']
let names02 = ['Xiaomi','Huawei','Redmi']
// Concat
let names03 = names01.concat(names02)
// Slick
let names04 = names03.slice()

// console.log(names04) 

// For Loop
for(let i = 0;i<names.length;i++){
    // console.log(names[i],i)
}

// For of Loop
for(let name of names){
    // console.log(name)
}                       

// For-Each
names.forEach(function(name,index){
    // console.log(name,index)
})

// Join
let student = ['S','h','a','i','k','h']
// console.log(student.join('_'))

// Split
let student1 = ['How are you doing today']
// console.log(student1.splice(''))

