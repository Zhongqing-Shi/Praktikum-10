let lebenslauf=document.getElementById("lebenslauf");
lebenslauf.addEventListener("animationend", end);

function fadeout(){
    lebenslauf= document.getElementById("lebenslauf");
    lebenslauf.style.animation="fade 1s";
}


function end(){
    lebenslauf= document.getElementById("lebenslauf");
    lebenslauf.style.animation="";
}

function animation(){
    document.getElementById("lebenslauf").innerText="SDFSDFSDFSDfs";
    fadeout();
}
