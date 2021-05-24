"use strict";

let intro=document.getElementById("intro");
let carousel=document.getElementById("carousel");
let picture=document.getElementById("pic");
let resume=document.getElementById("resume");

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

let bachelorresume =["Hello, my name is Zhongqing Shi. I'm from China. Here is where I got my Bachelor degree in machanical engineering,\
                        Dalian University of Technology, which locates in Dalian, a beautiful city by the sea and my hometown.<br><br>\
                        <strong>Mechanical Engineering (English), Bachelor</strong> (09/2010  – 06/2015) <br>\
                        <strong class='italic'>Dalian University of Technology</strong><br>\
                        » Graduation Design: The design of the injection Mold for the back cover of clock (CAD) <br><br>\
                        <strong>Internship as Constructor and Test Engineer</strong> (06/2014  – 08 /2014) <br>\
                        <strong class='italic'>TTS BoHai Machinery (Dalian) Co., Ltd, China</strong><br>\
                        » CAD Graphical Drawing <br>\
                        » Co-design of the processing operations <br>\
                        » Quality management: endurance test <br>", "Dalian University of Technology"];

let masterimgsrc=["image/master/master1.jpg",
                  "image/master/master2.jpg",
                  "image/master/master3.jpg",
                  "image/master/master4.jpg",
                  "image/master/master5.jpg"];

let masterresume = ["After I graduated, I decided to go to Germany to continue my study. Fortunately, I got a offer from KIT\
                    (Karlsruher Institut für Technologie), where I got my master degree also in mechanical engineering, major in \
                    automotive engineering and mechatronics.<br><br>\
                    <strong>Mechanical Engineering, Master</strong> (10/2016  – 04/2020)<br>\
                    <strong class='italic'>Karlsruher Institut für Technologie</strong><br>\
                    » Thesis:Developing a Decision Tool (Programming in C#) <br><br>\
                    <strong>Thesis (C# programming, in English)</strong> (10/2018–06/2019)<br>\
                    <strong class='italic'>Karlsruher Institut für Technologie</strong><br>\
                    » Multiple users can log in remotely (within the same LAN) <br>\
                    » The users can import files from Excel <br>\
                    » Establishing interactions with SQL database to store data <br></br>\
                    <strong>Vehicle Experiment</strong> (10/2017–02/2018)<br>\
                    <strong class='italic'>Karlsruher Institut für Technologie</strong><br>\
                    » Driving resistence testing <br>\
                    » Data analysing in dynamic driving <br>", "Karlsruher Institut für Technologie"];

let trainingimgsrc=["image/training/julia.jpg",
                  "image/training/michelle.jpg",
                  "image/training/elena.jpg",
                  "image/training/alex.jpg",
                  "image/training/michael.jpg"];

let trainingresume = ["During my master study, I realized that the traditional machanical engineering relys more and more on new \
                    technology, such as Information. So I always wanted to learn some programming knowledge. Finally, I got a chance  \
                    in Createment, where I can systematically learn how to programm. In addition, I have met a bunch of new friends here.<br><br>\
                    <strong>IT intensive Training</strong> (10/2018–06/2019)<br>\
                    <strong class='italic'>Createment GmbH</strong><br>\
                    » Front-End Development: Programming (HTML & CSS, JavaScript) <br>\
                    » Back-End Development: Programming (SQL, Java) <br>\
                    » Useful Tools: Github, Node <br>", "Colleagues from Createment"];
  
//animation fadeout
function fadeout(){
    intro.style.animation="fade 2s";
}

//stop animation
function end(){
    intro.style.animation="";
}

//lock the color of the navbar, when it is clicked on.
function lockclass(event){
    $(".div1-aboutpage a").removeClass("colorlock");
    $(event).addClass("colorlock");
}

//the corresponding content of resume is displayed
function contentChange(arimg, arresume){
    let temp=document.getElementsByClassName("imgdisplay");
    for(let i=0;i<5;i++){
        temp[i].src=arimg[i];
    }
    resume.innerHTML=arresume[0];
    picture.innerHTML=arresume[1];
    carousel.style.display="";
    picture.style.display="";
}

//the skills is displayed
function skillsdisplay(event){
    resume.innerHTML=skills;
    carousel.style.display="none";
    picture.style.display="none";
}

//the click-function of the navbar
function aclick(event,arimg,arresume){
    fadeout();
    lockclass(event);
    contentChange(arimg,arresume);
}

//the click-function of skills
function skillclick(event){
    fadeout();
    lockclass(event);
    skillsdisplay();
}

//check, whether the mailaddress is soild or not
function mailcheck() {
    let mail=document.getElementById("mail").value;
    if(!mail.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/) && mail!=""){
        alert("Email Adresse is wrong");
        setTimeout(function(){document.getElementById("mail").focus();}, 0);
    }  
}

//check the length of the message
function message() {
    let eingabe=document.getElementById("message").value;
    if(eingabe.length>300){
        alert("more than 300 words");
        document.getElementById("message").value=eingabe.substring(0,300);
    }
}


$(document).ready(function(){
    //the color of bachelor link is set, when html is loaded
    lockclass("#bachelor");

    //the header responsive design
    $(".menu-btn").click(function(){
        $(".menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    //the animation of the picture display in about me section
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
    


