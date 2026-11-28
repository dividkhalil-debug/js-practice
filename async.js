
// 1.
let promise = new Promise((resolve , reject)=>{
    setTimeout(() => {
        resolve("Done");
    }, 1000);
})
promise.then(result=>console.log(result));
console.log("2:_______________________________________");
// 2.
function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve,ms);
    });
}

wait(1000).then(() => console.log("1 second passed"));
console.log("3:_______________________________________");
// 3.
let promise2 = new Promise((resolve , reject)=>{
    reject(new Error("Something went wrong"))
})
promise2.catch((error)=>console.log(error.message))
console.log("4:_______________________________________");
// 4
function checkAge(age){
    return new Promise((resolve , reject)=>{
        if(age>=18)
            resolve("Allowed");
        else
            reject("Not allowed");
    })
}
checkAge(20)
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("done"));
checkAge(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("done"));

// 5.
// i expect : A C B
console.log("A");
wait(0).then(() => console.log("B"));
console.log("C");