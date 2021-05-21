"use strict";

let lebenslauf=document.getElementById("lebenslauf");
lebenslauf.addEventListener("animationend", end);
let skills= "<div class='bars'><div class='info'><span>Java</span><span>70%</span></div>\
            <div class='line java'></div></div><div class='bars'><div class='info'><span>HTML</span><span>60%</span></div>\
            <div class='line html'></div></div><div class='bars'><div class='info'><span>CSS</span><span>60%</span>\
            </div><div class='line css'></div></div><div class='bars'><div class='info'><span>Javascript</span><span>70%</span>\
            </div><div class='line js'></div></div><div class='bars'>\
            <div class='info'><span>MySQL</span><span>40%</span></div><div class='line sql'></div></div>";
let bachelor= 

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

function mailcheck() {
    let mail=document.getElementById("mail").value;
    if(!mail.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/) && mail!=""){
        alert("Email Adresse is wrong");
        setTimeout(function(){document.getElementById("mail").focus();}, 0);
        
    }  
}

function message() {
    let eingabe=document.getElementById("message").value;
    if(eingabe.length>300){
        alert("more than 300 words");
        document.getElementById("message").value=eingabe.substring(0,300);
    }
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
    


