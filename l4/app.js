console.log("Hi");
// Function return type
function sum(a, b) {
    return a + b;
}
function greet(name) {
    console.log("Hi ".concat(name));
}
console.log(sum(34, 56));
// if nothing returns then write void
// aliasing the fucntions 
var myFunction;
myFunction = sum;
// myFunction = greet; invalid
greet("Adi");
console.log(myFunction(45, 343));
// fucntion type & callbacks
function greetUser(name, callback) {
    var greeting = "Hello, ".concat(name, "!");
    callback(greeting); // calling the callback
}
function printMessage(message) {
    console.log("Message from callback:", message);
}
// calling greetUser and passing printMessage as a callback
greetUser("Adithya", printMessage);
// inline callback
greetUser("Adithya", function (msg) {
    console.log("Inline callback says:", msg);
});
