let users = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 },
];
let numbers = [5, 2, 1, -10, 8];

let names = []
names = users.map((user)=>user.name);
console.log(names);
console.log("-----------------")
console.log(users.filter(user => user.age>26));
console.log("*********************")
let result = users.find(user => user.name=="Pete");
console.log(result);
console.log("_________________________");
users.sort((a,b)=>(b.age - a.age));
console.log(users.map(user=>user.name));
let totalAge = users.reduce((sum , user)=>(sum+=user.age),0)
console.log(totalAge);
console.log(Math.round(totalAge/users.length));
console.log("===============================");

let output = numbers.sort((a,b)=>(b-a));
console.log(output);

console.log(numbers.includes(2));