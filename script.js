// age=12
// name="fiona"
// isEligibleote=false
// Name="kevin"

// console.log(name)
// console.log(Name)
// number 
// String:""
// Boolean
// null
// undefined
// Symbol
// BigInt

// non object
// const details={
//     name:"shama",
//     age:34,



// }
// details["age1"]="begum"
// details.name="welcome"
// console.log(details)




// age = 30;  
// firstnName="shama"
// console.log(typeof firstnName);



// // var name="shama"
// // var name="sham begum"
// // var name="begum"
// // console.log(name)

// // let name="shama"
// // let name="shama"
// // let name="shama"
// // console.log(name);

// // variables declared with let cannot be redeclared within the same scope, but their values can be reassigned
// let name="shama"
// console.log(name);

// name="begum"
// console.log(name);

// // redeclare or re assignment is not possible:we can write a const in capital letters.while declaring itself  we have to give value
// // const pi=3.14
// // let pi=23

// let x
// console.log(x)

// name="kevin"
// console.log(name)
// Name="kevin fiona"
// console.log(Name)
// $firstname="fiona"

// age=20

// // 3 types:var,let ,const
// var age=20
// let name1="shama"
// name1="kevin"
// name1=56
// let p;
// const pi=3.14
// // const pi=23
// let lastName="we"
// lastName=34
// lastName=true
// console.log(typeof lastName)
// const student={
//     name:"shama",
//     age:16,

// }
// student.age=32
// student.firstnName="begum"
// console.log(student)

// let a=2
// let b=4
// sum=a**b

// console.log(sum)
// // unary operator

// // a++ a+1
// // a-- a-1
// let c=6
// c=c+1
// console.log(c)

// Monday:7 am
// Tuesday:9 am
// WednesDay:11 am
// ThursDay:11 am
// Fridary:11am
// Saturday:8 am
// Sunday:10 am

// let day="Monday"

// switch (day) {
//     case "Monday":
//         console.log("7am");
//         break
//     case "Tuesday":
//         console.log("5am");    
//         break
//     case "Wednessday":
//         console.log("9am"); 
//         break   
//     default:
//         console.log("watch my recordings");
// }

// for(i=1;i<=5;i++){
//     console.log("shama")
// }
// let j=1
// while(j<=5){
//     console.log(j);
//     j++
// }
// let k=1
// do{
// console.log("shama");
// k++
// }while(k<=5)
// let guessNumber=34
// let userNumber=0
// while(guessNumber!=userNumber){
// userNumber=prompt("enter any number")
// }
// console.log("got the number")

// userNumber=prompt("enter any number")
// console.log(typeof userNumber);

// let day="day"

// switch(day){
//     case "Monday":
//         console.log("meeting at 11AM");
//         break
//     case "Tuesday":
//         console.log("meeting at 9am");
//          break   
//     case "Wednesday":
//         console.log("meeting at 8am");
//         break 

//         default:
//             console.log("wrong");

// }
// // 1 to 5
// let sum=0
// for(let i=1;i<=5;i++){
//  sum=sum+i


// }
// console.log(sum);

// // while
// let count=1
// while (count<=5){
//     console.log("guvi");
//     count++


// }
// let counter=1
// do{
//     console.log("guvi geeks");
//     counter++
// }while(counter<=5);

// for of:array ,string
// let arr=[1,2,3,4,5]
// for(num of arr){
//     console.log(num);

// }

// for in:object
// obj={
//     name:"guvi",
//     age:10
// }

// for(key in obj){
//     console.log(key,":",obj[key]);

// }

// practice question:
// 1.print all the even numbers from 0 to n
// for(i=)


//  Math methods:

// 1.Math.round(x):Rounds a number to the nearest integer.
// 2.Math.ceil(x):Rounds a number up to the nearest integer.
// 3.Math.floor(x):Rounds a number down to the nearest integer
// 4.Math.trunc(x):Truncates the decimal part, keeping only the integer part.
// 5.Math.pow(base, exponent):Calculates the power of a number.
// 6.Math.sqrt(x):Returns the square root of a number.
// 7.Math.cbrt(x):Returns the cube root of a number.
// 8.Math.abs(x):Returns the absolute value of a number.
// 9.Math.random():Generates a random number between 0 (inclusive) and 1 (exclusive).
// 10.Math.max(a, b, ..., n):Returns the largest of the given numbers.
// 11.Math.min(a, b, ..., n):Returns the smallest of the given numbers
// 12.Math.sign(x):Returns:
// 1 for positive numbers
// -1 for negative numbers
// 0 for 0


// Truthy and Falsy values :
// Falsy Values
// There are exactly 8 values in JavaScript that are falsy:

