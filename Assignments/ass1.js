//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign
//value to it and use the typeof operator to check different data types.
 
let firstName='himanshu';
let lastName="jha";
let country='india';
let age=21;
const isMarried='no';
console.log(typeof(age))
console.log(typeof(lastName));


//2. Boolean value is either true or false.
//a. Write three JavaScript statements which provide truthy value.
//b. Write three JavaScript statements which provide falsy value.

let x=10
if(x>0)
console.log("hello")

if(x==10)
console.log("Hii")

if(true)
console.log('jha')

if(x<0)
console.log('falsy value')

if(x!=10)
console.log('falsy value');

//Figure out the result of the following expressions first without using console.log().
//After you decide the result confirm it by using console.log()


console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 < 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 > 3 && 10 < 12))
console.log( !(4 === '4'))


//4.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a
//number is even or not using JavaScript?

if(x%2==0)
console.log("even")
else
console.log('odd')
//5. Write a code which can give grades to students according to theirs scores:
//a. 80-100, A
/*b. 70-89, B
Untitled 2
c. 60-69, C
d. 50-59, D
e. 0-49, F*/

let scores=80;
if(scores<=100 && scores>=80)
console.log('grade A');
else if(scores>=70 && scores<=89)
console.log('grade-B');
else if(scores>=60 && scores<=69)
console.log('grade-c');
else if(scores>=50 && scores<=59)
console.log('grade-D');
else
console.log("grade-F");


//6. Write a program which tells the number of days in a month.
let y=new Date(2022,8,0);
console.log(y.getDate());

//8. Suppose 1 dollar is equal to 82.23 Indian rupee, create a program which converts
//dollars to rupees.
function dollar(val)
{
    return val*82.23;
}
console.log("Indian rupees is "+dollar(89));

//9. Write a program to print unit digit of a given number.
let Input = 6693
console.log(Input%10)



/*10. Write a program to find the area of the circle. Take radius of circle from user as input
and print the result in below given format.
Expected output format – “Area of circle is A having the radius R”. Replace A with area
& R with radius
*/
let r=5;
let Area=(r)=>
{
    return Math.PI*r*r;
}
console.log(`Area of circle is ${Area(r)} having the radius ${r}`);

