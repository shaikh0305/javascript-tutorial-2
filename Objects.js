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

function Course(title){
    this.title = title,
    this.enroll = function(){
        console.log('you are successfully enrolled');
    }
}

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

const course = 'jdjhd'