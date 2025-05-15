// object,array,tuple,enum
console.log("### Objects - Arrays - Tuples - enum ###")

enum Role  {"ADMIN","MANAGER","REGISTERED_USER"}

const person : {
  // ends with ; 
  name : string;
  age:number;
  blockedUser : boolean;
  favSubjects : string[];
  purchasedGoods : any[];
  destination : {
    address : string;
    pincode:number;
  }
  wishList : [number , string]; 
  //tuple (position matters)
  role : Role;
} = {
// ends with ,
  name : "Adithya Naik",
  age:20,
  blockedUser : false,
  favSubjects : ["OS" , "DBMS" ,"CN"],
  purchasedGoods : [1,"Laptop User" , false],
  destination : {
    address : "Suryapet",
    pincode:508222,
  },
  wishList : [1 , "Trimmer"],
  //tuple (position matters)
  role:Role.REGISTERED_USER
  // when printed gives the index from the enum array
}


console.log(person)



// ## Interview Bit :
// diff b/w object and typescripts defination of types (ends  with , and ; respectively )


// instead of defining the objecttypes in {} we can have a thought of using the keyword object but..thta doesnt points to the real world object..we even dont know whats inside the object..wheatyer  empty or any other