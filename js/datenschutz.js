"use strict"

$(document).ready(function(){

    $(".menu-btn").click(function(){
        $(".menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });
})