// practice 1
let user = {};
console.log(user);
user.name = "John";
console.log(user);
user.surname = "Smith";
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name
console.log(user);



// practice 2
function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}
let test1 = {};
let test2 = {a : 1};
console.log(isEmpty(test1));
console.log(isEmpty(test2));

// practice 3
let salaries = {
    John : 100,
    Ann : 160,
    Pete : 130
}
let sum = 0;
for(let key in salaries){
    sum+=salaries[key];
}
console.log(sum);

function getTopEarner(obj) {
  let topName = "";
  let topSalary = 0;
  for (let key in obj) {
    if (obj[key] > topSalary) {
      topName = key;
      topSalary = obj[key];
    }
  }
  return topName;
}
console.log(getTopEarner(salaries));