/* Arithmetic Operators */

// var a = 20;
// var b = 10;
// var c = a+b;
// document.write(c)


/* Relational or Comparison Operator */

// var a = 20;
// var b = 10;
// var c = a>b;
// document.write(c)


/* Logical Operators */
/* Logical And */

// var a = 20>10;
// var b = 10<20;
// var c = a && b;
// document.write(c)


/* Logical OR*/

// var a = 20<10;
// var b = 10>20;
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
