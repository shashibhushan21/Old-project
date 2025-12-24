
// function myFunction(){
//   console.log("Well Come to  my WWebsite");
//   console.log("and i m  happy to see you");


// };


// myFunction();
// myFunction();




// function myFunction(msg){  //parameter  --> Input
//     console.log(msg);
//     console.log("hello Friends.");
    
// }

// myFunction("how are u");  //argument






// function --> 2 number sum

// function sum (x , y){
//     console.log(x+y);
// }

// sum(5,7);  //argument




// function sum (x , y){
//     //local variables -> scop
//     s = x  + y;
//     return s;
// }

// let val = sum (3,7);
// console.log(val);








//Arrow function
//Compact way of writing a function

//const FunctionName =(param1,param2...)=>{
//  do some work    
//   }


// function sum (a , b){
//     return a+b;
// }


// //modern JS
// const arrowSum=(a,b)=>{
//     console.log(a+b);
//     return a+b;
// };
// console.log(arrowSum(3,9));
// console.log(arrowSum);





// //multiplaction function

// function multiply (a,b){
//     return a*b;
// }

// //modern JS
// const multiple=(a,b)=>{
//     // console.log(a*b);
//     return a*b;

// };
// console.log(multiple(3,9));
// console.log(multiple);






// Practice Question
// 1. Create a  function using the "function" keyword that takes a
// String as an argument &  returns the number of vowels in the string..



// function countVowels(str){
//     let count = 0;
//     for (let char of str){
//         if (char === 'a' || 
//             char === 'e' || 
//             char === 'i' || 
//             char === 'o' || 
//             char === 'u' ){
//             count++;
//         }
            
//    console.log(char)
//     }
//     return count;
//     // console.log(count);
// }
// console.log (countVowels("shashi bhushan"));
// console.log (countVowels("asdfghjklzxcvbnre"));
// console.log (countVowels("sdfghjcxcvbnmaeiuo"));




//  2. Create an arrow function to perform the same task.


// let countVow =(str)=>{
//     let count = 0;
//     for (let char of str){
//         if (char === 'a' || 
//             char === 'e' || 
//             char === 'i' || 
//             char === 'o' || 
//             char === 'u' ){
//             count++;
//         }
            
//    console.log(char)
//     }
//     return count;  
// };


// console.log (countVow("shashi bhushan"));
// console.log (countVow("asdfghjklzxcvbnre"));
// console.log (countVow("sdfghjcxcvbnmaeiuo"));






//foeEach Loop in Array

//arr.foreach(callBackFunction)

// A callback is a function passed as argument to another function
// The callback function is used to perform a  specific task


// let arr  = [1, 2, 3, 4, 5, 6];
// let arr  = ["shashi bhuaioaia"];


// arr.forEach(function printval (val){
//     console.log(val);
// });
// //forEach function ko print nhi kadna padta hai..




// // let arr  = [1, 2, 3, 4, 5, 6];
// let arr  = ["shashi bhuaioaia","yadav","kumar"];
// arr.forEach((val,idx,item)=>{
//     console.log(val.toUpperCase(),idx,item);
// });






// //Practice Question
// //Qs. For a given array of numbers, print the square of each value using
// //the forEach loop method.

// let arr  = [111, 2, 1233, 4, 53, 8,0.5];
// arr.forEach((val)=>{
//     let  square = val*val;

//     console.log("value= ", val,"square= ",square);
// });







// //Some More Array methods.
// //Map
// //ye method tab use krte hai jab  hume array me ek koi task perform krke
// //naya array return krna  hai
// //Create a new array with the results of some operation .
// //the value its callback returns are used to form new array..

// //arr.map(callbackFnx(value,index,array..))



// let num  = [111, 2, 1233, 4, 53, 8,0.5];

// num.map((val)=>{
//  let square = val*val;
//      console.log("value= ", val,"square= ",square);
// })




// let num  = [111, 2, 1233, 4, 53, 8,0.5];

// let newArry = num.map((val)=>{
   
//     return val*2;
//     // return val*val;
// })

// console.log("value= ", num,"square= ",newArry);







// // Filter method
// //ye method tab use krte hai jab hume array me kuch specific value filter kr
// //Create a new array of element that give true for a condition/filter.



// let num  = [111, 2, 1233, 4, 53, 8,0.5,54,66,88,];

// let evenArry = num.filter((val)=>{
   
//     return val % 2 === 0;
//     // return val >66;
//     // return val <66;
//     // return val*val;
// })

// let oddArry = num.filter((val)=>{
   
//     return val % 2 !== 0;
//     // return val*val;
// })
// console.log(num)
// console.log("value= ", num, " All Even array ",evenArry);
// console.log("value= ", num, " All Odd array ",oddArry);






// //Reduce Method

// //Performs some operations & reduce athe ary to a single value.
// //it returns that single value.


// let ary = [22,44,55,77,33,45,54,23]

// let outPut = ary.reduce((prev, curr)=>{
//     // return prev + curr;
//     return prev > curr ?  prev : prev;
//     // return prev < curr ?  prev : prev;

    
// })

// console.log(outPut);








// // Practice question

// // Qs 1. We are given array of marks of students. filter out of the marks
// // of student that scored 90+.

// // Qs 2. Take a number n as input from user.Create an array of number from 1 to n.
// // Qs 3. Use the reduce method to calculate sum of all number in the array.
// // Qs 4. Use the redduce method to calculate product of all number in the array..

// //ans 1.
// let marks=[66,54,87,68,98,45,32,23,11,76,80,90,88,32.44];

//  let first = marks.filter((val)=>{
//     return val  > 60;
//  })
// console.log("all student Marks" , marks)
//  console.log("First division Student",first)



//  //ans 2.

//   let n = prompt("Enter a Number : ");

//   let arr =[];

//   for ( let i = 1; i <=  n; i++){
//        arr[i-1] =i;
//   }

//   console.log(arr);



//   let sum = arr.reduce((prev, curr)=>{
//     return prev + curr;
//   });

//   console.log("sum is = ",sum);



  
//   let factorial = arr.reduce((prev, curr)=>{
//     return prev * curr;
//   });

//   console.log("factorial  = ",factorial);