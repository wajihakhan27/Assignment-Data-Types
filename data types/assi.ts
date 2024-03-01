// DATA TYPES
  // "STRING":String is used to represent a sequence of characters ,or any value that can store in double quot" " that is called string.
//Example#1
let brandname:string= "Iconic"
console.log(brandname);
//Example#2
let autor:string="Nelson Mandela was said"
let motivaltioanlqutate=`"Education is the most powerful weapon which you can use to change the world."`
console.log(autor+motivaltioanlqutate);

//NUMBER: "Number can represent both Integer as well as Floating-Point numbers"
//Example#1
let a:number=27
let b:number= 2
console.log(a+b);
console.log(a*b);
console.log(a===b);
console.log(a**b);
//Example#2
let x:number=12.10
let y=2.5
console.log(x%b);
console.log(y-x);
console.log(x==y);
console.log(y*x);

//BOOLEAN:"Boolean can represent only two value that is 'True or False'"
//Example#1
let right:boolean=true
console.log(right);
//Example#2
let wrong=false
wrong=true;
wrong=false;
console.log(right,wrong);

//NULL:"Null represents the intentional absence of any object value"
//Example#1
let war=null
console.log(war);
//Example#2
let abc:null=null
console.log(abc);

//UNDEFINE:"Undefined mean the values have not been defined yet"
//Example#1
let fullname:undefined=undefined
console.log(fullname);
//Example#2
let full;
let half;
console.log(full,half);

//SYMBOLE:"Symbol can represent unique identification of any value"
let mySymbol = Symbol();
console.log(mySymbol);
let seatnmber = Symbol(1728)
console.log(seatnmber);
//BIGINT:"BigInt is a special numeric type that provides support for integers of arbitrary length and bigint is created by appending n to the end of an integer literal"
//Example#1
let bignmber:bigint=1627879382080038n
console.log(bignmber);
//Example#2
let Notmeasured:bigint=1125n
console.log(Notmeasured);