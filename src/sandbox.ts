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
console.log(form.children);
