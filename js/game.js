"use strict"

$(document).ready(function(){

    $(".menu-btn").click(function(){
        $(".menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

})

//Roulette
let roulette = {
    options: [], //大转盘奖品名称
    bRotate: false, //false:停止;ture:旋转
    dtimer: null, //存放间隔动画的定时器，用来清除运动   
    timeInterval: 2, //定时器的间隔时间，旋转角度的速度，越小表示速度越快
    deg: 0, //角度，和css设置对应,初始为0
    speed: 0, //角度变化增量
    turnNum: 4, //旋转总圈数
    sigalTurnNum: 1 //当前累计圈数
  };
  let lottery = document.getElementById("lottery");
  //旋转转盘总角度 angles,奖品位置; txt：提示语;
  function rotateFn(angles, txt) {
    /*清除上一个定时器*/
    clearInterval(roulette.dtimer);
    roulette.dtimer = null;
    //变化累计角度
    roulette.deg = roulette.deg + roulette.speed;
  
    if (roulette.deg < angles + 1440) {
      lottery.style.transform = "rotate(" + roulette.deg + "deg)";
      if (roulette.deg % 360 === 0) { //判断第几圈
        roulette.sigalTurnNum += 1;
        if (roulette.sigalTurnNum === roulette.turnNum - 2) { //到最后二圈
          roulette.speed = 3;
        } else if (roulette.sigalTurnNum === roulette.turnNum - 1) { //到最后一圈
          roulette.speed = 2;
        };
      }
      if (roulette.sigalTurnNum === roulette.turnNum - 1) { //到最后1圈圈
        roulette.speed = (roulette.speed <= 1.8) ? 1.8 : (roulette.speed - 1.2);
      };
      roulette.dtimer = setInterval(function() {
        rotateFn(angles, txt);
      }, roulette.timeInterval);
    } else {
      alert(txt);
      roulette.bRotate = !roulette.bRotate;
    }
  };
  //window.onload = function () { //jsfiddle里这句会执行不起来，因此屏蔽
  //动态添加大转盘的奖品的提示语
  roulette.options = ["chicken", "shrimp", "egg", "beef"];
  document.getElementById("pointer").onclick = function() {
    if (roulette.bRotate) return false;
    roulette.bRotate = !roulette.bRotate;
    //初始化
    roulette.deg = 0;
    roulette.speed = 4;
    roulette.sigalTurnNum = 0;
    // 获取随机数(奖品个数范围内)
    var item = rnd(1, roulette.options.length);
    // var item =0;
    //指针转到指定位置的中间,这个角度为逆时针方向的，要根据顺时针方向的定位前面要取负数
    var angles = -(item - 1) * (360 / roulette.options.length);
    console.log(item);
    rotateFn(angles, roulette.options[item - 1]);
  }
  //}
  function rnd(n, m) {
    var random = Math.floor(Math.random() * (m - n + 1) + n);
    return random;
  }