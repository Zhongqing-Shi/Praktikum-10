"use strict";

let lebenslauf=document.getElementById("lebenslauf");
lebenslauf.addEventListener("animationend", end);
let skills= "<div class='bars'><div class='info'><span>Java</span><span>70%</span></div>\
            <div class='line java'></div></div><div class='bars'><div class='info'><span>HTML</span><span>60%</span></div>\
            <div class='line html'></div></div><div class='bars'><div class='info'><span>CSS</span><span>60%</span>\
            </div><div class='line css'></div></div><div class='bars'><div class='info'><span>Javascript</span><span>70%</span>\
            </div><div class='line js'></div></div><div class='bars'>\
            <div class='info'><span>MySQL</span><span>40%</span></div><div class='line sql'></div></div>";

let bachelor= "<div class='card'><div class='box'>\
<img src='image/bachelor/bachelor1.jpg' alt=''></div></div><div class='card'>\
<div class='box'><img src='image/bachelor/bachelor2.jpg' alt=''></div>\
</div><div class='card'><div class='box'><img src='image/bachelor/bachelor3.jpg' alt=''>\
</div></div><div class='card'><div class='box'><img src='image/bachelor/bachelor4.jpg' alt=''>\
</div></div><div class='card'><div class='box'><img src='image/bachelor/bachelor5.jpg' alt=''>\
</div></div><div class='card'><div class='box'><img src='image/bachelor/bachelor6.jpg' alt=''>\
</div></div><br></br>";

/*"<div class='carousel owl-carousel'><div class='card'><div class='box'>\
                <img src='image/bachelor/bachelor1.jpg' alt=''></div></div><div class='card'><div class='box'>\
                <img src='image/bachelor/bachelor2.jpg' alt=''></div></div><div class='card'><div class='box'>\
                <img src='image/bachelor/bachelor3.jpg' alt=''></div></div><div class='card'><div class='box'>\
                <img src='image/bachelor/bachelor4.jpg' alt=''></div></div><div class='card'><div class='box'>\
                <img src='image/bachelor/bachelor5.jpg' alt=''></div></div><div class='card'><div class='box'>\
                <img src='image/bachelor/bachelor6.jpg' alt=''></div></div></div><br><p>\
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\
                sed diam nonumy eirmod tempor invidunt ut labore et dolore\
                magna aliquyam erat, sed diam voluptua. At vero eos et accusamet justo duo dolores et ea rebum. Stet clita kasd gubergren,\
                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem\
                ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.\
                At vero eos et accusam et justo duo dolores etea rebum. Stet clita kasd gubergren,\
                no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>";*/

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

function lockclass(event){
    $(".div-aboutpage1 a").removeClass("colorlock");
    $(event).addClass("colorlock");
}

function aclick(event){
    fadeout();
    lockclass(event);
    let a=document.getElementsByClassName("liuuu");
    a[0].src="image/master/master2.jpg";
    a[1].src="image/master/master2.jpg";
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
        //loop:true,
        //autoplayTimeout:2000,
        //autoplayHoverPause:true,
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
    


