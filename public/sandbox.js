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
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// tuples
let student;
student = ["Matt", 6304];
console.log(student);
