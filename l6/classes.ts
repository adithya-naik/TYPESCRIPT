// // Classes
// console.log("Classes hai bhai");

// // In JS
// // class Dep {
// //   depName = "IT";
// //   displayName() {
// //     console.log(this.depName);
// //   }
// // }
// // const a = new Dep();
// // a.displayName();

// // In TS

// class Dep {
//   depName: string;
//   constructor(n: string) {
//     this.depName = n;
//   }
//   describeDep(this:Dep) {
//     console.log(`Iam belonging to ${this.depName} Department `);
//   }
// }

// const test = new Dep("Computer Science");
// test.describeDep();

// //obj copy  demostration
// const testCopy  = {
//   depName:"testCopyName",
//   describe  : test.describeDep
// }
// testCopy.describe()
// // console.log(testCopy);




// // Access Modifier (Private,Public)

// // In TypeScript, access modifiers are used to control the visibility and accessibility of class members (properties and methods). They help implement encapsulation, which is a key concept in object-oriented programming.

// // There are 3 main access modifiers in TypeScript:

// // 1. public (default)
// // Accessible from anywhere (inside class, outside class, subclasses).
// // If no modifier is specified, it's public by default.

// // code : 
// class Person {
//   public name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   public greet() {
//     console.log(`Hello, I'm ${this.name}`);
//   }
// }

// const p = new Person("Adithya Naik");
// console.log(p.name); // ✅ Accessible
// p.greet();           // ✅ Accessible


// // 2. private
// // Accessible only inside the class.
// // Not accessible from outside the class or in subclasses.
// // code: 

// class BankAccount {
//   private balance: number = 1000;

//   private showBalance() {
//     console.log(`Balance: ${this.balance}`);
//   }

//   public accessBalance() {
//     this.showBalance(); // ✅ Allowed (internal call)
//   }
// }

// const acc = new BankAccount();
// acc.accessBalance();   // ✅ Works
// // acc.balance;        // ❌ Error: 'balance' is private
// // acc.showBalance();  // ❌ Error: 'showBalance' is private



// // 3. protected
// // Accessible inside the class and its subclasses, but not outside the class.

// // code :

// class Animal {
//   protected species: string;

//   constructor(species: string) {
//     this.species = species;
//   }
// }

// class Dog extends Animal {
//   public bark() {
//     console.log(`I'm a ${this.species}`); // ✅ Allowed in subclass
//   }
// }

// const d = new Dog("Labrador");
// d.bark();           // ✅
// // d.species;       // ❌ Error: 'species' is protected



// // Bonus: readonly (Not an access modifier, but important)
// // Makes a property read-only after initialization (inside constructor).
// // Can be combined with access modifiers.

// // code:

// class Book {
//   public readonly title: string;

//   constructor(title: string) {
//     this.title = title;
//   }
// }

// const b = new Book("TypeScript Guide");
// // b.title = "Another Book"; // ❌ Error: Cannot assign to 'title'



// ✅ Summary Table

// Modifier 	Class  	Subclass	OutsideClass
// public	     ✅	       ✅	      ✅
// protected	 ✅	       ✅	      ❌
// private	   ✅	       ❌	      ❌













// Inheritatnce


// 🧠 What is Inheritance?
// Inheritance is a concept where one class (child/subclass) gets properties and methods from another class (parent/superclass).
// This helps in reusing code and creating hierarchies of classes.

// ✅ Basic Syntax in TypeScript

// class Parent {
//   greet() {
//     console.log("Hello from Parent");
//   }
// }

// class Child extends Parent {
//   sayHi() {
//     console.log("Hi from Child");
//   }
// }

// const c = new Child();
// c.greet();  // ✅ Inherited from Parent
// c.sayHi();  // ✅ Own method


// Child extends Parent → means Child inherits from Parent.

// c.greet() → works because Child gets everything Parent has.

// 🏗 Constructor Inheritance
// You can also inherit the constructor using super() to call the parent class's constructor.

// class Person {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   describe() {
//     console.log(`I am ${this.name}`);
//   }
// }

