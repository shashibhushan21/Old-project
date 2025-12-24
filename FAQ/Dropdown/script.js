
// const main = document.getElementsByClassName()
//  console.log(main)
// for(i = 0; i < main.length; i++ ){
//     main[i].addEventListener("click",function(){
//        this.classList.toggle("active")
//     console.log("hello")
//     })
// }

const main = document.getElementsByClassName("contentBx")
// console.log(main)
for(i = 0; i < main.length; i++ ){
    main[i].addEventListener("click", function(){
       this.classList.toggle("active")
    //    console.log("hello")
    })
}