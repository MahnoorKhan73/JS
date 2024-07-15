// (var declare kya but value assign nh ki)
// var city;
// // var m value assign krdi
// city='karachi'
// console.log(city)
// // var update krdya
// city='lahore'
// console.log(city)
// var num;
// num = 7
// console.log(num)
// num = 9
// console.log(num)
// var num = 2
// console.log(--num)
// console.log(++num)
// console.log(num++)
// console.log(num--)
// 2 var ko concatinate krwana
// var name = 'rehan'
// var name2 = 'pasha'
// console.log(name + ' ' + name2)
// user s num lekr clg ki help s ak num or add krwana
// var userData = +prompt("enter numeber");
// console.log(userData + 1);
// user s  num lekr less than greater than lgana
// var userNum = +prompt("enter number");
// if (userNum >= 10) {
//   console.log("correct");
// } else {
//   console.log("not correct");
// }
// var userName= prompt('enter name')
// if(userName=== 'mahnoor'){
//     console.log('corret name')
// }else{
//     console.log("not correct name")
// }

// var userName = prompt('enter name')
// if(userName === 'aruba','anaya'){
//     console.log('congrats')

// }else if(userName === 'mahnoor','malaika'){
//     console.log('again congrats')
// }else{
//     console.log('u r no person in our list')
// }
// var code = prompt("enter your language");
// if (code === "html" || code === "css") {
//   console.log("ok good ! ");
// } else {
//   console.log("bye !");
// }
// var html = prompt('kia apko html ati hai')
// var css = prompt('kia apko css ati hai')

// if (html === 'yes' && css === 'yes' ) {
//     console.log('correct')
// }

// else {
//     console.log('incorrect')
// }
// clg s indx find krna h
// var city = ['karachi','islamabad','faisalabad','hyderabad']
// console.log(city[2,1])
// POSITIVE NEGATIVE
// var num = +prompt("input number");
// if (num > 0) {
//   console.log("num is positive");
// } else if (num < 0) {
//   console.log("num is negative");
// } else {
//   console.log("the num is 0");
// }

// SIGNAL COLORS
// var signalColor = prompt("enter signal color");
// if (signalColor === "red") {
//   console.log("MuSt StOp");
// } else if (signalColor === "yellow") {
//   console.log("ReAdY tO MoVe");
// } else if (signalColor === "green") {
//   console.log("MoVe NoW");
// } else {
//   console.log("invalid color");
// }

// GRADES BY ENTERING NUM IN PROMPT
// var numbers = +prompt("enter numbers");
// if (numbers >= 90) {
//   console.log("A+");
// } else if (numbers >= 80) {
//   console.log("B");
// } else if (numbers >= 70) {
// console.log("C");
// }else if (numbers >= 60){
//     console.log("D");
// }
// else{
// console.log("Bro youua are fail");
// }

// var pass = "password";
// var user = prompt("PLEASE ENTER YOUR PASSWORD");
// if (user !== pass) {
//   console.log("INCORRECT PASSWORD");
// } else if (user === pass) {
//   console.log("CORRECT PASSWORD");
// } else {
//   console.log("ENTER YOUR PASSWORD PLEASE!");
// }
// STORE PASS IN VAR THEN PRINT;
// var correctPassword = "mishi";
// var userPassword = prompt("Please enter your password:");
// if (!userPassword) {
//   alert("Please enter your password");
// } else if (userPassword === correctPassword) {
//   alert("Correct! The password you entered matches the original password.");
// } else {
//   alert("Incorrect password.");
// }
// var correctPassword = "mishi";
// var userPassword = prompt("Please enter your password:");
// if (userPassword === "") {
//   alert("you must enter pass");
// } else if (userPassword === correctPassword) {
//   alert("you have entered right pass " + userPassword);
// } else {
//   alert("wrong pass "+ userPassword);
// }
// let cities = ['karachi', 'lahore', 'islamabad', 'quetta', 'peshawar']
// //    start     end     inc

// //    karachi
// for (var i = 0; i < cities.length; i++) {
//      console.log(cities[i])
// }
// for(var i=1; i <= 10; i++){
//     console.log(2*i);
// }
// for (var i = 1; i <= 10; i++) {
//   console.log("2 " + "x " + i + " = " + 2 * i);
// }
// var number = Number(prompt("Enter a number:"));
// for (var i = 1; i <= 20; i++) {
//   console.log(`${number} x ${i} = ${number * i}`);
// }
//  BOOLEAN METHOD
// var user = prompt("which product do u want");
// var product = [
//   "abaya",
//   "scarf",
//   "abaya + scarf",
//   "cap",
//   "hand bag",
//   "purse",
//   "back bag",
//   "shoes",
// ];
// var correct = false;
// for (var i = 0; i < product.length; i++) {
//     if (user === product[i]) {
//         correct = true;
//     }
//   }
//   if (correct === true) {
//     console.log("150");
//   } else {
//     console.log("The product you are looking for is not available:");
//   }

// EVEN & ODD NUMBERS
// for (var i = 0; i <= 10; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }
// for (var j = 1; j <=10; j++){
//     if (j % 2 === 0 ){
//         console.log(j);
//     }
// }

// var user = prompt("Please! Enter Your Password");
// var secret = ["hi", "hello", "hey buddy", "hey"];
// var boolean = false;
// for (var i = 0; i < secret.length; i++) {
//   if (user === secret[i]) {
//     boolean = true;
//   }
// }
// if (!user) {
//   console.log("Please! Enter Password");
// } else if (boolean === true) {
//   console.log("Congrats! Your Password matched");
// } else {
//   console.log("Your Password is Incorrect");
// }
