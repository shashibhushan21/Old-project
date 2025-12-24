
// DOM Manipulation
//Attributes

//1. .getAttribute(attr) //to get the attribute value
// 2 .setAttribute(attr, value) //to set the attribute value


// style
// 3..node.style



// //1..

// let div = document.querySelector("#main");
// console.log(div)


// //2..
// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));


// //3..


// let box =  document.querySelector(".box");

// box.style.backgroundColor= "yellow"






//DOM Manipulation
//let el = document.createElement("div")

//insert Elements
//1. node.append(el) //adds at the end of node (inside)
//2. node.prepend(el) //adds at the beginning of node (inside)
//3. node.before(el) //adds before node (outside)
//4. node.after(el) //adds after node (outside)
//5. node.replaceWith(el) //replaces node with el
//6. node.remove() //removes node


 //1 ans start now..


// let btn  = document.createElement("button");
// btn.innerText="click me";
// btn.style.backgroundColor="red";
// btn.style.padding="10px 20px";
// btn.style.borderRadius="5px";
// btn.style.margin = "20px";
// console.log(btn);


// let div = document.querySelector(".box");
// div.append(btn);
// // div.prepend(btn);
// // div.before(btn);
// // div.after(btn);
// // div.replaceWith(btn);
// // div.remove();







///let's Practice

///Qs. Create a new bouuton element. Give it a text "click me",
///add a red background  color, add some padding, add some margin 
/// and text color wite

///insert the button as the first element inside rhe body tag..


///Qs2.. Create a <p> tag in html give it a class & some stylling..
///Now create a new class in CSS and try to append this class to the <p> element.

///Did you nodice, how you  overwrite the class name when you add a new one..?
///Solve the [proble using calss lst]




///Ans 1..

// let  btn = document.createElement("button");
// btn.innerText = "click me";
// btn.style.backgroundColor = "red";
// btn.style.padding = "10px 20px";
// btn.style.fontSize="15px"
// btn.style.borderRadius = "5px";
// btn.style.margin = "20px";
// btn.style.color = "white";


// document.querySelector("body")
// .prepend(btn);




///Ans 2..

let para = document.querySelector("p");
console.log(para)
para.classList.add("new-class");
para.remove("new-lass")

