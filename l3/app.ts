console.log("Lecture 3");
// Union , literal types , type alias/ custom types

// 1.Union = |
// function combine(n1: number | string, n2: number | string) {
//   if (typeof n1 === "number" && typeof n2 === "number") {
//     return n1 + n2; // number + number
//   } else {
//     return n1.toString() + n2.toString(); // string concat
//   }
// }

// console.log(combine(24, 4));
// console.log(combine(24, "hi"));
// console.log(combine("24", 23));
// console.log(combine("24", "hi"));

// Even though you handled the type checks inside the function, TypeScript still sees n1 + n2 as potentially string | number + string | number — which it cannot confidently resolve outside the type guard.
// It wants you to be explicit about how to handle mixed types, because:
// number + number → number ✅
// string + string → string ✅
// number + string or string + number → coerces to string ✅ in JS, but TypeScript needs clarity.

// if bool then true =1 ,false=0

// 2.literal types

function combine(
  n1: number | string,
  n2: number | string,
  conversionType: "as-number" | "as-string"
) {
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    conversionType === "as-number"
  ) {
    return +n1 + +n2; // number + number
  } else {
    return n1.toString() + n2.toString(); // string concat
  }
}

console.log(combine(24, 4, "as-number"));
console.log(combine(24, "hi", "as-number"));
console.log(combine("24", 23, "as-string"));
console.log(combine("24", "hi", "as-string"));
 

// Literal types allow you to define a variable that can only have one of a set of specific values (strings, numbers, or booleans).

// type UserRole = "admin" | "user" | "guest";

// let role: UserRole = "admin";  // ✅ OK
// role = "moderator";            // ❌ Error






// 3.custom types/alias types



// custom type named person
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

const p1: Person = {
  name: "Ravi",
  age: 22,
  isStudent: true,
};

console.log(p1.name); // Output: Ravi



// alias type
type ID = number | string;

let userId: ID;

userId = 101;      // ✅ OK
userId = "user01"; // ✅ OK
userId = true;     // ❌ Error
