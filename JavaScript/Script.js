// if  else statement

// console.log("abcd...xyz");
// let mode = "light";
// let color;

// if( mode ==="dark"){
//     color="black";
// }

// else if (mode= =="light"){
//     color="white";
// }

// console.log(color);





// let age =17;
//  if(age>=18){
//     console.log("you can vhote");
//  }

//  else{
//     console.log("you can't allow vhote");
//  }



// let a = 10;
//  if(a%2==0){
//     console.log(a," = is even")
//  }

//  else{
//     console.log( a, "= is odd")
//  }



// TERNARY OPERATORS


// let age = 25;

//  let result = age >= 18 ? "adult" : "not adult";

// console.log(result);


// Practice question

//Q1.. Get user to input a number using prompt ("enter a number:"). Check if
//the number is a multiple of 5 or not..

/*let num = prompt("Enter a number: ");
if(num %5 === 0){
    console.log(num,"is multiple of 5 ")
}
else{
    console.log(num,"is a NOT multiple of 5 ")
}*/


//Q2.. Write a code which can giv grades to students
// according to their scores.



/*let num = prompt("Enter a found marks (0-100)")

if(num<=100 && num >=90){
    console.log("you have grade A")
}
else if(num<=89 && num >=80){
    console.log("you have grade B")
}
else if(num<=79 && num >=70){
    console.log("you have grade C")
}
else if(num<=69 && num >=60){
    console.log("you have grade D")
}
else if(num<=59 && num >=40){
    console.log("you have grade E")
}
else{
    console.log("you are fail.")
}*/






//LOOP && STRING


// for(a=1; a<=10; a++){
//     console.log("love");
// }

/*let i = 1;

while(i<=5){
    console.log("i is = ",i);
    i++
}*/



//do while


/*let i = 1;

do {
    console.log("I Love My India.",i);
    i++;
} while(i<=10);*/




//for-of loop    This types of loop only 
//use in string & Array

/*let str = "gamo.ki.potli";

let size = 0;
for (let val of str) {
    console.log("val =", val);
    size++;
}

console.log("string size = ", size);*/



//for-in-loop

/* let student = {
    name: "Shashi Bhushan Kumar",
    age : 20,
    cgpa: 7.63,
    isPass :true,
};

for (let key in student){
    console.log("key=",key, "value=", student [key] );
}
*/



//Practice question 1 

/*for(let i=1; i<=100; i++){
    if(i%2 == 0){
        console.log("value of i",i); 
    }
   
}*/


//Practice question 2

/*let gameNum = 52;
let userNum = prompt("Guess the game Number:");

while (userNum != gameNum) {
    userNum = prompt("You entered wrong Number. Guess Again:");
}

console.log("Congratulation, You entered the right number")*/




// Stringggggggggggggggggggg

/*let str = "gamo.ki.poti"
let str2 = 'shashi'
console.log (str[1]);*/


//Template literals

/*let specialString = `This is template literal`;
console.log(specialString)


let obj ={
    item: "pen",
    price :10,
};

console.log ("the cost of", obj.item, "is", obj.price,"rupees");

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);



console.log("Shashi\nBhushan")   //next line

console.log("Shashi\tBhushan")  //tab space*/






// String Method in js
//let str =  "gamo.ki.potli"

//These are built-in function to manipulate a string

//1. str.toUpperCase()
//2. str.toLowerCase()
//3. str.trim()         //removes whitespace
//4. str.slice(start, end ?)  //return part of string
//5. str1.concat(str2)        //joins str2 with str1
//6. str.replace(searchVal, newval)
//7. str.charAt(idx)



//PRACTICE QUESTION

//Q1. Prompt the user to enter their full name. Generate a username
//for them based on the input.
//Start username with @, followed by their full name and ending
//with the fullname length.

//Ans:-


/*let fullName = prompt("enter your fullname without spaces");

let userName= "@"+ fullName + fullName.length ;
console.log(userName);*/




//ARRAY

/*let marks = [97,82,75,64,53];
console.log(marks);
console.log(marks.length); //property

let heroes = ["amir kahan", "Ajay devgan", "Sanni lion", "Shyam Sundar Sanda"];
console.log(heroes);
console.log(heroes.length);*/



// Java Script ke andar Strinrg = immutable hoti hai.. that
//means value dosen't change..
//BUT Array ke andar value mmutable hota hai. value can be change..
//value chane krne ka tarika.. Array name [position]= new value..




//LOoping over an Array
//Printn all elements of an array..

