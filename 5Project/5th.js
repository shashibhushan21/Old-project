let arr = [
    {dp:"https://images.pexels.com/photos/1382730/pexels-photo-1382730.jpeg?auto=compress&cs=tinysrgb&w=400",
        story: "https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=400"
    },

    {dp:"https://images.pexels.com/photos/921646/pexels-photo-921646.jpeg?auto=compress&cs=tinysrgb&w=400",
        story: "https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=400"
    },

    {dp:"https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=400",
        story: "https://images.pexels.com/photos/616376/pexels-photo-616376.jpeg?auto=compress&cs=tinysrgb&w=400"
    },

    {dp:"https://images.pexels.com/photos/902030/pexels-photo-902030.jpeg?auto=compress&cs=tinysrgb&w=400",
        story: "https://images.pexels.com/photos/902030/pexels-photo-902030.jpeg?auto=compress&cs=tinysrgb&w=400"
    },

    {dp:"https://images.pexels.com/photos/672444/pexels-photo-672444.jpeg?auto=compress&cs=tinysrgb&w=400",
        story: "https://images.pexels.com/photos/902030/pexels-photo-902030.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
]

let storiyan = document.querySelector(".storiyan")
let clutter = ""

arr.forEach(function(elem,idx){
    clutter += ` <div class="story">
                     <img id = "${idx}" src="${elem.dp}" alt="">
                 </div>`
  
})

storiyan.innerHTML = clutter

storiyan.addEventListener("click",function(dets){
    // console.log(arr[dets.target.id].story)
    document.querySelector(".full-screen").style.display = "block"
    document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`


    setTimeout(function(){
        document.querySelector(".full-screen").style.display =  "none"
    },1000);



});