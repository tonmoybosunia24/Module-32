// Module Overview, Primitive and non-primitive data type


// Premetive
//  const a = 5;
//  const b = "Samsu Kompai na Akn Ar";
//  const c = true;
//  Non-Premetive
 const ages = [45, 65, 48];
 const student = {id: 23, class: 7}
//   console.log(typeof a, typeof b, typeof c, typeof ages, typeof student)
// let y = x;
// let x = 5;
// console.log(x, y)
// y = 7;
// console.log(x, y)
const p = {job: "web developer"}
let q = p;
q.job = "Front-End"
// console.log(p, q)



// Null Vs Undefined, different ways you will get undefined



/* 
8 Ways To get Undefine
1.Variable That is Not Intialized will give undefined
2.Function With No Return
3.peramiter that is not passed will be undefined
4.If Return Has Nothing on the right side will return undefined
5.property that doesnt exists on an object will give you undefined;
6.Accessing array elements outside of the index renge
7.deleting an element inside an array
8.set a value directly undefined
*/
// let first;
// function second(a,b){
//        const total = a + b;
// }
// const result = second()
function third(a,b,c,d){
       const result = a + b + c + d;
       console.log(a,b,c,d)
}
// third(2, 5)
// console.log(result)
function noNegative(a,b){
       if(a < 0 || b < 0){
              return
       }
       return a + b;
}
// const total =  noNegative(2,-5)
// console.log(total)
const fifth = {id: 2, name: "ponchom", age: 40};
// console.log(fifth.age, fifth,salary)
// const sixth = [4, 89, 56, 54]
// delete sixth[1]
// console.log(sixth[1], sixth[5])
const eighth = undefined;
// console.log(eighth)
const ninth = null;
const data = {result: [],  updated: null}
// console.log(typeof undefined)
// console.log(typeof null)



// Different Truthy and Falsy values in JavaScript




// const x = "0";
// let x;
// let x = null;
// console.log(x)
// if(x){
//        console.log("value of x is truthy")
// }
// else{
//        console.log("value of x is falsy")
// }
// optional
// check false
// const y = '';
// if (!y){
//        console.log("value is falsy")
// }
// check true
// const z = {class: 9}
// if(!!z){
//        console.log("value is truthy")
// }




// double equal (==) vs triple equal (===), implicit conversion



// const first = 2;
// const second = "2";
// if(first == second){ /* (===) ভেল্যুস এর টাইপ টাকেও চেক করবে কিন্তু (==) শুধু মান টাকে চেক করবে। */
//        console.log("values are equal")
// }
// else{
//        console.log("values are not equal")
// }



// Block scope global scope simple understanding of Hoisting



// function add(a,b){
//        const total = a + b;
//        // console.log(a, b)
//        if(b>5){
//               const sum = 25 + a + b;
//        }
//        else{
//               const sum = 5 + a + b;
//               var current = sum
//        }
//        console.log(current)
//        return total;
// }
// add(5,3)




// (advanced) Closure, encapsulation, private variable




// function kitchen(){
//        let roast = 0;
//        return function(){
//               roast++;
//               return  roast;
//        }
// }
// const firstserver = kitchen();
// console.log(firstserver())
// console.log(firstserver())
// console.log(firstserver())



// (optional) Callback function and pass different functions



// function greetings(greetingsHandeler, name){
//        greetingsHandeler(name);
// }
// const name = "halim mama"
// const numbers = [45, 33, 55,22];
// const laptop = {price: 4500, brand: "lenovo", memory: "8gb"}
// function greetingsHandeler(name){
//        console.log("good Morning", name)
// }
// function greetEvening(name){
//        console.log("good evening", name)
// }
// greetings(greetingsHandeler, "tom hangs")
// greetings(greetingsHandeler, "tom bredy")
// greetings(greetingsHandeler, "tom crus")
// greetings(greetEvening, "tom solayman") 
// function submitHandeler(){
//        console.log("Submit button clicked")
// }
// document.getElementById("btn-submit").addEventListener("click", submitHandeler)




// (advanced) function arguments pass by reference pass by value



function sum(a,b,c){ /* (a,b,c) এটাকে বলে প্যারামিটার। */
       // console.log(arguments[4]) /* (arguments) এটা হচ্ছে একটা এ্যারে লাইক অবজেক্ট।এটা সুধু ফানশন এই কাজ করবে। */
       const args = [...arguments] /* পুরোদমে এ্যারে বানানো। */
       // console.log(args)
       const result = a + b + c;
       return result;
}
const total = sum(45, 89, 12, 45, 22, 69); /* ((45, 89, 12, 45, 22, 69)) এটাকে বলে আরগুমেন্ট্রস */
// console.log(total)
// console.log(sum.length)

// Premitive Types are pass by value
let num1 = 5;
let num2 = 7;
function multiply(a, b){
       a = 27;
       const result = a * b;
       return result;
}
console.log(num1)
multiply(num1, num2)
console.log(num1)

// object and array are pass by refer
let student1 = {name: "jalil", partner: "borsa"}
let student2 = {name: "raj", partner: "anika"}
function makeMovie(couple1, couple2){
       couple1.name = "onoto"
       couple2.partner = "mim"
}
// console.log(student1, student2)
// makeMovie(student1, student2)
// console.log(student1,student2)