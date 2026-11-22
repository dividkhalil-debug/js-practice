// التمرين 1
function sum(a , b){
    return a + b;
}
console.log(sum(3 , 4))

// التمرين 2
function checkAge(age){
    return (age >= 18 ) ? true : false
}
console.log(checkAge(18))
console.log(checkAge(15))

// التمرين 3
function greet(name , greeting = "Hello"){
    return `${greeting} ${name}`;
}
console.log(greet("David"));
console.log(greet("David" , "Hi"));

// التمرين 5

let userName = "John";
function show() {
  let userName = "Bob";
  console.log(userName); 
}
show();//Bob
console.log(userName);//John


// التمرين 6
function isEven(number){
    return (number % 2 == 0 )
}

for(let i = 1 ; i<=10 ; i++){
    if(isEven(i)){
        console.log(i);
    }
}