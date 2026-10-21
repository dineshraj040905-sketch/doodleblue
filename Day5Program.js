

//Program to demonstrate function hoisting in JavaScript

greet();
function greet(){
  console.log("Print");
};


//Program to demonstrate closure in JavaScript


funtion account(){
  let Balance=1000;
  function deposit(amount){
    balance=balance+amount
    console.log("BalanceAmount"+balance);
  }
  return deposit;
}
const 
MyAccount=Account();
MyAccount(500);
MyAccount(700);