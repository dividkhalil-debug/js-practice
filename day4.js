let fruits = ["Apple" , "Orange" , "Plum"];
console.log(fruits.at(0));
console.log(fruits.at(-1));
console.log(fruits.length);
console.log("_________________________");
fruits.push("Banana");
console.log(fruits);
fruits.unshift("Mango");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
console.log("_________________________");
for(let fruit of fruits){
    console.log(fruit);
}
console.log("_________________________");
let a = ["x"];
let b = a;
b.push("y");
console.log(a.length);//2

console.log("--------------------------")

function sumArray(arr){
    let sum = 0 ;
    for(let index of arr){
        sum+=index;
    }
    return sum;
}
console.log(sumArray([1, 2, 3])); // 6
console.log(sumArray([]));        // 0