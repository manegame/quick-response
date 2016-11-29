/*jslint browser: true, devel: true, node: true, nomen: true, plusplus: true*/
/*global $, jQuery*/

(function () {

  "use strict";
  
  // Require jQuery
  global.$                = require("jquery");
    
  var shared              = require("./shared"),
      debounce            = require('debounce');

   require("dragscroll");
  
  $(function () {
    
    console.log("READY");
        
    //    var swiper = new Swiper('.swiper-container', {
    //      speed: 1000
    //      autoplay: 40
    //    });

    var DELAY   = 200, //MS
        clicks  = 0,
        timer   = null; 

    $("img")
        .on("click", function(e){

            clicks++;  //count clicks

            if(clicks === 1) {

                timer = setTimeout(function() {

                  $(this).find('img').toggleClass('shrink'); //perform single-click action

                    clicks = 0;  //after action performed, reset counter

                }, DELAY);

            } else {

                clearTimeout(timer);  //prevent single-click action

                console.log($(this)); //perform single-click action

                // $(this).toggleClass('grow');  //perform double-click action

                clicks = 0;  //after action performed, reset counter
            }

        })
        .on("dblclick", function(){
          e.preventDefault();  //cancel system double-click event
        });

    // $('img').on('click', function(){
    //   $(this).toggleClass('shrink');
    // });



  });

}());