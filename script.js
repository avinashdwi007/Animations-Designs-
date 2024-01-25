var tl = gsap.timeline();

tl.from(".nav h4",{
    y:-50,
    opacity:0.2,
    stagger:0.3

})
tl.from(".left-nav a",{
    y:-50,
    opacity:0.2,
    stagger:0.3

})

tl.from(".main h1",{
    x:-1500,
    opacity:0,
    duration:0.8,
    stagger:0.2
})

tl.from("#img1 ,#img2 ,#img3",{
    opacity:0,
    x:100,
    rotate:45,
    duration:0.5,
    stagger:0.5
})

tl.from("h2",{
    y:100,
    duration:0.5,
    opacity:0,
    stagger:0.4
})


tl.from(" .gallery img",{
    x:-100,
    opacity:0,
    stagger:0.4,
    scrollTrigger: {
        trigger: "img", // Trigger element
        scrub: true, // Enable scrubbing
        // End the animation at the bottom of the trigger element
    }
})