// false - The boolean false.
// 0 - The number zero (also -0).
// 0n - The BigInt zero.
// "" (empty string) - A string with no characters.
// null - Represents the absence of any value.
// undefined - A variable that has been declared but not assigned a value.
// NaN - Not a Number.
// document.all - A special case for historical reasons (acts like undefined but is falsy).

// Calculate the sum of all numbers in an array.
let arr = [1, 2, 4,3]
let r=arr.reduce((acc,curr)=>acc*curr)
console.log(r);

arr.reduce((acc,curr)=>{
    if(acc>curr){
        let lar=acc
    }
})

arr.forEach((val)=>{
    console.log(val);
    
})
let p=arr.filter((val)=>val%2===0).map((v)=>v*100)

console.log(p);

let month=["january","febury","march","april","may"]
let q=month.filter((v)=>v.length>4)
console.log(q.length);

const words = ['hello', 'world', 'javascript'];
let w=words.filter((w)=>w.includes("d"))
console.log(w);

const people = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 19 },
    { name: 'Dave', age: 15 }
];
let peo=people.filter((a)=>a.age>18).map((n)=>n.name)
console.log(peo);

// let sum=0
let max = 0
for (let ele of arr) {
    // sum=sum+ele
    // console.log(sum);
    if (max < ele) {
        max = ele
    }
    console.log(max);

}
console.log(max);
console.log(arr.reverse())

let sum = 0
for (let i = 1; i <= 5; i++) {
    sum = sum + i

}
console.log(sum);

count = 1
while (count <= 5) {
    console.log(count);
    count++

}
console.log(count);


function display() {
    console.log("shama");

}

display()
display()

function add(a, b) {
    let sum = a + b
    console.log(sum);

}
add(2, 3)

function sub(a, b) {
    let diff = b - a
    console.log(a);
    return diff
    console.log(a);

}
// console.log(a);
let result = sub(5, 1)
console.log(result);

// let arrow=()=>{
//     console.log("rifa");

// }
// arrow()

// let arrow=()=>console.log("rifa");

// arrow()

let arrow = () => "rifa"
console.log(arrow());


// for Each:

function abc() {
    console.log("hello");

}
function a(abc) {
    return abc;

}

a()

a = 10
b = 10
console.log(a === b);
c = {
    name: "shama",
    age: 23
}
d = {
    name: "shama",
    age: 23
}
console.log(c === d);

const obj = { name: "Alice", age: 25 };

// Modifying a property
obj.name = "Bob"; // Allowed
obj.age = 30;     // Allowed

// Adding a new property
obj.city = "New York"; // Allowed

//deleting 
delete obj.age

console.log(obj);
Object.seal(obj)  //we can modify the existing data.
obj.name = "shama"
console.log(obj);
obj.firstname = "bilal"
console.log(obj);

Object.freeze(obj)
obj.name = "bilal"
console.log(obj);

// in keyword:

console.log("name" in obj)
console.log("firstname" in obj)
let ab = [1, 2, 3, 4, 5]
console.log(3 in ab)

// multidimensional array:
let multi = [["x" , null , null], [null , null , 0], [0 , null , "x"]]
console.log(multi[0][0])

let a1 = 10; // Primitive type
let shallowCopy = a1; // Copy the value of 'a'
console.log(shallowCopy);

let deepCopy = a1; // Deep copy also just copies the value


// shallowCopy = 20; // Changing shallowCopy
// console.log(shallowCopy);
// console.log(a1); // 10 (original remains unchanged)

// deepCopy = 30; // Changing deepCopy
// console.log(a1); 

// // non pri:shallow copy
// let nonp=[1,2,3,4]
// let copy=nonp  //it copy the address not the value
// console.log(copy);
// console.log(nonp);
// copy.push(9)

// console.log(copy);
// console.log(nonp);

// user = { 
//     name: "Alice", 
//     age: 25,
//      details: { city: "Wonderland" } 
//     };
// console.log(user);
// let deepCopy3=JSON.parse(JSON.stringify(user))
// deepCopy3.name="shama"
// deepCopy3.details.city="queensland"
// console.log(deepCopy3);


// let deepCopy2={...user}
// console.log(deepCopy2);
// deepCopy2.name="shama"
// console.log(deepCopy2);

// deepCopy2.details.city="queensland"

// console.log(deepCopy2);
// console.log(user);

// function fun(){
//     console.log("shama");
//     return 1
// }
// result=fun()
// console.log(result);

// let array=[1,2,3,4,5]
// array.forEach((x)=>{
//     console.log(x);
    
// })


