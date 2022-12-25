//1. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
sum1=0;
for(i=0;i<=100;i++)
{
    sum1=sum1+i;
}
console.log(sum1)

//. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop
//without using a reverse method.

let arr=['banana', 'orange', 'mango', 'lemon'];
let l=arr.length-1;
for(i=0;i<=l/2;i++)
{
    let ch=arr[i];
    arr[i]=arr[l-i]; 
    arr[l-i]=ch;
}
console.log(arr);


//. Declare a function name capitalizeArray. It takes array as a parameter and it returns
//the - capitalizedarray

let capitalizeArray=([...x])=>
{
    return x;
}
console.log(capitalizeArray([1,2,3,4,5]))

/*. Write a function called sumOfArrayItems, it takes an array parameter and return the
sum of all the items. Check if all the array items are number types. If not give return
reasonable feedback.*/

arr2=[10,20,30,8.9,76];
let sum2=0;
let sumOfArrayItems=function(x)
{
    for(i=0;i<x.length;i++)
    {
        sum2=sum2+x[i];
    }
    return sum2;
}
console.log(sumOfArrayItems(arr2));



let check=(arr2)=>{                    // function to check data type of array items;
for(i=0;i<arr2.length;i++)            
{
    if((typeof(arr2[i])!='number'))
    return false;
}
return true
}
console.log(check(arr2));    //true=data type is number
                             //false==data type is not number




/*Write a function called modifyArray takes array as parameter and modifies the fifth
item of the array and return the array. If the array length is less than five it return 'item
not found'.*/
y=[10,20,8.76,'himanshu','jha',true]
 
let modifyArray=(y)=>
{
   if(y.length<5)
   return 'item not found';
   else
   y[4]='pawan_singh';
   return y;
}

console.log(modifyArray(y));


//Develop a small script which generate any number of characters random id
const result = Math.random().toString(36).substring(2,7);
console.log(result);


/*10. JavaScript variable name does not support special characters or symbols except $
or _. Write a function isValidVariable which check if a variable is valid or invalid variable.*/

function isValidVariable(name) 
{
    try
     {
       Function('var ' + name);
    } 
    catch (e) 
    {
       return false;
    }
    return true;
 }
 console.log(isValidVariable('1x'));