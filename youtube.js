// PUSH,POP,SHIFT,UNSHIFT,CONCAT,SLICE,SPLICE,INDEXOF,LASTINDEXOF,REDUCE,SOME,EVERY,FIND,FINDINDEXOF,INCLUDES,SORT,REVERSE.
// CONCAT AND JOIN
// CONCAT (multiple arrays ko ak he array m show krwana )
// var a = ['karan ', 'rahul','aman']
// var b= ['rehman ', 'sanjay']
// var c= ['neha','mahima']
// var d = a.concat(b,c);
// console.log(d);
// var a = ["maryam ", "arooba ", "areesha "];
// var b = ["shakeel", "adeel", "zahid"];
// for (var i = 0; i < a.length; i++) {
//   console.log(a[i] + b[i]);
// }
// console.log(a+b)

//  JOIN (array ki hr value k end m koi b value lgata h)
// var a = ['karan',' rahul',' aman']
// var b= [' rehman ', ' sanjay']
// var c = a.concat(b)
// console.log(c)
// var d = c.join(" fahad" );
// console.log(d);

// NESTED LOOP
// var firstNames = ["Mahnoor ", "Arooba ", "Dua ", "Areesha ", "Maryam "];
// var lastNames = ["Shakeel", "Shakeel", "Adeel", "Zahid"];
// var fullNames = [];
// for (var a = 0; a < firstNames.length; a++) {
//   for (var b = 0; b < lastNames.length; b++) {
//     fullNames.push(firstNames[a] + lastNames[b]);
//   }
// console.log(fullNames);
// }
// for (var i = 1; i <= 10; i++) {
//   for (var j = 1; j <= i; j++) {
//     document.write(j + " ");
//   }
//   document.write("<br>");
// }
// for (var i = 1; i <= 5; i++) { *OUTTER LOOP*
//   for (var j = 1; j <= i; j++) { *INNER LOOP*
//   }
// }
// for (var a = 1; a <= 10; a++) {
//   for (var b = 1; b <= a; b++) {
//     document.write(a + " ");
//   }
//   document.write("<br>");
// }
// for (var a = 1; a >= 1; a++) {
//   for (var b = 1; b <= a; b++) {
//     document.write(a);
//   }
//   document.write("<br>");
// }
// for (var a = 5; a >= 1; a--) {
//   for (var b = a; b >= 1; b--) {
//     document.write(b +" ");
//   }
//   document.write("<br>");
// }

// var a = [10, 20, 30, 40, 50];
// console.log(a);
// var a = Array.isArray(a);
// console.log(a);
// var a = 10;
// console.log(a);
// var a = Array.isArray(a);
// console.log(a);
// var a = true;
// console.log(a);
// var a = Array.isArray(a);
// console.log(a);
// var a = ["array"];
// var b = 'string'
// console.log(a);
// if(Array.isArray(b)){
//     console.log('this is an array')
// }else{
//     console.log('this is not an array')
// }
// MULTIDIMENSIONAL ARRAYS
// var ary = [
//   ["mahnoor", "20", "female", "BCOM "],
//   ["aruba", "13", "female", "8 "],
//   ["areesha", "16", "female", "SSC PART-1 "],
//   ["shakeel", "50", "male", "10"],
// ];
//  for(var b = 0; b < 4; b++){
//     console.log(ary[b]);
//  }
// SORT & REVERSE
// var a = ['mahnoor','noor','fabiha','aruba',]
// console.log(a.sort())
// var a = ['mahnoor','noor','fabiha','aruba',]
// console.log(a.reverse())
// INDEXOF & LASTINDEXOF
// var ary = ['mahnoor','noor','fabiha','aruba','noor'];
// var b = ary.indexOf('noor',2);
// console.log(b);
// var ary = ['mahnoor','noor','fabiha','aruba','noor'];
// var b = ary.lastIndexOf('noor');
// console.log(b);
