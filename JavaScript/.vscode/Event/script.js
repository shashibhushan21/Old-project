
// let btn = document.querySelector(".btn1");

// btn.onclick = () => {
//     btn.style.color = "blue"
// }

// btn.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
// }




// let div = document.querySelector(".box");
// div.onmouseover =()=>{
//     div.style.background = "red";
// }





///Event Listeners

///node.addEventListener(event,callback);
///node.removeEventListener(evevt,callback);
///Note: the callback reference should be same to remove..


// let btn = document.querySelector(".btn1");

// btn.addEventListener("click",()=>{
//     console.log("Button clicked");
// })

// let div =  document.querySelector(".box");





///Lets Practice
/// Qs 3.. Create a toggle button that the sreen to dark-mode
///When clicked & light-mode ehen clicked



let modBtn = document.querySelector(".main");
let body = document.querySelector("body");

let currMode = "light"; //dark

modBtn.addEventListener("click",()=>{

    if(currMode=== "light"){
        currMode = "dark";
        body.style.backgroundColor = "#000";
    }
    else{
        currMode = "light";
        body.style.backgroundColor = "#fff";

    }


})






///2nd method solve


// let flag = 0;
// let modeBtn = document.querySelector("body");
// modeBtn.addEventListener("click",()=>{
//     if (flag === 0){
//         modeBtn.style.backgroundColor =  "#000";
//      flag = 1;

//     }
//     else{
//         flag = 0;
//         modeBtn.style.backgroundColor = "#fff";

//     };


// })
