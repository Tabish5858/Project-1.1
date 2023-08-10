gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


var tl = gsap.timeline();

// Function to start continuous rotation animation
const startContinuousRotation = () => {
    tl.to("#page1", {
        y: "0vh",
        duration: 1,
        onComplete: () => {
            if (document.readyState === "complete") {
                tl.pause();
                document.getElementById("preloader").style.display = "none";
            }
        }
    });
};

// Check if the page has fully loaded
if (document.readyState === "complete") {
    startContinuousRotation();
    document.getElementById("preloader").style.display = "none";
} else {
    window.addEventListener('load', () => {
        startContinuousRotation();
        document.getElementById("preloader").style.display = "none";
        document.getElementById("preloader").style.transition = "0.6 ease-in";
    });
}

// tl.to("#page1",{
//     y:"100vh",
//     scale:0.6,
//     duration:0
// })
// tl.to("#page1",{
//     y:"30vh",
//     duration:1,
//     rotate:360,
//     delay:0.6,
//     repeat:5,
// })

// window.addEventListener('load',() =>{
//   tl.to("#page1",{
//     y:"0vh",
//     rotate:720,
//     scale:1,
//     duration:0.6,
// });
// })


// ________________ ✅✅ Page1 ✅✅______________________


tl.from("#nav ,#navLogo,#navMenu ul li,#navBtn1,#navBtn2,#navBtn3",{
    y:-200,
    duration:0.7,
    delay:0.3,
    stagger:0.3,
    opacity:0
})
tl.from("#left1",{
    x:-600,
    duration:0.7,
    delay:0.3,
    stagger:0.4,
    opacity:0
})
tl.from("#right1",{
    x:600,
    duration:0.7,
    delay:0.3,
    stagger:0.4,
    opacity:0
})


// // ________________ ✅✅ Page2 ✅✅______________________


// tl.from("#left2>h1,#left2>p",{
//     x:-600,
//     duration:0.7,
//     delay:0.3,
//     stagger:0.4,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#left2",
//         scroller:"#main",
//         // markers:true,
//         start:"top 80%",
//         end:"top 70%",
//         scrub:2,
//     }
// })
// tl.from("#right2",{
//     x:600,
//     duration:0.7,
//     delay:0.3,
//     stagger:0.4,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#right2",
//         scroller:"#main",
//         // markers:true,
//         start:"top 80%",
//         end:"top 70%",
//         scrub:2,
//     }
// })



// // ________________ ✅✅ Page3 ✅✅______________________


// tl.from("#top3>h1,#top3>p",{
//     y:200,
//     duration:0.7,
//     delay:0.3,
//     stagger:0.4,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#top3",
//         scroller:"#main",
//         // markers:true,
//         start:"top 80%",
//         end:"top 70%",
//         scrub:2,
//     }
// })
// tl.from("#bottom3Left",{
//     x:-200,
//     duration:0.7,
//     delay:0.3,
//     stagger:0.4,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#bottom3Left",
//         scroller:"#main",
//         // markers:true,
//         start:"top 80%",
//         end:"top 70%",
//         scrub:2,
//     }
// })
// tl.from("#bottom3Right",{
//     x:200,
//     duration:0.7,
//     delay:0.3,
//     stagger:0.4,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#bottom3Right",
//         scroller:"#main",
//         // markers:true,
//         start:"top 80%",
//         end:"top 70%",
//         scrub:2,
//     }
// })
// tl.from("#bottom3Left img",{
//     y:600,
//     duration:0.7,
//     delay:1.4,
//     stagger:0.4,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#bottom3Left",
//         scroller:"#main",
//         // markers:true,
//         start:"top 80%",
//         end:"top 70%",
//         scrub:2,
//     }
// })

// // ________________ ✅✅ Page4 ✅✅______________________

// tl.from("#page4",{
//     pin:true,
// })

// tl.from(".page4Box",{
//     y:600,
//     duration:1.3,
//     delay:0.3,
//     stagger:0.4,
//     opacity:0,
//     scrollTrigger:{
//         trigger:".page4Box",
//         scroller:"#main",
//         // markers:true,
//         start:"top 140%",
//         end:"top 135%",
//         scrub:2,
//     }
// })

// // ________________ ✅✅ Page5 ✅✅______________________



