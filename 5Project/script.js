

//  let stats = document.querySelector("h5");
//  let addfriend = document.querySelector("#add");
// //  let btn = document.querySelector ("#btn");

// //  let removefriend = document.querySelector("#remove")

//  let flag = 0;

//  addfriend.addEventListener("click",function(){
//     if(flag ==0){
//         stats.innerHTML ="friend"
//         stats.style.color = "green"
//         flag = 1;
//         add.innerHTML =  "Remove";

//     }
//     else{
//         flag = 0;
//         stats.innerHTML = "no friend"
//         stats.style.color = "red"
//         add.innerHTML =  "Add Friend";
//     }

   
//  });



//  removefriend.addEventListener ("click",function(){
//     stats.innerHTML = "Stranger"
//     stats.style.color = "red"
//  })




/* First project end  */




/* Second project Start  */


// let con = document.querySelector(".container");

// let love = document.querySelector ("i");

// con.addEventListener("dblclick",function(){

//     love.style.transform = 'translate(-50%, -50%) scale(2)' 
//     love.style.color  = "#fa4632"
//     love.style.opacity = 0.8


//     setTimeout(function(){
//         love.style.opacity = 0;

//     }, 1000)

//     setTimeout(function(){
//         love.style.transform = 'translate(-50%, -50%) scale(0)' 

//     }, 2000)

// })






/* Third project Start  */



// let main = document.querySelector ("body");
// let crsr = document.querySelector(".cursor");

// main.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.x + "px";
//     crsr.style.top = dets.y + "px";


// })


/* Forth project Start  */

let elem = document.querySelectorAll(".elem");

elem.forEach(function(val){

    // console.log(val.childNodes[3])


    val.addEventListener("mouseenter",function () {
        val.childNodes[3].style.opacity = 1
        
    });

    val.addEventListener("mouseleave",function () {
        val.childNodes[3].style.opacity = 0
        
    });

    val.addEventListener("mousemove",function (dets) {
        val.childNodes[3].style.left =  dets.x+"px"
        // val.childNodes[3].style.top =  dets.y+"px"

        
    });

});







// // this is for one div or one image 



// let elem1 = document.querySelector("#elem1");
// let elemImage = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove",function(dets){
//     elemImage.style.left =dets.x+"px"
//     elemImage.style.top =dets.y+"px"

// })

// elem1.addEventListener("mouseenter",function(dets){
//     elemImage.style.opacity = 1

// })

// elem1.addEventListener("mouseleave",function(dets){
//     elemImage.style.opacity = 0

// })
