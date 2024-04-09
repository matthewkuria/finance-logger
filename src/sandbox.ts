import { Invoice } from "./classes/Invoice.js"
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";

// Grab form tags and children
// const form = document.querySelector("form")!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


// List template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

// add an event listener
form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();

    // use a tuple to store the values from Invoice class
    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber];
    
    let doc : HasFormatter;
    if(type.value ==="invoice"){
        doc = new Invoice(...values);
    }
    else{
        doc = new Payment(...values);
    }
   list.render(doc, type.value, "end");
});


// // tuples
// let student: [string, number];
// student= ["Matt", 6304];
// console.log(student);