// function show() {
//     console.log("shama");
    
// }
// show()

//  add=(a,b)=> {
//    console.log();
//     a+b;
    
// }
// let r=add(2,3)
// console.log(r);

// // block scope
// // Perfect for Quick Tasks:
// const double = (x) => x * 2;
// console.log(double(5)); // Output: 10
// let ar=[1,2,3,4,5]
// ar.forEach((val,i,ar)=>{
// console.log(val*val,i,ar);

// })




// let a=ar.map(()=>{
// return val
// })

// console.log(a);
// let el=document.getElementById("hello").innerText
// console.log(el);
// document.getElementById("hello").innerText="shama"
// let ele=document.getElementById("hello").innerText
// console.log(ele);
// let element=document.getElementById("hello").innerHTML
// console.log(element);
// let e=document.querySelectorAll(".hello_1")
// console.log(e);

// console.log( document.querySelector("div").getAttribute("id"));
 
// console.log(document.querySelector("img").getAttribute("src"));
 

// let z=[1,2,3,4,5]
// z.forEach( (v,i,a)=> {
//     console.log(v,i ,a);
    
// })
// let ans=z.map((v)=>v*v
// )
// console.log(ans);
// z.filter((v)=>{
    
// })

// let day="Thu"
// switch(day){
//     case "Mon":
       
//         console.log("9am");
//         break;
//         case "Tue":
//             console.log("1pm");
//             case "sunday":
//                 console.log("3pm");
//                 default:
//                     console.log("sleep");
                    
                
        
// }
// const numbers = [1, 2, 3, 4, 5];
// const sum1 = numbers.reduce((total, num) =>{
// return total+num
// })
// console.log(sum1);

// const words1 = ["apple", "banana", "cherry", "date"];
// const longestWord = words1.reduce((longest, word) => word.length > longest.length ? word : longest, "");
// console.log("Longest Word:", longestWord); // Output: Longest Word: banana

// const numbers1 = [8, 3, 5, 1, 9];
// const smallest = numbers1.reduce((min, number) => (number < min ? number : min), numbers1[0]);
// console.log("Smallest Number:", smallest); // Output: Smallest Number: 1

// console.log(window.document.body);

// // document.body.style.backgroundColor="green"

// let box=document.getElementById("box")
// console.log(box);
// let para=document.getElementsByTagName("a")
// console.log(para);
// let box1=document.querySelector("#box")
// console.log(box1.innerText);

// let box2=document.querySelectorAll(".hello_1")
// console.log(box2[0].innerText);

// let box3=document.querySelector("#box")
// console.log(box3.innerHTML);
// let box4=document.querySelectorAll(".hello_1")
// console.log(box4[0].innerHTML)


// box.innerText="second"
// box.innerHTML="<i>second</i>"
// let hidd=document.querySelector("h1")
// console.log(hidd.textContent);
// // -------------------------------------------------------------------
// let di=document.querySelector("#box")
// console.log(di);

// let btn=document.createElement("button")
// btn.innerText="click me!"
// btn.style.backgroundColor="red"
// btn.style.color="white"
// let bo=document.querySelector("body")
// bo.before(btn)
// di.before(btn)
// // -----------------------------------
// // btn.addEventListener("click",()=>{
// //     console.log("welcome")
// //     let a=20
// //     console.log(++a);
    
// // })
// let color="white"
// let hello=()=>{
//     if(color=="white"){
// btn.style.backgroundColor="black"
// clolor="dark"
//     }else{
//         btn.style.backgroundColor="white"
//     }
// }
// let mode="white"
// btn.addEventListener("click",()=>{
//     if(mode=="white"){
//         mode="dark"
//  btn.style.backgroundColor="black"
//     }else{
//         mode="white"
//          btn.style.backgroundColor="white"
//     }
   

    
// })
// // btn.removeEventListener("click",hello)
// let divEl=document.querySelector("div")
// console.log(divEl.setAttribute("id","boxes"));


// var count=0
// btn.addEventListener("click",()=>{
//     count=count+1
//     console.log(count);
//     let paragraph=document.createElement("p")
//     paragraph.innerText=count
// btn.before(paragraph)

// })
// let n=[1,2,3,4,5,6]
// let re=n[Math.floor(Math.random()*10)]
// console.log(re);
// let qw=document.getElementById("add")
// console.log(qw);
// qw.addEventListener("click",()=>{
//     let colors=["red","green"]
//     let color=colors[Math.floor(Math.random()*10)]
//     document.body.style.backgroundColor=color
// })

let clock=document.getElementById("clock")
console.log(clock);

function clockDisplay(){
    let clock=document.getElementById("clock")
    
}


