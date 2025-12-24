var navLinks = document.getElementById("navLinks");
       
function showMenu(){
 navLinks.style.right="0";
} 
function hideMenu(){
 navLinks.style.right="-200px";
} 

///Gsap Start

function page1Animation(){
    let tl = gsap.timeline()

tl.from("nav img,nav ul li",{
    y:-40,
    opacity:0,
    delay:1,
    duration:0.5,
    stagger:0.2
})
function page1AnimationText(){
    let h1 = document.querySelector(".text-box h1");

    let h1Text = h1.textContent
    
    let splittedText = h1Text.split("")
    
    let clutter = ""
    
    // console.log(splittedText)
    
    splittedText.forEach(function(elem){
    //    console.log("hay")
        // console.log(elem)
        clutter = clutter + `<span>${elem}</span>`
    })
    
    h1.innerHTML = clutter
}
// console.log(clutter)
page1AnimationText()

tl.from("h1 span",{
    y:70,
    duration:0.4,
    opacity:0,
    stagger:0.1
})

tl.from(".text-box p",{
    y:40,
    opacity:0,
    duration:0.8,
    stagger:0.3
})

tl.from(".text-box a",{
    y:40,
    opacity:0,
    duration:0.8,
    stagger:0.3
})


}
page1Animation()

function page2Animation(){
    let tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".course",
            scroller:"body",
            // markers:true,
            start:"top 55%",
            end:"top 15%",
            scrub:1,
        }
    })
    tl2.from(".course h1",{
        x:70,
        opacity:0,
        duration:0.8,
    })
    tl2.from(".course #para",{
        x:-70,
        opacity:0,
        duration:0.8,
    })
    tl2.from("#row1",{
        y:-200,
        opacity:0,
        duration:0.2,
        stagger:0.4
    })
    
    // tl2.from("#row1",{
    //     x:100,
    //     opacity:0,
    //     duration:0.2,
    //     stagger:0.4
    // },"sath")
    // tl2.from("#row1",{
    //     x:200,
    //     opacity:0,
    //     duration:0.2,
    //     stagger:0.4
    // },"sath")
    
    tl2.from("#bhai h3, #bhai p",{
        y:-100,
        opacity:0,
        duration:0.2,
        stagger:0.4,
        stagger:0.3
    },"ek-sath")
    tl2.from("#bahan h3, #bahan p",{
        y:-100,
        opacity:0,
        duration:0.2,
        stagger:0.4,
        stagger:0.3
    },"ek-sath")
}
page2Animation()

function page3Animation(){
    let tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".campus",
            scroller:"body",
            // markers:true,
            start:"top 70%",
            end:"top 10%",
            scrub:0.5,
        }
    })
    tl3.from(".campus h1",{
        x:70,
        opacity:0,
        duration:0.8,
    })
    tl3.from(".campus p",{
        x:-70,
        opacity:0,
        duration:0.8,
    })
    tl3.from(".row",{
        y:200,
        opacity:0,
        duration:0.8
    })


}
page3Animation()



function page4Animation(){
    let tl4 = gsap.timeline({
        scrollTrigger:{
            trigger:".Facilities",
            scroller:"body",
            // markers:true,
            start:"top 70%",
            end:"top 10%",
            scrub:0.5,
        }
    })
    tl4.from(".Facilities h1",{
        x:70,
        opacity:0,
        duration:0.8,
    })
    tl4.from(".Facilities p",{
        x:-70,
        opacity:0,
        duration:0.8,
    })
    tl4.from(".Facilities img",{
        // y:200,
        opacity:0,
        duration:1,
        rotate:720,

    })
}
page4Animation()

function page5Animation(){
    let tl5 = gsap.timeline({
        scrollTrigger:{
            trigger:".testimonials",
            scroller:"body",
            // markers:true,
            start:"top 70%",
            end:"top 10%",
            scrub:0.5,
        }
    })
    tl5.from(".testimonials h1",{
        x:70,
        opacity:0,
        duration:0.8,
    })
    tl5.from(".testimonials p",{
        x:-70,
        opacity:0,
        duration:0.8,
    })
    tl5.from("#testimonials-col1",{
        x:-200,
        opacity:0,
        duration:1,
        // rotate:720,

    },"sath")
    tl5.from("#testimonials-col2",{
        x:200,
        opacity:0,
        duration:1,
        // rotate:720,

    },"sath")
}
page5Animation()

function page6Animation(){
    let tl6 = gsap.timeline({
        scrollTrigger:{
            trigger:".cta",
            scroller:"body",
            // markers:true,
            start:"top 70%",
            end:"top 10%",
            scrub:0.5,
        }
    })
    tl6.from(".cta",{
        x:200,
        opacity:0,
        duration:0.8,
    },"sath")
    tl6.from(".cta h1",{
        x:-500,
        opacity:0,
        duration:0.8,
    },"sath")
    tl6.from(".cta a",{
        y:300,
        opacity:0,
        duration:0.8,
    })

}
page6Animation()


