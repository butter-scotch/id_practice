"use strict";

{
  const menubar = document.getElementById("menubar");
  const menu = document.getElementById("navheader-content");

  menubar.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  // ----- slideshow  -------- //

  const slideshow1 = document.getElementById("slideshow1");
  const slideshow2 = document.getElementById("slideshow2");
  const slideshowSp1 = document.getElementById("slideshowSp1");
  const slideshowSp2 = document.getElementById("slideshowSp2");
  const slideshow_src = new Array(
    "image/main_visual_13-0x0.jpg",
    "image/main_visual_2-0x0.jpg",
    "image/main_visual_6-0x0.jpg",
    "image/main_visual_7-0x0.jpg",
    "image/main_visual_111-0x0.jpg"
  );
  let num = 0;
  let flg = 0;

  setInterval(function () {
    num = num < slideshow_src.length - 1 ? num + 1 : 0;
    flg = flg == 0 ? 1 : 0;
    if (flg == 0) {
      slideshow1.src = slideshow_src[num];
      slideshow1.className = "fadein";
      slideshow2.className = "fadeout";
      slideshowSp1.src = slideshow_src[num];
      slideshowSp1.className = "fadein";
      slideshowSp2.className = "fadeout";
    } else {
      slideshow2.src = slideshow_src[num];
      slideshow1.className = "fadeout";
      slideshow2.className = "fadein";
      slideshowSp2.src = slideshow_src[num];
      slideshowSp1.className = "fadeout";
      slideshowSp2.className = "fadein";
    }
  }, 4000);

  // const intervalId = setInterval(test, 4000);
  // function test(){
  //   num = num < slideshow_src.length - 1 ? num + 1 : 0;
  //   flg = flg == 0 ? 1 : 0;
  //   if (flg == 0) {
  //     slideshow1.src = slideshow_src[num];
  //     slideshow1.className = "fadein";
  //     slideshow2.className = "fadeout";
  //     slideshowSp1.src = slideshow_src[num];
  //     slideshowSp1.className = "fadein";
  //     slideshowSp2.className = "fadeout";
  //   } else {
  //     slideshow2.src = slideshow_src[num];
  //     slideshow1.className = "fadeout";
  //     slideshow2.className = "fadein";
  //     slideshowSp2.src = slideshow_src[num];
  //     slideshowSp1.className = "fadeout";
  //     slideshowSp2.className = "fadein";
  //   }
  // }未完

  // setInterval(function () {
  //   num = num < slideshow_src.length - 1 ? num + 1 : 0;
  //   flg = flg == 0 ? 1 : 0;
  //   if (flg == 0) {
  //     slideshowSp1.src = slideshow_src[num];
  //     slideshowSp1.className = "fadein";
  //     slideshowSp2.className = "fadeout";
  //   } else {
  //     slideshowSp2.src = slideshow_src[num];
  //     slideshowSp1.className = "fadeout";
  //     slideshowSp2.className = "fadein";
  //   }
  // }, 4000);

  // ------- scroll ------ //

  // function scrollTop(elem,duration){
  //   const newsArrow = document.getElementById(elem);

  //   newsArrow.addEventListener("click", function(){
  //     let currentY = pageYOffset;
  //     let step = duration/currentY > 1 ? 10 : 100;
  //     let timeStep = duration/currentY * step;
  //     let intervalID = setInterval(scrollUp, timeStep);

  //     function scrollUp(){
  //       currentY = pageYOffset;
  //       if(currentY === 0){
  //         clearInterval(intervalID);
  //       } else {
  //         scrollBy(0, -step);
  //       }
  //     }
  //   });
  // };

  // scrollTop("news-arrow", 1000);

  //    上と下は同じ

  function scrollTop(elem, duration) {
    const newsArrow = document.getElementById(elem);

    newsArrow.addEventListener("click", function () {
      let currentY = pageYOffset;
      let step = duration / currentY > 1 ? 10 : 100;
      let timeStep = (duration / currentY) * step;
      let intervalID = setInterval(function () {
        currentY = pageYOffset;
        if (currentY === 0) {
          clearInterval(intervalID);
        } else {
          scrollBy(0, -step);
        }
      }, timeStep);
    });
  }
  scrollTop("news-arrow", 1000);
  
}
