sec1Animation()
sec2Animation()
sec3Animation()
sec4Animation()
sec5Animation()
sec6Animation()
sec7Animation()
sec8Animation()
imgSocial()
footAnimation()

function sec1Animation() {
    var nav2 = document.querySelectorAll('.section1 #nav2 h2')

    var tl = gsap.timeline()

    // tl.from("#nav1 img", {
    //     duration: 0.6,
    //     scale: 0.4,
    //     opacity: 0
    // })

    gsap.from("#nav1 h1", {
        x: -15,
        duration: 0.6,
        delay: 0.2,
        opacity: 0,
        ease: "none"
    })

    tl.from("#nav1 button", {
        duration: 0.5,
        opacity: 0,
        delay: 0.6,
        scale: 0
    })

    tl.from(nav2, {
        y: -30,
        duration: 0.3,
        opacity: 0,
        stagger: 0.1
    })

    tl.from(".section1 #nav2 button", {
        duration: 0.8,
        opacity: 0
    })
}

function sec2Animation() {

    gsap.from(".section2", {
        y: 10,
        duration: 1.5,
        opacity: 0,
        delay: 1.5,
        scrollTrigger: {
            trigger: ".section2",
            start: "top center",
            end: "20"
        }
    })

    gsap.from(".section2 button", {
        duration: 0.8,
        scale: 0,
        opacity: 0,
        scrollTrigger: {
            trigger: ".section2",
            start: "top 40",
            end: "20"
        }
    })
}

function sec3Animation() {

    gsap.to(".section3 #logos", {
        transform: "translateX(-130%)",
        duration: 16,
        repeat: -1,
        ease: "none"
    })
}

function sec4Animation() {

    gsap.from(".section4 .cards", {
        y: 8,
        opacity: 0,
        duration: 1.8,
        scrollTrigger: {
            trigger: ".section3",
            start: "top 20%",
            end: 0
        }
    })
}

function sec5Animation() {

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section5",
            duration: 2.5,
            start: "top 40%",
            end: "top -60%",
            scrub: 3,
            ease: "none"
        }
    })

    tl.from(".section5 p, .section5 .heading", {
        y: 8,
        opacity: 0,
        duration: 1
    })

    tl.from(".card1.left", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "anim1")

    tl.from(".card2.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "anim1")

    tl.from(".card3.left", {
        x: -300,
        opacity: 0,
        duration: 1,
        delay: 1
    }, "anim2")

    tl.from(".card4.right", {
        x: 300,
        opacity: 0,
        duration: 1,
        delay: 1
    }, "anim2")
}

function sec6Animation() {

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section6",
            start: "top 20%",
            end: "top -40%",
            ease: "none",
            scrub: 10
        }
    })

    tl.from(".section6 p", {
        y: 28,
        duration: 1,
        opacity: 0
    })

    tl.from(".section6 .cards #card1", {
        y: 150,
        duration: 1,
        opacity: 0
    })

    tl.from(".section6 .cards #card2", {
        y: 150,
        duration: 1,
        opacity: 0
    })

    tl.from(".section6 .cards #card3", {
        y: 150,
        duration: 1,
        opacity: 0
    })

    tl.from(".section6 .cards #card4", {
        y: 150,
        duration: 1,
        delay: 1,
        opacity: 0
    })

    tl.from(".section6 .cards #card5", {
        y: 150,
        duration: 1,
        opacity: 0
    })

    tl.from(".section6 .cards #card6", {
        y: 150,
        duration: 1,
        opacity: 0
    })
}

function sec7Animation() {

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section7",
            start: "top 50%",
            end: "top 0%",
            ease: "none",
            scrub: 3
        }
    })

    tl.from(".section7 #right #top", {
        y: -40,
        opacity: 0,
        duration: 2
    })

    tl.from(".section7 #right #bottom .left", {
        x: -40,
        opacity: 0,
        duration: 1
    }, "anime1")

    tl.from(".section7 #right #bottom .right", {
        x: 40,
        opacity: 0,
        duration: 1
    }, "anime1")
}

function sec8Animation() {

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section8",
            start: "top 50%",
            end: "top -10%",
            ease: "none",
            scrub: 3
        }
    })

    tl.from(".section8 p, .section8 #top", {
        y: 20,
        opacity: 0,
        duration: 1
    })

    tl.from(".section8 .cards", {
        y: 40,
        opacity: 0,
        duration: 1
    })
}

function imgSocial() {
    var img = document.querySelector('.section8 img')
    var social = document.querySelector('.section8 .social')


    img.addEventListener('mouseover', function () {
        gsap.to(social, {
            duration: 0.3,
            scale: 1.1
        })
    })

    img.addEventListener('mouseleave', function () {
        gsap.to(social, {
            duration: 0.3,
            scale: 1
        })
    })
}

function footAnimation() {
    var foot = document.querySelector('footer')
    var footh1 = document.querySelector('footer h1')

    var yoo = footh1.textContent

    var splitted = yoo.split('')
    var clutter = ""
    splitted.forEach(function (dets) {
        clutter += `<p>${dets}</p>`
    })

    footh1.innerHTML = clutter
    console.log(foot)

    gsap.from("footer h4", {
        x: -55,
        duration: 1.5,
        opacity: 0,
        ease: "none"
    })

    gsap.from("footer h1 p", {
        y: 25,
        duration: 1,
        delay: 0.5,
        opacity: 0,
        stagger: 0.1,
        repeat: -1,
        yoyo: true,
        ease: "steps(5)"
    })
}

