

//Delection of an Element.
//2. Changing HTML
//3. Chinging Css
//4. Event  Listeners









// // 2.. Changing HTML

// let a = document.querySelector("h1");

// a.innerHTML = "Change HTML"






// // 3. Chinging Css

// let a = document.querySelector("h1");

// a.style.color ="red"
// a.style.fontSize = "50px"
// a.style.background = "blue"








// //4.Event  Listeners



let a = document.querySelector("h1");

a.addEventListener ("click", function(){
    a.innerHTML = "badal gya hun mai bhi tere ex ki tah"
    a.style.color = "red"
    a.style.fontSize = "50px"
});





let bulb = document.querySelector(".bulb");
let btn  = document.querySelector("button");


var flag = 0;
btn.addEventListener("click", function(){
    if(flag == 0){
   bulb.style.backgroundColor = "yellow"
   console.log("Clicked")
   flag =  1;
   btn.innerHTML =" ON"
}   
    else {
        bulb.style.backgroundColor = "transparent"
        console.log("Again Clicked")
        flag =  0;
        btn.innerHTML = "OFF"
          }
}) 






// // selecting multiple element at a same time
// let a =  document.querySelectorAll("h1")
// console.log(a)

// a.forEach (function(e){
//     console.log(e);
// })



// let b = document.querySelector(".bilb");
// b.innerHTML = "Nameste India"
// b.textContent = "<h1>Nameste </h1>"