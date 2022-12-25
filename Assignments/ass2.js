/*1. In the following shopping cart add, remove, edit items const shoppingCart = ['Milk',
'Coffee', 'Tea', 'Honey']
a. add 'Meat' in the beginning of your shopping cart if it has not been already
added
b. add Sugar at the end of you shopping cart if it has not been already added
c. remove 'Honey' if you are allergic to honey
d. modify Tea to 'Green Tea'
*/

const shoppingCart=['Milk','Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
console.log(shoppingCart)
shoppingCart.push("sugar");
console.log(shoppingCart)
shoppingCart.splice(4,1);
console.log(shoppingCart)
let x=shoppingCart.indexOf('Tea')
shoppingCart[x]='Green Tea';
console.log(shoppingCart)

//2. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a
//CSS preprocess'. If it does not exist add Sass to the array and print the array.

const webTechs=["himanshu","kumar","jha","rahi","yaada"]
let k=webTechs.includes("Saas");
if(k==true)
console.log('Sass is a CSS preprocess');
else
{
    webTechs.push('Saas');
    console.log(webTechs)
}


/*3. The following is an array of 10 students ages:
 const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort())
console.log(ages);

let min=(x)=>                            //min age
{
   let minimum=x[0];
   for(i=1;i<=9;i++)
   {
      if(x[i]< minimum)
      minimum=x[i];
   }
   return minimum;
}
console.log(min(ages));

let max=(x)=>                             //max age
{
   let max=x[0];
   for(i=1;i<=9;i++)
   {
      if(x[i]>max)
      max=x[i];
   }
   return max;
}
console.log(max(ages));

let average=(y)=>                         //avg age
{
    let sum=0;
    for(i=0;i<=9;i++)
    {
        sum=sum+y[i];
    };
    let avg=sum/y.length;
    return avg;
}
console.log(average(ages))


let range=Math.max(...ages)-Math.min(...ages);     //range
console.log(range);    



/*Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node",
"Express", "MongoDB"] using a for loop or for of loop and print out the items.
*/

const array=["HTML", "CSS", "JS", "React", "Redux", "Node","Express", "MongoDB"]
for(let x of array)
{
    console.log(x);
}

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using
//loop without using a reverse method.

let arr=['banana', 'orange', 'mango', 'lemon'];
let l=arr.length-1;
for(i=0;i<=l/2;i++)
{
    let ch=arr[i];
    arr[i]=arr[l-i]; 
    arr[l-i]=ch;
}
console.log(arr);



//Develop a small script which generate any number of characters random id
const result = Math.random().toString(36).substring(2,7);
console.log(result);