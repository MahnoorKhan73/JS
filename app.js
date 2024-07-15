// var city;
// city='khi'
// console.log(city)
// city='lhr'
// console.log(city)
// var num;
// num = 7
// console.log(num)
// num = 9
// console.log(num)
// var num = 1
// console.log(--num)
// var name = 'rehan'
// var name2 = 'pasha'
// console.log(name + ' ' + name2)

// var userData = +prompt('enter your number')
// console.log(userData + 1)

// var userdata = +prompt('enter num')
// if (userdata >= 6 ){
//     console.log('correct')
// }
// else{
//     console.log('not correct')
// }
// var userName = prompt('enter name')
// if(userName === 'mahnoor'){
//     console.log('correct')

// }
// else{
//     console.log('fail')
// }

// var userData = prompt("enter name");
// if (userData === "aruba") {
//   console.log("welcome");
// } else if (userData === "mahnoor") {
//   console.log("welcome");
// } else {
//   console.log("enter correct name");
// }
// july 1 2024
// var html = prompt('kia apko html ati hai')
// var css = prompt('kia apko css ati hai')

// if (html === 'yes' && css === 'yes' ) {
//     console.log('correct')
// }

// else {
//     console.log('incorrect')
// }
//                  0      1       3
// var city = ['karachi','lahore','islamabad']
// console.log(city[1])

// task1
// var number = +prompt("input number")

// if (number > 0) {
//   console.log("The number is positive.")
// } else if (number < 0) {
//   console.log("The number is negative.")
// } else {
//   console.log("The number is zero.")
// }

// task2
// var signal=prompt('signal color')
// if(signal === 'red') {
//     console.log('must stop')
//    }
//    else if(signal === 'yellow'){
//     console.log('ready to move')
//    }
//    else if(signal === 'green'){
//     console.log('move now')
//    }
//    else{
//     console.log('invalid color');
//    }
// task 3
//  var num1 = +prompt('enter num')
//  var num2 = +prompt('enter scnd num')

//  if(num1 > num2){
//     console.log('larger from  num2')
//  }
//  else if(num2 > num1){
//     console.log('larger from num1')
//  }
//  else {
//     console.log('both are equal')
//  }

// 4 july 2024
// task 1

// var marks = prompt("enter marks");
// if (marks >= 90) {
//   console.log("A+");
// } else if (marks >= 80) {
//   console.log("A");
// } else if (marks >= 70) {
//   console.log("B");
// } else if (marks >= 60) {
//   console.log("C");
// } else if (marks >= 50) {
//   console.log("D");
// } else {
//   console.log("fail");
// }

// task2
// var checkScore = prompt("enter marks");
// if (checkScore >= 60) {
//   console.log("pass");
// } else {
//   console.log("fail");

// task3
// Store correct password in a JS variable.
// var correctPassword = "chase up value";

// //  Ask user to enter password
// var userPassword = prompt("Please enter your password:");

// if (userPassword !== correctPassword) {
//   // i. Check if user has entered password
//   console.log("Incorrect Password");
// } else if (userPassword === correctPassword) {
//   // ii. Check if both passwords are same
//   console.log(
//     "Correct! The password you entered matches the original password."
//   );  
// } else {
//   // Show "incorrect password" otherwise
//   console.log("Please enter your password.");
// }

// // ARRAY
// 10 july 2024 make var by const use push pop method
// const fruits = ["apple", "banana", "cherry"];
// fruits.push('date')
// console.log(fruits)
// fruits.pop()
// console.log(fruits)
// fruits.shift()
// console.log(fruits)
// fruits.unshift('berry')
// console.log(fruits)
// push pop shift unshift
// let fruits = ["apple", "banana", "cherry"];
// fruits.push('date')
// console.log(fruits)

// fruits.pop()
// console.log(fruits)

// fruits.shift()
// console.log(fruits)

// fruits.unshift('berry')
// console.log(fruits)

// slice splice

// EXAMPLE 1 (SLICE)
// var city = ["karachi", "lahore", "islamabad", "sindh"];
// var city2 = city.slice(0, 3)
// // [("karachi", "lahore", "islamabad")];
// // js index s js index tk value chahiye ussy bs ak index zada deni h
// console.log(city2);