//loop = iterable (String, object arrays)



/*let heroes = ["ironman", "thor","hulk","shaktiman","abhithav bachhan","shashi"];

for (let index=0; index <heroes.length; index++){
    console.log(heroes[index]);
}*/



/*let cities= ["delhi", "pune","mumbai"," hyderabad","gurgaon","kolkata","patna","bhagalpur"];

for(let city of cities){
    console.log(city.toUpperCase());
}*/

//for  of loop is used for iterable objects like array, string, map, set, etc.

/*
let  friends =["shashi" ,"prince", "ujjwal","ankit","shyam","sundar"];
for(let  friend  of friends){
    console.log(friend.toUpperCase());
}*/
    


//Let's Practice

// Q. for a given array with marks of student --> [85,97,44,37,76,60]
//find the average marks of the entire class

 
/*let marks = [85,97,44,37,76,60,23];

let sum =0;

for (let value of marks){
    sum= sum+value;
};

let aveg = sum/marks.length;
console.log(sum);
console.log("average marks of the Calss:-",+ aveg);*/



// Q2.  for a given array with prices of 5 items --> [250, 645,300,900,50]
//All itms have on offer of 10% OFF on the them.. Chuange the ayyay to store final price 
//after appling offeer...





// let items = [250,645,300,900,50];

// let i =0;
// for (let val of items){
//     console.log(`value at index ${i} = ${val}`);

//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);

//     i++;
// }


// for(let i =0; i<items.length; i++){
//     let offer = items[i] / 10;
//     items[i] =  items[i] - offer;

// };
//  console.log(items);





//ARRAY METHOD
//push method

// let foodItems =["apple","litchi","tamato","grapesh"];

// foodItems.push("chips", "burger","paneer");

// console.log(foodItems);



//pop method.

// let foodItems =["apple","litchi","tamato","grapesh"];

//  console.log(foodItems);
// let  removedItem = foodItems.pop();
//  console.log(foodItems);
//  console.log(removedItem);




//toString(): convert array to string  ,,,, that means toString method

// let foodItems =["apple","litchi","tamato","grapesh"];
//  console.log(foodItems);
//   console.log(foodItems.toString());
//   console.log(foodItems);



//concat(): method , joins multiple arrays & return result

// let heroes=["thor", "spiderman","iorenman"];
// let friend=["shashi","bhushan","saurabh","nishi","ankit"];
// let college=["coeb", "nsec","kiit","etc"];

// let  heroe = heroes.concat(friend,college);
// console.log(heroe);
// console.log(heroes);
// console.log(friend);




//unshift method = add to item in start.

// let friend=["shashi","bhushan","saurabh","nishi","ankit"];

// let a = friend.unshift("bsdk");
// console.log(friend);
// console.log(a);



//shift method = delete from start & return.

// let friend=["shashi","bhushan","saurabh","nishi","ankit"];

// let a = friend.shift();
// console.log(friend);
// console.log(a);






 //Slice method = returns a piece of the array,,,, but original array me koi change nahi hone wala hai..
 // slice (startidx,  endidx)

// let a = [2,44,77,44,33,22,44,55,33,];

// console.log(a);

// console.log(a.slice());
// console.log(a.slice(1 ,5));
// console.log(a.slice(2,6));




//Splice( change original array (add, remove .replace)
//splice(startidx, deletecount, newElement..)



// let a = [2,44,77,44,33,22,44,55,33,];

// a.splice(2,2,101,);
// console.log(a);

// console.log(a.slice()); //nothing any change
// console.log(a.slice(4)); // that means index 4 ke baad all item delet kr do..
// console.log(a.slice(1 ,5));
// console.log(a.slice(2,6));
// //add element
// a.splice(2,0,"shashi")
// console.log(a);

// //remove element
// a.splice(2,4,)
// console.log(a);


// //replace element
// a.splice(2,1,"bhushan")
// console.log(a);







// Practice Q

//Qs. Create an array to store Companies -> "Bloomberg", "Microsoft","Uber" , "google" ,"IBM",'Netflix

//a. Remove the first company from the array..

//b.Remove Uber & Add Ola in Its place  = Replacment  me splice method use kren.

//c. Add Amazon at the end

//Ans.
// let companies = ["Bloomberg", "Microsoft","Uber" , "google" ,"IBM","Netflix"];

// companies.shift();
// console.log(companies);

// companies.splice(1,1,"Ola");
// console.log(companies);

// companies.push("amazon");


