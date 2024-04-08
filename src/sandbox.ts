import { Invoice } from "./classes/Invoice.js"
const characters = "Matt";
console.log(characters);

const circ = (diameter: number) =>{
    return diameter * Math.PI;
}
console.log(circ(14));
// Arrays and objects

let names = ["matt", "Sabrina", "Elysia"];
 names.push("Jetra");

 console.log(names);

//   let mixed = ["Kenya", 254, "Uganda",255];
//   mixed.push("Tanzania", 256);
//   console.log(mixed);


//   Objects
let ninja = {
    name: "Matt",
    belt : "Black",
    age : 30,
}
ninja.age = 34;
console.log(ninja);

const obj = {width: 10 , height: 23};
const area = obj.height * obj.width;
console.log(area)

// any type
let age : any;
age = 25;
age = "hello"
age={
    name:"Matt",
    home:254,
}
let mixed : any[] = [];
mixed.push("brocolli","peas", "beans")
console.log(mixed)
mixed.pop();
console.log(mixed)

// Functions in TS
const sum = (a: number, b:number, c?:number | string) =>{
    console.log(a+b)
}
sum(6,7);
// Add alias

type UserID = number;

function getUserID(id: UserID){
    console.log("Getting User ID:", id);
}
getUserID(123);

// add and a DOM
const anchor = document.querySelector('a')!; //Add an exclamation mark at the end of the sentence

// if(anchor){
//     console.log(anchor.href);
// }
console.log(anchor.href);

// Grab form tags and children
// const form = document.querySelector("form")!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
// add an event listener
form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber

    )
})
console.log(form.childNodes);

// create an instance of class that is an object
const invOne = new Invoice("Sabrina","Building a website", 20000);
const invTwo = new Invoice("Elysia","Building a website", 94000);
console.log(invOne, invTwo);
let invoices : Invoice[] =[];
invoices.push(invOne);
invoices.push(invTwo);
 
console.log(invoices);
invoices.forEach(inv =>{
    console.log(inv.client, inv.details, inv.amount);
})

