const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var timeout;
var crsr=document.querySelector("#cursor")
function cursorChaptaKaro(){
    var xscale=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;

    window.addEventListener("mousemove",function(dets){
        clearTimeout(timeout);
        xscale=gsap.utils.clamp(.8,1.2,dets.clientX-xprev);
        yscale=gsap.utils.clamp(.8,1.2,dets.clientY-yprev);

        xprev=dets.clientX;
        yprev=dets.clientY;
        circleMouseFollower(xscale,yscale)

        timeout=setTimeout(() => {
            crsr.style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`
        }, 100);
    })
}
function circleMouseFollower(xscale,yscale){
window.addEventListener("mousemove",function(dets){
    crsr.style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`
})
}
function firstPageAnim(){
    var tl=gsap.timeline();
    tl.from("#nav",{
        y:'15',
        opacity:0,
        duration:1,
        ease:Expo.easeInOut
    })
    .to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        delay:-1,
        stagger:.2
    })
    .from("#homefooter",{
        // y:'0',
        opacity:0,
        delay:-1,
        duration:1,
        stagger:.2,
        ease:Expo.easeInOut
    })
}
var kuchbhi= document.querySelectorAll(".elem")
kuchbhi.forEach(function(elem){
    elem.addEventListener("mousemove",function(dets){
        var diff=(dets.clientY-elem.getBoundingClientRect().top);
        gsap.to(elem.querySelector("img"),{
            ease:Power1.easeOut,
            opacity:1,
            top:diff,
            left:dets.clientX   
        });
    });
});

cursorChaptaKaro()
firstPageAnim();