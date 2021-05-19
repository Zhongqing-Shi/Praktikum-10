let lebenslauf=document.getElementById("lebenslauf");
lebenslauf.addEventListener("animationend", end);

function fadeout(){
    //lebenslauf= document.getElementById("lebenslauf");
    lebenslauf.style.animation="fade 1s";
}


function end(){
    //lebenslauf= document.getElementById("lebenslauf");
    lebenslauf.style.animation="";
}

function animation(){
    lebenslauf.innerText="SDFSDFSDFSDfs";
    fadeout();
}

$(document).ready(function(){
    $(".menu-btn").click(function(){
        $(".menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    $(".carousel").owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        /*responsive:{
            0:{
                items:1,
                nav:flase
            },
            600:{
                items:2,
                nav:flase
            },
            1000:{
                items:3,
                nav:flase
            }
        }*/
    });
})
    


