// const a = 5;
// const b = "samsu kopai na akn ar";
// const c = true;
// const ages = [55, 45, 69, 22, 36];
// const student = {id: 23, class: 7};
// console.log(typeof a, typeof b, typeof c, Array.isArray(ages), typeof student)
// let x = 5;
// let y = x;
// console.log(x,y)
// y = 7;
// console.log(x,y)
// const p = {job: "web development"}
// let q = p;
// console.log(p,q)
// q.job = "Front End development"
// console.log(p,q)

// let first;
// console.log(first)
// function second(a,b){
//        const total = a + b;
// }
// const result = second()
// console.log(result)
// function third(a,b,c,d){
//        const result = a + b + c + d;
//        console.log(a,b,c,d)
// }
// const pera = third(2, 5)
// console.log(pera)
// function noNegative(a,b){
//        if(a < 0 || b < 0){
//               return
//        }
//        return a + b;
// }
// const total = noNegative(2,-2);
// console.log(total)
// const fifth = {id: 2, name: "ponchom", age: 40}
// console.log(fifth.age,fifth.salary)
// const sixth = [4, 5,69, 33, 25];
// delete sixth[1]
// console.log(sixth[1], sixth[5])
// const eighth = undefined;
// console.log(eighth)
// const data = {result: [], updated: null}
// console.log(typeof undefined)
// console.log(typeof null)

// const x = "true";
// let x;
// let x = null;
// console.log(x)
// if(x){
//        console.log("value of x is truthy")
// }
// else{
//        console.log("value of x is falsy")
// }
// check false
// const y = "";
// if(!y){
//        console.log("value is falsy")
// }
// // check truthy
// const z = {class: 9}
// if(!!z){
//        console.log("value is truthy")
// }

// const first = 2;
// const second = "2"
// if(first === second){
//        console.log("values are equal")
// }
// else{
//        console.log("values are not equal")
// }

// function add(a,b){
//        const total = a + b;
//        console.log(a,b);
//        if(b>5){
//               const sum = 25 + a + b;
//               console.log(sum)
//        }
//        else{
//               const sum = 5 + a + b;
//               console.log(sum)
//        }
// }
// add(5,3)


// function kitchen(){
//        let roast = 0;
//        return function(){
//               roast++;
//               return  roast;
//        }
// }
// const firstserver = kitchen();

// function greetings(greetingsHandeler, name){
//        greetingsHandeler(name)
// }
// function greetingsHandeler(name){
//        console.log("good Morning", name)
// }
// greetings(greetingsHandeler, "tom hangs")
// greetings(greetingsHandeler, "tom bready")
// greetings(greetingsHandeler, "tom crus")
// function submitHandeler(){
//        console.log("Submit-Button-Clicked")
// }
// document.getElementById("btn-submit").addEventListener("click", submitHandeler)

// function sum(a,b,c){
//        const args = [... arguments]
//        console.log(args)
//        const result = a + b + c;
//        return result;
// }
// const total = sum(2, 4, 6, 4, 8, 9)
// console.log(total)
// console.log(sum.length)
// let num1 = 5;
// let num2 = 7;
// function multiply(a,b){
//        a = 27
//        const result = a * b;
//        return result
// }
// console.log(num1)
// multiply(num1,num2);
// console.log(num1)
// let student1 = {name: "jalil", partner: "borsa"}
// let student2 = {name: "raj", partner: "anika"}
// function makeMovie(couple1, couple2){
//        couple1.name = "onoto"
// }
// console.log(student1)
// makeMovie(student1,student2)
// console.log(student1)