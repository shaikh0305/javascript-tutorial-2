
/* Variable */

/* (1) variable declared with "var" in Javascript are Function Scoped . 
   (2) variable declared with "let" & "const" are Block Scoped . 
*/
 

// var name = "safwan";
// name = "Shaikh"
// console.log(name); 



// let name = "safwan";
// name = "Shaikh"
// console.log(name); 



// const name = "safwan";
// name = "Shaikh"
// console.log(name); 



// function modjs(Dell){
//     if(Dell){
//         let name = "Safwan";
//         const Sname = "shaikh"
//         console.log("my name is " + " "+ name + " "+ Sname);
//     }
// }
// modjs(true) 



// function modjs(Dell){
//     if(Dell){
//         var name = "Safwan";
//         var Sname = "shaikh"
//         console.log("my name is " + " "+ name + " "+ Sname);
//     }
// }
// modjs(true)




// var names  = "safwan";

// if(true){
//    var names  = "shaikh";
//    console.log(names); 

// } 
// console.log(names);



// let names  = "safwan";

// if(true){
//    let names  = "shaikh";
//    console.log(names); 

// } 
// console.log(names);


   
// const car = {type:"Fiat", model:"500", color:"white"};

// car.color = "red";

// car.owner = "Johnson";

// console.log("car color is" + " "  +car.color)


// const arr1 = [ 10,20,30,40];
// arr1.push(50,60,70);
// console.log(arr1);


// const phone = "REDMI"
// console.log(phone)


// var city = "surat";
// // console.log(city)

// if(true){
//    let city = "Mumbai"
//    city = "Valsad"
//    console.log(city);
// }
// console.log(city);




/* Arithmetic Operators */

// var a = 20;
// var b = 10;
// var c = a+b;
// document.write(c)


// // var name = "safvan"
// // name = "safwan"
// // console.log(name);

// function fn(){
//     let surname = "shaikh"
//     console.log("surname", surname);
//     console.log("name", name);
// }
// fn()
 

// const name = " shaikh"
// console.log(name);

// function fn(){
//    let surname = "shaikh"
//    console.log("surname", surname);

// }
// fn()


// var Name = "safwan"
// Name = "shaikh"
// console.log(Name);

// function name(){
//     let surname = "Shaikh"
//     console.log(surname)
// }




/* Relational or Comparison Operator */

// var a = 20;
// var b = 10;
// var c = a>b;
// document.write(c)


/* Logical Operators */
/* Logical And */

// var a = 20>10;
// var b = 10>20;
// var c = a && b;
// document.write(a,b,c)


/* Logical OR*/

// var a = 20<10;
// var b = 10<20;
// var c = a || b;
// document.write(c)

/* Logical Not */

// var a = 20>10;
// var c = !a;
// document.write(c)


/* Bitwise Operators */
/* Bitwise Logical AND & */

// var a = 5 ;
// var b = 6 ;
// var c = a & b;
// document.write(c);


/* Bitwise Logical OR | */

// var a = 5 ;
// var b = 6 ;
// var c = a | b;
// document.write(c);


/* Assignment Operators */

// var a = 100;
// var b = a + 20;
// document.write(b)


/*-----------------*/


/* Prompt Method  */

// var a = prompt ("Enter Your Name :")
// document.write(a);



/* If Statement */

// var a = 10;
// var b = 20;
// if ((a == 10) && (b == 20))
// document.write("Rahul")

/* Ex: 2 */

// var a = prompt("Enter Your Roll : ");
// if((a == 10))
// document.write("Name : Rahul");



/* if else statement */

// var a = 10;
// if(a ==10)
// document.write("Name : Rahul");
// else
// document.write("Wrong Value");

/* Ex: 2 */

// var a = prompt("Enter Your Roll : ");
// if((a == 10))
// document.write("Name : Rahul");
// else
// document.write("Wrong Value");




/* Else If Statement */

// var result = 17;
// if(result <= 30)
// document.write("Fail");
// else if (result <= 40)
// document.write("Pass");
// else if (result <= 60)
// document.write("Good");
// else
// document.write("Very Good");


/* Ex: 2 */

// var result = prompt();
// if(result <= 30)
// document.write("Fail");
// else if (result <= 40)
// document.write("Pass");
// else if (result <= 60)
// document.write("Good");
// else
// document.write("Very Good");




/* Switch Statement */

// var Day = 1;
// switch(Day){
//     case 1 :
//     document.write("Sun");
//     break;
//     case 2 :
//     document.write("Mon");
//     break;
//     case 3 :
//     document.write("Tue");
//     break;
//     case 4 :
//     document.write("Wed");
//     break;
//     case 5 :
//     document.write("Thu");
//     break;
//     default:
//     document.write("Wrong")
// }


/* Ex: 2 */

// var Day = prompt();
// switch(Day){
//     case "Mon" :
//     document.write("Working Day");
//     break;
//     case "Sat" :
//     case "Sun" :
//     document.write("Holiday");
//     break;
//     default:
//     document.write("Wrong")
// }




/* For Loop */

// for(i=0; i<5; i++)
// {
//     document.write(i + "<br>");
// }
// document.write( "<br>" + "Rest of the Code");


/* Ex: 2 */

