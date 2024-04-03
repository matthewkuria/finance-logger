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