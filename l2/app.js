// object,array,tuple,enum
console.log("### Objects - Arrays - Tuples - enum ###");
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["MANAGER"] = 1] = "MANAGER";
    Role[Role["REGISTERED_USER"] = 2] = "REGISTERED_USER";
})(Role || (Role = {}));
var person = {
    // ends with ,
    name: "Adithya Naik",
    age: 20,
    blockedUser: false,
    favSubjects: ["OS", "DBMS", "CN"],
    purchasedGoods: [1, "Laptop User", false],
    destination: {
        address: "Suryapet",
        pincode: 508222,
    },
    wishList: [1, "Trimmer"],
    //tuple (position matters)
    role: Role.REGISTERED_USER
    // when printed gives the index from the enum array
};
console.log(person);
// ## Interview Bit :
// diff b/w object and typescripts defination of types (ends  with , and ; respectively )