tl.from(".left5CheckBox",{
    x:-300,
    duration:1.3,
    delay:0.3,
    stagger:0.6,
    opacity:0,
    scrollTrigger:{
        trigger:".left5CheckBox",
        scroller:"#main",
        // markers:true,
        start:"top 50%",
        end:"top 40%",
        scrub:2,
    }
})

tl.from("#right5 h4,#right5 h1,#right5 input,#right5 button",{
    y:600,
    duration:1.3,
    delay:0.3,
    stagger:0.6,
    opacity:0,
    scrollTrigger:{
        trigger:"#right5",
        scroller:"#main",
        // markers:true,
        start:"top 50%",
        end:"top 40%",
        scrub:2,
    }
})


// // ________________ ✅✅ Page6 ✅✅______________________



// tl.from("#head6",{
//     y:100,
//     duration:1.3,
//     delay:0.3,
//     stagger:0.6,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#head6",
//         scroller:"#main",
//         // markers:true,
//         start:"top 80%",
//         end:"top 70%",
//         scrub:2,
//     }
// })
// tl.from("#left6>img",{
//     scale:2,
//     duration:1.3,
//     delay:0.3,
//     rotate:360,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#head6",
//         scroller:"#main",
//         // markers:true,
//         start:"top 80%",
//         end:"top 70%",
//         scrub:2,
//     }
// })

// tl.from("#right6Head img,#right6Head h1,#right6Data,#right6Btn",{
//     x:100,
//     duration:1.3,
//     delay:0.3,
//     stagger:0.6,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#head6",
//         scroller:"#main",
//         // markers:true,
//         start:"top 75%",
//         end:"top 70%",
//         scrub:2,
//     }
// })



// // ________________ ✅✅ Page7 ✅✅______________________



tl.from("#page7Head",{
    y:100,
    duration:1.3,
    delay:0.3,
    stagger:0.6,
    opacity:0,
    scrollTrigger:{
        trigger:"#page7Head",
        scroller:"#main",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:2,
    }
})

tl.from(".main7BoxLeft",{
    x:400,
    duration:1.3,
    delay:0.3,
    stagger:0.6,
    opacity:0,
    scrollTrigger:{
        trigger:"#page7Head",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:2,
    }
})

tl.from(".main7BoxCenter",{
    scale:0,
    duration:1.3,
    delay:0.3,
    stagger:0.6,
    opacity:0,
    scrollTrigger:{
        trigger:"#page7Head",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:2,
    }
})

tl.from(".main7BoxRight",{
    x:-400,
    duration:1.3,
    delay:0.3,
    stagger:0.6,
    opacity:0,
    scrollTrigger:{
        trigger:"#page7Head",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:2,
    }
})


// // ________________ ✅✅ Page8 ✅✅______________________



tl.from("#page8 h1",{
    x:200,
    duration:1.7,
    delay:0.3,
    stagger:0.6,
    opacity:0,
    scrollTrigger:{
        trigger:"#page8 h1",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:2,
    }
})

tl.from("#main8 img",{
    y:200,
    duration:1.7,
    delay:0.3,
    stagger:0.6,
    opacity:0,
    scrollTrigger:{
        trigger:"#main8 img",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:2,
    }
})




// // ________________ ✅✅ Page9 ✅✅______________________



tl.from("#top9head h1",{
    x:100,
    duration:1.3,
    delay:0.3,
    stagger:0.6,
    opacity:0,
    scrollTrigger:{
        trigger:"#top9head",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:2,
    }
})

tl.from("#top9img img",{
    scale:0,
    duration:1.3,
    delay:0.3,
    stagger:0.6,
    opacity:0,
    scrollTrigger:{
        trigger:"#top9img",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:2,
    }
})


tl.from("#left9Data h4,#left9Data h1,#left9Data p,#left9Btn button",{
    x:100,
    duration:1.3,
    delay:0.3,
    stagger:0.6,
    opacity:0,
    scrollTrigger:{
        trigger:"#bottom9Left",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:2,
    }
})

tl.from("#bottom9Right img",{
    scale:0,
    duration:1.3,
    delay:0.3,
    opacity:0,
    scrollTrigger:{
        trigger:"#bottom9Left",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:2,
    }
})
