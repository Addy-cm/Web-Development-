//                                                1.   // What is let and var ??

// console.log("hi");

// let x=10.888;
// x='c';
// console.log(x);
// console.log(typeof x);

// var y=20;
// var z=20;
// console.log("Sum of",y,z,"is",y+z);


//                                                  2.   // Difference between var and let
// {
//     let x1=3;
//     var x2=3;
    
// }
// // console.log(x1);   // It doesnot run as let is in block and can't be used outside of it.
// console.log(x2);      // It run as var is in block and can be used outside of it also.


//                                                     3.    // What is variable hosting

// myname="abc";
// var myname;
// console.log(myname)   //  In js if var is initialize after initialize value it take up before value initialoizing its called variable hosting

// myname1="abc";
// let myname1;
// console.log(myname1)  //  In js if let is initialize after initialize value it does't take up before value initialoizing so give error


//                                                        4.   // What is const?

// const x="a";
// x="d";  // Can't initialize as it is const


//                                                           5.      //Difference between '=='  '===' ?

// let x=5;
// let y="5";
// console.log(x==y);  // It check value only
// console.log(x===y); // It check value and type both

//                                                            6.     // let read from "left to right" so once string come after that all consider as string
// let x=12+5+"india";     // First sum calculate and then string
// let y="india"+12+5;     // First string print and after that all consider as string
// console.log(x);
// console.log(y);

//                                                             7.    // Its range is large so to print largevalue
// let x=BigInt("7865666666666666666666666666666666645776668");
// console.log(x);

//                                                                8.     //  We can add in const not reassign
// const fruits=["Apple","Banana"];
// fruits.push("Guava");    // In const we can't reassign again we can add more things
// console.log(fruits);
// console.log(typeof fruits);  // Its type is object;

//                                                                    9.     // Make object
// let person={
//     firstname:"Aditya",
//     secondname:"chandak",
//     age:50

// }
// person.gender="male"
// console.log(person.firstname, person.secondname, person.age, person.gender);
// console.log(person["firstname"], person["secondname"], person["age"], person["gender"]);
// console.log(person.firstname);
// console.log(person.secondname);
// console.log(person.age);
// console.log(person.gender);

//                                                                         10.      // Functions (In js object pass by reference only.)
// function addition(a,b){
//     let c=a+b;
//     console.log("Inside addition")
//     return c;
// }
// let result=addition(3,8);
// console.log(result);


//                                                                    9.     // Make function inside
// let person={
//     firstname:"Aditya",
//     secondname:"chandak",
//     age:50,

//     fullname: function(){
//         return this.firstname+" "+this.secondname;
//     }
    
// }
// person.gender="male"
// console.log(person.fullname());

//                                                                         10.     //  addEventListner

// let mybutton=document.getElementById("btn");
// console.log(mybutton);
// mybutton.addEventListener("mouseover",function(){
//     alert("Button has been click")
// })


// let x="abc";
// let y=new String("abc");

// console.log(typeof x);
// console.log(typeof y);
// console.log(x==y);
// console.log(x===y);

//                                                                             11.    // String methods

// let text="Apple, banana, kiwi";
// // let part=text.slice(7,13);    // include 7 exclude 7
// // let part1=text.slice(-12,-6);    // include 7 exclude 7

// // let part=text.substr(7,10);    // print from 7 and 10 length

// let part=text.replace("Apple", "guava");    // print updated text
// console.log(part)
// // console.log(part1)

// let text="           Apple, kiwi        ";
// console.log(text.length);
// console.log(text.trim().length);  // trim(): Start and end blank space removed

// let myname="Amit kumar Roy";
// let arr=myname.split(" ");
// let ans="";
// for(let i=0;i<arr.length;i++){
//     ans+=arr[i];
// }
// console.log(ans);

//                                                                                 12.      // string Template Literal
// let x=5;
// let y=10;
// console.log(`The addition is ${x+y}`)



// 26/3/23

//                                                                                    13.         // for loop

// const car=["car","bike"];
// let text="";
// for(let i=0;i<car.length;i++){
//     text+=car[i] + "<br>";
// }

// document.getElementById("demo").innerHTML=text;
// // document.getElementById("demo").innerText=text;                      


// let x="123";
// console.log(typeof x);
// console.log(typeof parseInt(x));


//                                                                                      14       // function call
// const person = {
//     // fullName: function() {
//     //   return this.firstName + " " + this.lastName;
//     // }
//     fullName: function(city,state) {
//       return this.firstName + " " + this.lastName+ " "+ city+ " "+ state+ " ";
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }

// //   console.log(person.fullName.call(person1));           // if something is missing in person it call from person1
// //   console.log(person.fullName.call(person2));           // if something is missing in person it call from person2
//      console.log(person.fullName.call(person1,"newDelhi", "Delhi"));


//                                                                                      15       // function apply

// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//     // fullName: function(city,state) {
//     //   return this.firstName + " " + this.lastName+ " "+ city+ " "+ state+ " ";
//     // }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }

//   console.log(person.fullName.apply(person1));           // if something is missing in person it call from person1
//   console.log(person.fullName.apply(person2));           // if something is missing in person it call from person2
//     //  console.log(person.fullName.apply(person1,["newDelhi", "Delhi"]));



//                                                                                      16       // function bind

const person = {
    firstName:"aditya",
    lastName:"chandak",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
    // fullName: function(city,state) {
    //   return this.firstName + " " + this.lastName+ " "+ city+ " "+ state+ " ";
    // }
  }

//                                                               17 Difference between Apply, bind, call function of JS
// const car = {
//     firstName:"honda",
//     lastName:"city",
//     fullName: function(state,city) {
//       return this.firstName + " " + this.lastName +" "+state+" "+city+" ";
//     }
//     // fullName: function(city,state) {
//     //   return this.firstName + " " + this.lastName+ " "+ city+ " "+ state+ " ";
//     // }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }

//   let fullName = person.fullName.bind(person1);

//   console.log(fullName());           // if something is missing in person it call from person1  in bind we have to make let fullname but in call we can use direct
//   console.log(person.fullName.call(person2));           // if something is missing in person it call from person2
//      console.log(car.fullName.apply(person1,["delhi","NewDelhi"]));
//     //  console.log(person.fullName.apply(person1,["newDelhi", "Delhi"]));



//                                                                                    18  // Dom

// document.querySelector("#demo").innerHTML="def";        //  same as get elementbyid  but it be come easy as for class .    id #

// document.querySelector('[Aditya').innerText="addadada";