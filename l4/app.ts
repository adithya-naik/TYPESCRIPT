// Functions, return types and callbacks


console.log("Hi");

function sum(a: number, b: number) : number {
  return a + b;
}
function greet(name : string) : void {
  console.log(`Hi ${name}`)
}

console.log(sum(34,56))

// if nothing returns then write void



// aliasing the fucntions 

let myFunction:  (x :number, y:number) => number;

myFunction = sum;
// myFunction = greet; invalid
greet("Adi")

console.log(myFunction(45,343))



// fucntion type & callbacks

function greetUser(name: string, callback: (msg: string) => void) {
  const greeting = `Hello, ${name}!`;
  callback(greeting);  // calling the callback
}

function printMessage(message: string) {
  console.log("Message from callback:", message);
}

// calling greetUser and passing printMessage as a callback
greetUser("Adithya", printMessage);


// inline callback
greetUser("Adithya", (msg) => {
  console.log("Inline callback says:", msg);
});
