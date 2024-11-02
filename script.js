var tl = gsap.timeline()
tl.from("#contant h1 ,#contant2 , #contant3 ",{
    // y:-1000,  
    // duration:0.5,
    y:-100,  
    duration:1,
    scale:0.1,
    opacity:0,
    stagger:0.5,
})

gsap.from("#bottom-left-left h1,p",{
    y:-100,  
    duration:1,
    scale:0.1,
    opacity:0,
    stagger:0.5,
}) 
gsap.from("#bottom-right-right h4",{
    y:-300,  
    duration:3,
    scale:0.1,
    opacity:-10,
    stagger:0.5,
}) 
gsap.from("img",{
    duration:5,
    scale:-5,
    opacity:-10,

}) 