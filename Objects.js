// let lecture = 10;
// let section = 3;
// let title = "javascript";

// const course = {
//     lecture: 10,
//     section: 3,
//     title: 'javascript',
//     notes: {
//         introduction: "Welcome to JS course"
//     },
//     enroll() {
//     console.log('you are successfully enrolled');

//     }
// }    

// Factory Function
function createCourse(title){
    return {
        title: title,
        notes: {
            introduction: "Welcome to JS course"
        },
        enroll() {
        console.log('you are successfully enrolled');
    
        }
    }
        
}

// const course = createcourse('javascript');

// course.enroll()
// console.log(course)
    
const newCourse = createCourse('javascript');

// Constructor Functoin

// function Course(title){
//     this.title = title,
//     this.enroll = function(){
//         console.log('you are successfully enrolled');
//     }
// }

// const course =new Course('javascript');
// delete course.title;
// course.checkEnrollment = function(){
//     console.log('30 users are enrolled');
// }
// course.enroll()

// console.log(course);


// const course = new Course('javascript');
// console.log(course.constructor)
// console.log(newCourse.constructor)



/* ------------- */   

// const Course_1 = new Function('title' , `
// this.title = title,
// this.enroll = function(){
//     console.log('you are successfully enrolled');
// }
// `)

// const course_2 = new Course_1('javascript');
// course_2.enroll();



/* ------------- */   

// // Primitive Datatype
// let number = 10;
// // Pass by Value
// let number_2 = number;
// number = 50;

// console.log(number);
// console.log(number_2);

// // Reference Datatype
// let obj = {number : 10};
// // Pass by Reference
// let obj2 = obj;

// obj.number = 5;

// console.log(obj);
// console.log(obj2);


/* ------------- */   

// const course = {
//     title: 'javascript',
//     enroll() {
//     console.log('you are successfully enrolled');
//     }
// }

// // spread operator
// const course_1 = {...course};
// course_1.title = "c++"
 
 

/* ------------- */

// const course = {
//     title: 'javascript',
//     enroll() {
//     console.log('you are successfully enrolled');
//     }
// }
// const course_1 = Object.assign({},course)
// course_1.title =  "C++"



/* ------------- */
// loops

const course = {
    title: 'javascript',
    enroll() {
    console.log('you are successfully enrolled');
    }
}

/* For in Loop */

// for(let key in course){
//     console.log(key, course[key]);
// }

/* For of Loop */
const course_1 = {};
for(let key of Object.keys(course)){
    course_1[key] = course [key]
}
course_1.title = "c++"
console.log(course,course_1)