// var i = 0;
// for( ; i<5 ; i++)
// {
//     document.write(i + "<br>");
// }
// document.write( "<br>" + "Rest of the Code");



/* Nested for Loop */

// for(i=0; i<3; i++)
// {
//     document.write("<strong>Outer Loop</strong> " + i + "<br>");
//     for(j=0; j<5; j++)
//     {
//         document.write("Inner Loop " + j + "<br>");
//     }
// }



// /* While Loop  (control structure) */

// var i= 0;
// while(i<5)
// {
//     document.write(i);
//     i++;
//     document.write("<br>");
// }


/* Ex: 2 */

// var i = 0;
// while(true)
// {
//     if(i==3)
//     {
//         break;
//     }
//     document.write(i);
//     i++;
//     document.write("<br>");
// }



/* Nested While Loop */

// var i = 0;
// while(i<3)
// {
//     document.write("<strong>Outer Loop</strong> ");
//     document.write(i);
//     i++;
//     document.write("<br>");


//     var j = 0;
//     while(j<5)
//     {
//         document.write("Inner Loop ");
//         document.write(j);
//         j++;
//         document.write("<br>");

//     }
// }


/* Do While Loop (control statement) */

// var i = 0 ;
// do
// {
//     document.write(i);
//     i++
//     document.write("<br>");
// }while(i<5)



/* Nested Do While Loop */

// var i = 0;
// do
// {
//     document.write("<strong>Outer Loop</strong> ");
//     document.write(i);
//     i++;
//     document.write("<br>");

//     var j = 0;
//     do
//     {
//         document.write("Inner Loop");
//         document.write(j);
//         j++;
//         document.write( "<br>");

//     }while(j<5);
// }while(i<3);



/*Break Statement*/

// for(i=1; i<10; i++)
// {
//     if(i==8)
//     {
//         break;   // Stop Loop
//     }
//     document.write(i);
//     document.write("<br>");
// }



/* Continue Statement */

// for(i=1; i<10; i++)
// {
//     if(i==6)
//     {
//         continue;   // Skip Loop
//     }
//     document.write(i);
//     document.write("<br>");
// }



/* Create and Call Function */

// function display()
// {
//     document.write("Create and Call Function" + "<br>");
// }
// display();



/* Function with Parameter */

// function display(Name , Name2)
// {
//     document.write(Name+ " To " + Name2);
// }
// display("Welcome" , "Ghanshyam Digital")



/* Function Argument */

// function add(a,b,c)
// {
//     document.write(" A: "+ a + " B: "+ b + " C: "+ c);
// }
// add(10,20,30)



/* Default Parameter */

// function Add(a , b, c = 70)
// {
//     document.write("A = " + a + "<br>");
//     document.write("B = " + b + "<br>");
//     document.write("C = " + c + "<br>");
// }
// Add(10, 20 )


/* Ex 2 */

// function Add(a , b, c = null)
// {
//     document.write("A = " + a + "<br>");
//     document.write("B = " + b + "<br>");
//     document.write("C = " + c + "<br>");
// }
// Add(10, 20)


/* Ex 3 */

// function Add(num , a=[101,100])
// {
//     document.write("A = "  + a[0] + "<br>");
//     document.write("A = "  + a[1] + "<br>");
//     document.write("Num = "  + num + "<br>");

// }
// Add(100 ,[10,40])



/* Rest Parameter */

// function num(a , ...args)
// {
//     document.write(a + "<br>");
//     document.write(args[2]);
// }
// num(10,20,30,40,50,60)



/* Return Statement */

// function Add(a,b){
//     return(a+b);
// }
// document.write(Add(10,20));




/* Variable Scope */
/* Global Scope */

// var i = "I am Global Variable";

// function Show(){
//     document.write(i + "<br>");
// }
// Show();

// /* -- */
// document.write(i + "<br>");

// /* -- */
// function Add(){
//     document.write(i + "<br>");
// }
// Add();

// /* -- */
// if(true){
//     document.write(i + "<br>");
// }



/*Local Scope*/

// function Show(){
//     var j = "I am Local Variable"
//     document.write(j + "<br>");
// }
// Show();

// /* -- */
// document.write(j + "<br>");

// /* -- */
// function Add(){
//   document.write(j + "<br>");
// }
// Add();

// /* -- */
// if(true){
//     document.write(j + "<br>");
// }

/* Ex 2 */

// function Show(){
//     var i = "I Local Vairable "
//     document.write(i + "<br>");

//     function Add(){
//         var k = "K Local Vairable";
//         document.write(k + "<br>");
//         document.write(i + "<br>");
//     }
//     Add();
// }
// Show();



/* Variable Hoisting */

// var a = 10;
// document.write(a + " " + b + "<br>");
// var b = 20;
// document.write(a + " " + b)


// var name = "Shaikh";
// console.log(name);

// let name = "Shaikh";
// console.log(name);

// const name = "safwan";
// console.log(name); 


const hello = ()=>{
   console.log("Hello I am Fine");
}
hello()


function oneplusavg(x,y){
   return 1 + (x+y)
}


let a = 1;
let b = 2;
let c = 3;


console.log("plus in number" +" "+ oneplusavg(a,b));
console.log("plus in number" +" "+ oneplusavg(b,c));
console.log("plus in number" +" "+ oneplusavg(a,c));

