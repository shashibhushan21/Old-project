
let boxex = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turn0  = true;  ///playerX, Player0
let turn1  = false;
  
///1d Array
///let arr = [0, 1, 2, 3, 4, 5];

///2D Array
let  winPatterns = [
     [0, 1, 2],
     [0, 3, 6],
     [0, 4, 8],
     [1, 4, 7],
     [2, 5, 8],
     [2, 4, 6],
     [3, 4, 5],
     [6, 7, 8],

]

///console.log(arr2[0][1 ]);

// boxes.forEach((box) => {
//     box.addEventListener("click",()=>{
//         console.log("hello")
//         box.innerText ="asbc"
//     });
// });



const reserGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}




boxex.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");
       if(turn0){
        box.innerText = "O";
        box.style.color =  "blue";

        turn0 = false;
       }
       else{
        box.innerText = "X";
        box.style.color = "red";
        turn0 = true;
       }
       box.disabled = true;

       checkwinner ();
    });
    
});
const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is  ${winner}`
    msgContainer.classList.remove("hide")
}


const disableBoxes = ()=>{
    for(let box of boxex){
        box.disabled = true;
    }
};


const enableBoxes = ()=>{
    for(let box of boxex){
        box.disabled = false;
        box.innerText="";
    }
};



const checkwinner = () => {
   for( let pattern of winPatterns){
    // console.log(pattern);
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(
    //     boxex[pattern[0]].innerText,
    //     boxex[pattern[1]].innerText,
    //     boxex[pattern[2]].innerText,

    // );
    let pos1Val =  boxex[pattern[0]].innerText;
    let pos2Val =  boxex[pattern[1]].innerText;
    let pos3Val =  boxex[pattern[2]].innerText;
    
    if (pos1Val !="" && pos2Val !="" && pos3Val !=""){
        if (pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("winner",pos1Val);
            showWinner(pos1Val);
    }

   }


};
};


newGameBtn.addEventListener("click",reserGame);
resetbtn.addEventListener("click",reserGame);