// class Student extends Person {
//   rollNo: number;

//   constructor(name: string, rollNo: number) {
//     super(name); // Call parent constructor
//     this.rollNo = rollNo;
//   }

//   showRoll() {
//     console.log(`My roll number is ${this.rollNo} and name is ${this.name}`);
//   }
// }

// const s = new Student("Adithya Naik", 345356);
// s.describe();   // From Person
// s.showRoll();   // From Student


// 🧱 Access Modifiers with Inheritance
// Modifier	 inside class   	 in subclass    outside
// public	      ✅	              ✅	          ✅
// protected   	✅	              ✅         	❌
// private	    ✅	              ❌         	❌

// Example:

// class Animal {
//   protected sound: string = "Some sound";

//   makeSound() {
//     console.log(this.sound);
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log(`Dog barks: ${this.sound}`); // ✅ allowed due to protected
//   }
// }



// ⚡ Method Overriding
// You can override a parent method in the child class.

// class Parent {
//   greet() {
//     console.log("Hello from Parent");
//   }
// }

// class Child extends Parent {
//   greet() {
//     console.log("Hello from Child");
//   }
// }

// const c = new Child();
// c.greet(); // "Hello from Child"





// getter and setter methods 
// In TypeScript, getter and setter methods allow you to control access to the properties of a class. They provide a way to define computed properties or perform logic during property access or assignment.

// ✅ Syntax

// class Person {
//   private _name: string;

//   constructor(name: string) {
//     this._name = name;
//   }

//   // Getter
//   get name(): string {
//     return this._name;
//   }

//   // Setter
//   set name(newName: string) {
//     if (newName.length < 2) {
//       throw new Error("Name must be at least 2 characters long.");
//     }
//     this._name = newName;
//   }
// }

// const person = new Person("Ram");

// console.log(person.name); // uses getter => "Ram"

// person.name = "Shyam";    // uses setter
// console.log(person.name); // "Shyam"

// person.name = "A"; // ❌ Will throw an error due to validation
// 🔍 Notes
// The backing field (_name) is typically marked private.
// get allows access like a property, not like a method call.
// set allows setting like a property, not like a function.

// 🛠 Use Case Example

// class Rectangle {
//   constructor(private _width: number, private _height: number) {}

//   get area(): number {
//     return this._width * this._height;
//   }

//   set width(value: number) {
//     if (value > 0) {
//       this._width = value;
//     }
//   }

//   set height(value: number) {
//     if (value > 0) {
//       this._height = value;
//     }
//   }
// }

// const rect = new Rectangle(10, 5);
// console.log(rect.area); // 50

// rect.width = 20;
// rect.height = 10;
// console.log(rect.area); // 200








// static method
// -without creating object we can access
// In TypeScript, a static method is one that belongs to the class itself rather than to instances of the class. This means you can call the method on the class without creating an object of the class.

// Syntax:

// class MyClass {
//   static greet(name: string): string {
//     return `Hello, ${name}!`;
//   }
// }

// Call without creating an instance
// console.log(MyClass.greet("Sarvesh")); // Output: Hello, Sarvesh!
// Key Points:
// static methods can't access non-static properties or methods directly.

// You can use this inside static methods, but it refers to the class itself










// abstract classes

// In TypeScript, abstract classes are base classes that cannot be instantiated directly. They are used as a blueprint for other classes and often contain:

// 1.abstract methods (methods with no implementation — must be implemented by subclasses)
// 2.Normal (concrete) methods
// 3.Properties

// 📌 Syntax:

abstract class Animal {
  abstract makeSound(): void; // Abstract method

  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.makeSound(); // Output: Woof!
dog.move();      // Output: Moving...

// ❌ const animal = new Animal(); // Error: Cannot create an instance of an abstract class

// ✅ Key Points:
// You cannot create an object from an abstract class.
// Subclasses must implement all abstract methods.
// Abstract classes can contain both abstract and non-abstract members.
// Useful for enforcing a common structure across derived classes.

