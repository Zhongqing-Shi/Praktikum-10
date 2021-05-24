"use strict"

let dish=document.getElementById("dish");
dish.addEventListener("animationend", end);

let chicken="<h5>Coca-cola Chicken Wings</h5>\
            <p><strong>Ingredients:</strong><br>\
            ~ 500g chicken wings, around 12 to 14 middle wings <br>\
            ~ 600ml coca cola <br>\
            ~ 1 large piece of ginger <br>\
            ~ 4 scallions, divided <br>\
            ~ 1/2 tbsp. cooking oil <br>\
            ~ a small pinch of salt <br>\
            ~ 1 dried chili pepper (optional for a mild spicy version) <br>\
            ~ toasted white sesame seeds for garnishing <br><br>\
            <strong>Steps:</strong><br>\
            1. Pork some small holes on the back of the chicken wings so we can keep a nice shape after cooked. <br>\
            2. Add around 1/2 tablespoon of cooking oil in a pan along with some ginger slices and scallion sections and fry the chicken wings until slightly browned. <br>\
            3. At the same time, cook the cola in another pot with the remaining coca cola, ginger slices and scallion. <br>\
            4. Add the cola to the chicken wings. Simmer for 10 minutes and then turn up fire and cook for another 10 minutes. During this process, pick up ginger, scallion and remove the floats on the surface.</p>";

let shrimp ="<h5>Fried Shrimp with Vegetables</h5>\
            <p><strong>Ingredients:</strong><br>\
            ~ 20 peeled and deveined shrimp <br>\
            ~ 3 tbsp. vegetable cooking oil , divided <br>\
            ~ 2 cloves garlic , finely chopped <br>\
            ~ 1 tbsp. fish sauce <br>\
            ~ a small pinch salt <br>\
            ~ 1/2 tbsp. sesame oil <br>\
            ~ 4  asparagus , remove the hard ends <br>\
            ~ 3 button mushrooms , cut into small piece <br>\
            ~ 6 snow peas , cut into halves <br><br>\
            <strong>Steps:</strong><br>\
            1. Devine the shrimp and marinate with salt, white pepper and sugar. Set aside for 10 minutes. <br>\
            2. Heat around 2 tablespoons of cooking oil in wok and fry the shrimp until they begin change color. Transfer out. <br>\
            3. No need to clean the wok, pour in the left 1 tablespoon of cooking oil, fry garlic until aromatic. Place mushroom and bell pepper for around half minute until slightly seared and softened. <br>\
            4. Add asparagus and snow bean pieces. Season with a small pinch of salt.\
            5. Return the shrimp and drizzle the fishsauce and sesame oil. Quick fry (around 10 fries) and transfer out immediately </p>"

let egg= "<h5>Scrambled Eggs with Tomato</h5>\
          <p><strong>Ingredients:</strong><br>\
          ~ 2 eggs <br>\
          ~ 2 middle size tomatoes , cut into small wedges <br>\
          ~ small pinch of salt and pepper , for egg liquid <br>\
          ~ 1/4 cup oil <br>\
          ~ 1/8 tsp. sugar <br>\
          ~ 1/2 tsp. salt , or to taste <br>\
          ~ 1 scallion , cut into inch pieces <br><br>\
          <strong>Steps:</strong><br>\
          1. In a small bowl, crack and add a small pinch of salt and pepper. Whisk until there is a small layer of fine bubbles and the mixture becomes slightly white. <br>\
          2. Cut tomato in halves and remove the core and then further cut into small wedges. <br>\
          3. Heat up oil in wok until really hot, stir egg mixture in. Wait for seconds until the egg liquid firms. Turn off the fire immediately and then break the egg into small pieces. Transfer the egg out and leave the oil in. <br>\
          4. Add tomato wedges in, fry until juicy. Return egg pieces, add salt, sugar and scallion. Do a quick stir fry to combine everything well. Serve immediately.</p>";

let beef= "<h5>Beef Curry</h5>\
            <p><strong>Ingredients:</strong><br>\
            ~ 1 kg slow cook beef cuts , cut into 3 cm small cubs<br>\
            ~ 1 carrot , diced <br>\
            ~ 1 large potatoes , diced <br>\
            ~ 1/2 white onion , cut into small pieces <br>\
            ~ 2 tbsp. vegetable cooking oil , divided <br>\
            ~ 100 g golden curry paste , one box <br>\
            ~ 1 cup warm water <br>\
            ~ water as needed <br>\
            ~ Steamed rice for serving <br>\
            ~ 100ml coconut milk <br><br>\
            <strong>Steps:</strong><br>\
            1. Heat the pot until really hot, spread cooking oil in and sauté the beef for 2-3 minutes until slightly browned. Then add 1 cup warm water and cook the beef for 20 minutes, with lid covered <br>\
            2. In another pan, add another tablespoon of cooking oil and fry the sweet onion until slightly browned. Optional but recommended <br>\
            3. Place potato, carrot and fried onion, golden curry paste and coconut milk until all of the ingredients almost covered. Cook for another 15 to 20 minutes until the vegetables are soft. Open the lid and heat until the sauce is well thickened. <br>\
            4. Serve with steamed rice</p>";


let map=new Map();
map.set("chicken",chicken);
map.set("shrimp",shrimp);
map.set("egg",egg);
map.set("beef",beef);


function fadeout(){
    dish.style.animation="fade 3s";
}


function end(){
    dish.style.animation="";
}

function showrecipe(recipe){
    fadeout();
    dish.innerHTML=map.get(recipe);
    dish.style.visibility="visible";
}

$(document).ready(function(){

    $(".menu-btn").click(function(){
        $(".menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

})

//Roulette
let roulette = {
    options: [], 
    bRotate: false, 
    dtimer: null,  
    timeInterval: 2, 
    deg: 0, 
    speed: 0, 
    turnNum: 4, 
    sigalTurnNum: 1 
  };
  let lottery = document.getElementById("lottery");
  
  function rotateFn(angles, txt) {
    
    clearInterval(roulette.dtimer);
    roulette.dtimer = null;
    
    roulette.deg = roulette.deg + roulette.speed;
  
    if (roulette.deg < angles + 1440) {
      lottery.style.transform = "rotate(" + roulette.deg + "deg)";
      if (roulette.deg % 360 === 0) { 
        roulette.sigalTurnNum += 1;
        if (roulette.sigalTurnNum === roulette.turnNum - 2) { 
          roulette.speed = 3;
        } else if (roulette.sigalTurnNum === roulette.turnNum - 1) { 
          roulette.speed = 2;
        };
      }
      if (roulette.sigalTurnNum === roulette.turnNum - 1) { 
        roulette.speed = (roulette.speed <= 1.8) ? 1.8 : (roulette.speed - 1.2);
      };
      roulette.dtimer = setInterval(function() {
        rotateFn(angles, txt);
      }, roulette.timeInterval);
    } else {
      
      setTimeout(function(){showrecipe(txt)},1000);
      roulette.bRotate = !roulette.bRotate;
    }
  };

  roulette.options = ["chicken", "shrimp", "egg", "beef"];
  document.getElementById("pointer").onclick = function() {
    if (roulette.bRotate) return false;
    roulette.bRotate = !roulette.bRotate;
    
    roulette.deg = 0;
    roulette.speed = 4;
    roulette.sigalTurnNum = 0;
    
    var item = rnd(1, roulette.options.length);

    var angles = -(item - 1) * (360 / roulette.options.length);
    console.log(item);
    rotateFn(angles, roulette.options[item - 1]);
  }
  
  function rnd(n, m) {
    var random = Math.floor(Math.random() * (m - n + 1) + n);
    return random;
  }