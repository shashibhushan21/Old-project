
// alert ("hello");


// console.dir(window);
// console.dir(window.document);
// console.dir(document.body)
// console.dir(document.body.childNodes)
// console.dir(window.head)

// document.body.style.background="green";

// document.body.childNodes[1].innerText ="abcf"




//DOM Manipulation

//1. Selecting with id
//document.getElementByld("myid")


//2.  Selecting with class
// document.getElementsByClassName("myclass")

//3.  Selecting with tag name
//  document.getElementsByTagName("h1" or "p")



// let heading = document.getElementsByClassName("header-class");
// console.dir(heading);
// console.log(heading);


// document.getElementsByTagName("h1");





// let firstEl  = document.querySelector("p");   // returns the first element that matches the specified selectors

// console.log(firstEl);


// let allEl  = document.querySelectorAll("p");  //  returns all elements that match the specified selectors

// console.log(allEl);


// let clasEl =  document.querySelector(".header-class");
// console.log(clasEl);

// let iedEl =  document.querySelector("#shashi");
// console.log(iedEl);

// let iedEl =  document.querySelector("#shas");  //this is wron id
// console.log(iedEl);





// DOM Manipulation

//properties
// tagName:returns tag for element nodes
// innerText : returns the text content of the element and all its children
//innerHTML: return the plain text or HTML content int he element.
//textContent : returns textual content even for hidden element.






//hamare pass 3 type ka node hota hai.. 1. text node .. 2.. Cpmment Node ..
//3.. Element Node.. homlog Element Node ko jyda tar use krte hai..
//Element ko axis krne ke liye..




// let A = document.querySelector("div");
// console.log(A);

// let s = document.querySelector("div").children;
// console.log(s);







// let div = document.querySelector("div");
// console.dir(div);

// let A = document.querySelector("div").innerText;
// console.dir(A);

// let b = document.querySelector("div").innerHTML;
// console.dir(b);


// let c = document.querySelector("div").innerText = "abcdeg "
// console.dir(c);






//Let's practice

//Qs. Create a H2 heading element with text - "Hello javaScript".
// Append (last me add krna = Append) "from Apna College student" to this text using JS

//Qs 2. Create 3 divs with common class name - "box". Access them &
//add some unique of them



// //ans


let A = document.querySelector("h2");
console.dir (A.innerText);

A.innerText = A.innerText + " from Apna College Student";



let divs = document.querySelectorAll(".box");
// console.dir(b);

let idx = 1;
for (div of divs ){
    div.innerText = `new unique value   ${idx}`;
    idx++;
    console.log(div);
    console.log(div.innerText);


}

// divs[0].innerText = "new unique 1";
// divs[1].innerText = "new unique 2";
// divs[2].innerText = "new unique 3";


// b.innerText = b.innerText  +  "shashi";