// EXAMPLE 2
// var city = ['karachi','lahore','islamabad','sindh']
// var city2 = city.slice(0,3)
// console.log(city2)

// TASK 1

// let cities = ['karachi', 'lahore', 'islamabad', 'quetta', 'peshawar' ]
// let cities2 = cities.slice(2,4)
// console.log(cities2)

// // (SPLICE)
// var city = ['karachi', 'lahore','islamabad','quetta']
// console.log(city)
// city.splice(1,0,'sindh')
//      // start remove Add
// console.log(city)

// let cities = ['karachi', 'lahore', 'islamabad', 'quetta', 'peshawar']
// //    start     end     inc

// //    karachi
// for (var i = 0; i < cities.length; i++) {
//      console.log(cities[i])
// }
// console.log('aya code ?')

// 3. Write a program to print numeric counting from 1 to 10.

// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }

// 4. Write a program to print multiplication table 2
// ye mene bataya nh hai dekh leye ga agr smjh ajai to krna wrna zarori nh
// for (var i = 1; i <= 10; i++) {
//   console.log(2 * i);
// }
// for (var i = 1; i <= 10; i++) {
//   console.log("2 " + "x" + i + "=" + 2 * i);
// }
// take input from user to print table of user
// var number = Number(prompt(`Enter a number:`));
// console.log(`${number} x 2 = ${number * 2}`);
// console.log(`${number} x 1 = ${number * 1}`);
// console.log(`${number} x 3 = ${number * 3}`);
// console.log(`${number} x 4 = ${number * 4}`);
// console.log(`${number} x 5 = ${number * 5}`);
// console.log(`${number} x 6 = ${number * 6}`);
// console.log(`${number} x 7 = ${number * 7}`);
// console.log(`${number} x 8 = ${number * 8}`);
// console.log(`${number} x 9 = ${number * 9}`);
// console.log(`${number} x 10 = ${number * 10}`);

// 10 july 2024 TASK OF TABLE
// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
// var number = +prompt("Enter the number for the multiplication table:");
// var length = +prompt("Enter the length of the multiplication table:");
// for (let i = 1; i <= length; i++) {
//   console.log(`${number} x ${i} = ${number * i}`);
// }

// write a program to print items using for loop
// fruits = ["apple", "bnana", "mango", "orange", "cherry"];
// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// BOOLEAN PRH RELA APUN
// var user = prompt('enter your favorite cheeji')
// var cheji=['fanta', 'khopra candy', 'caramel chocolate', 'sonet','dairy milk']
// var correct= false
// for(var i = 0; i < cheji.length; i++){
//   if (user === cheji[i]){
//     correct = true
//   }
// }
// if (correct === true){
//   console.log('10 rupy')
// }else{
//   console.log('nh h ')
// }
// FIRST TRY BEKAR GAI AJEEEEBBBBBBB BUT ACHI THI TRY AK MISTAKE THI
// var user = prompt("enter your password");
// var password = ["m", "a", "h", "n", "o", "o", "r"];
// var corect = true;
// for (var i = 0; i < password.length; i++) {
//   if (user === password[i]) {
//     corect = false;
//   }
// }
// if (!user) {
//   console.log("enter password");
// } else if (corect === false) {
//   console.log("correct");
// } else {
//   console.log("wrong");
// }
// SECOND TRY
// var user = prompt("Enter your password");
// var password = ["m", "a", "h", "n", "o", "o", "r"];
// var correct = false;

// if (user === '') {
//     console.log("enter password.");
// } else {
//     for (var i = 0; i < password.length; i++) {
//         if (user === password[i]) {
//             correct = true;
//         }
//     }

//     if (correct === true) {
//         console.log("Correct password");
//     } else {
//         console.log("Wrong password");
//     }
// }
// EVEN NUMBERS
// for(var i = 1; i <= 10; i++){
//     if (i % 2 !=0) {
//         console.log(i)

//     }
// }    

// ODD NUMBERS
// for(var i = 1; i <= 10; i++){
//     if (i % 2 === 0) {
//         console.log(i)

//     }
// }
    