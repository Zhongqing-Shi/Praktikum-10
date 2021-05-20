"use strict";

let lebenslauf=document.getElementById("lebenslauf");
lebenslauf.addEventListener("animationend", end);
let skills= "<div class='bars'><div class='info'><span>Java</span><span>70%</span></div>\
            <div class='line java'></div></div><div class='bars'><div class='info'><span>HTML</span><span>60%</span></div>\
            <div class='line html'></div></div><div class='bars'><div class='info'><span>CSS</span><span>60%</span>\
            </div><div class='line css'></div></div><div class='bars'><div class='info'><span>Javascript</span><span>70%</span>\
            </div><div class='line js'></div></div><div class='bars'>\
            <div class='info'><span>MySQL</span><span>40%</span></div><div class='line sql'></div></div>";

function fadeout(){
    //lebenslauf= document.getElementById("lebenslauf");
    lebenslauf.style.animation="fade 2s";
}


function end(){
    //lebenslauf= document.getElementById("lebenslauf");
    lebenslauf.style.animation="";
}

function animation(event){
    lebenslauf.innerHTML=event;
    fadeout();
}

$(document).ready(function(){

    $(".menu-btn").click(function(){
        $(".menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    $(".carousel").owlCarousel({
        //margin:20,
        loop:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
})
    


