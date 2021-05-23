"use strict";

let intro=document.getElementById("portfolio");
intro.addEventListener("animationend", end);
let skills= "<div class='bars'><div class='info'><span>Java</span><span>70%</span></div>\
            <div class='line java'></div></div><div class='bars'><div class='info'><span>HTML</span><span>60%</span></div>\
            <div class='line html'></div></div><div class='bars'><div class='info'><span>CSS</span><span>60%</span>\
            </div><div class='line css'></div></div><div class='bars'><div class='info'><span>Javascript</span><span>70%</span>\
            </div><div class='line js'></div></div><div class='bars'>\
            <div class='info'><span>MySQL</span><span>40%</span></div><div class='line sql'></div></div>";

let bachelorimgsrc =["image/bachelor/bachelor1.jpg",
                    "image/bachelor/bachelor2.jpg",
                    "image/bachelor/bachelor3.jpg",
                    "image/bachelor/bachelor4.jpg",
                    "image/bachelor/bachelor5.jpg"];

let masterimgsrc=["image/master/master1.jpg",
                  "image/master/master2.jpg",
                  "image/master/master3.jpg",
                  "image/master/master4.jpg",
                  "image/master/master5.jpg"];

let trainingimgsrc=["image/training/julia.jpg",
                  "image/training/michelle.jpg",
                  "image/training/elena.jpg",
                  "image/training/alex.jpg",
                  "image/training/michael.jpg"];


  

function fadeout(){
    intro.style.animation="fade 2s";
}


function end(){
    intro.style.animation="";
}

function lockclass(event){
    $(".div-aboutpage1 a").removeClass("colorlock");
    $(event).addClass("colorlock");
}

function contentChange(ar){
    let temp=document.getElementsByClassName("imgdisplay");
    document.getElementById("carousel").style.display="";
    for(let i=0;i<5;i++){
        temp[i].src=ar[i];
    }
    document.getElementById("resume").innerHTML="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, \
                                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore \
                                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam \
                                                    et justo duo dolores et ea rebum. Stet clita kasd gubergreno sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem \
                                                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy \
                                                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, \
                                                    sed diam voluptua. At vero eos et accusam et justo duo dolores etea rebum. Stet clita kasd gubergren, no sea takimata sanctus estLorem ipsum dolor sit amet.";
}

function skillsdisplay(){
    document.getElementById("resume").innerHTML=skills;
    document.getElementById("carousel").style.display="none";
}

function aclick(event,ar){
    fadeout();
    lockclass(event);
    contentChange(ar);
}

function skillclick(event){
    fadeout();
    lockclass(event);
    skillsdisplay();
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

    lockclass("#bachelor");

    $(".menu-btn").click(function(){
        $(".menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    $(".carousel").owlCarousel({
        //margin:20,
        loop:false,
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
    


