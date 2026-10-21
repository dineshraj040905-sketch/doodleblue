

//All programs are are executed in Online Compiler


//Program 1

let number =[10,20,30,40]
let res = number.reduce((total,num)=>{
  return total+num;
},0);
console.log(res);



//Program 4

let number =[10,20,30,40,50]
let a= number.slice(1,3);
let b = number.splice(2,1);
console.log(a,b);


//Program 3

const student = {
name: "Priya",
address: {
city: "Chennai",
state: "Tamil Nadu"
}
};
console.log(student.name);
console.log(student.address.city);
console.log(student.address.state);


//Program 4

let number =[10,20,15,5]
let result = number.some((n)=>{
  return n>20
});
console.log(result);



//Program 5

const user = {
}; name: "Priya"
const {
name: studentName, city = "Chennai" } = user;
console.log(studentName); console.log(city);


//Program 6

