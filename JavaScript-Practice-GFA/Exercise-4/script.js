console.log("Practice")

let bookCount = 20;
for (let i = 0; i <= bookCount; i+=2) {
 console.log(i);  }


 console.log("Exercise 1 Functions")


let printNumbersTill = (AAA) =>{
    for (let i = 1; i <= AAA; i++) {
        console.log(i);        
    }}

console.log(printNumbersTill(15))

console.log("Exercise 2 Functions")

let getGreetingTo = (A) => {
    return 'Hello ' + A + '!'; };

console.log(getGreetingTo('Mark'));


console.log("Exercise 3 Functions-Loops-Arrays")

let array = [0,3,6,7,9,];

let printValues = (array) => {
    for (let i = 0; i < array.length; i++) 
    { console.log(array[i]); } };
  
console.log(printValues([0,3,6,7,9]));


console.log("Exercise 4 ForEach")

array.forEach((number) => {
    console.log(number);});