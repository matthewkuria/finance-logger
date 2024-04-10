import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
// Grab form tags and children
// const form = document.querySelector("form")!;
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// add an event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // use a tuple to store the values from Invoice class
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
// // tuples
// let student: [string, number];
// student= ["Matt", 6304];
// console.log(student);
// let user :{
//     name: string,
//     age: number,
//     location: string,
// };
//  user ={
//     name: "Matt",
//     age: 34,
//     location:""
// };
// user.location = "nakuru";
// console.log(user);
// Function to greet
function greetPerson(person, date) {
    console.log(`Hey ${person}  today is ${date.toDateString()}`);
}
greetPerson("Matt", new Date());
let names = [];
names.push("Matt", "sabrina", "Terry");
console.log(names);
let toUpperCase = names.forEach((s) => {
    console.log(s.slice(0, 1).toLocaleUpperCase() + s.slice(1));
});
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId(1234);
printId("Jom0ki1");
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return "".repeat(padding) + input;
    }
    else {
        return padding + input;
    }
}
function getUsersOnline(numberOfUsers) {
    if (numberOfUsers) {
        console.log(`There are ${numberOfUsers}users online at the moment`);
    }
    else {
        console.log("Cannot tell the number of users online");
    }
}
getUsersOnline(NaN);
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
