var happyclients = 1234;
var happyclientsdisplay = happyclients.toLocaleString();
            
 function getRandomInt(){
var l = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
happyclients = happyclients + l;
happyclientsdisplay = happyclients.toLocaleString();
d = document.querySelector(".client")
 d.innerText = happyclientsdisplay;
            }

var today = 6784;
var todaydisplay = today.toLocaleString();

                        
function todayfunc(){
 var l = Math.floor(Math.random() * (120 - 4 + 1)) + 4;
  today = today + l;
  todaydisplay = today.toLocaleString();
  d = document.querySelector(".today")
d.innerText = "$" + todaydisplay;
 }


 var referals = 156;
var referalsdisplay = referals.toLocaleString();
 function referalsfunc(){
             var l = Math.floor(Math.random() * (1 - 1 + 1)) + 1;
             referals = referals + l;
             referalsdisplay = referals.toLocaleString();
             d = document.querySelector(".referals")
             d.innerText = referalsdisplay;
            }
var month = 205152;
var monthdisplay = month.toLocaleString();
 function monthfunc(){
             var l = Math.floor(Math.random() * (700 - 5 + 1)) + 5;
             month = month + l;
             monthdisplay = month.toLocaleString();
             d = document.querySelector(".month")
             d.innerText =   "$" + monthdisplay;
            }
  setInterval(getRandomInt,3000);
  setInterval(todayfunc,5000);
  setInterval(referalsfunc,10000);
  setInterval(monthfunc,5500);


let nCount = selector => {
  $(selector).each(function () {
    $(this)
      .animate({
        Counter: $(this).text()
      }, {
        // A string or number determining how long the animation will run.
        duration: 4000,
        // A string indicating which easing function to use for the transition.
        easing: "swing",
        /**
         * A function to be called for each animated property of each animated element. 
         * This function provides an opportunity to
         *  modify the Tween object to change the value of the property before it is set.
         */
        step: function (value) {
          $(this).text(Math.ceil(value));
        }
      });
  });
};

let a = 0;
$(window).scroll(function () {
  // The .offset() method allows us to retrieve the current position of an element  relative to the document
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
});



/**
 *
 *  sticky navigation
 *
 */

let navbar = $(".navbar");

$(window).scroll(function () {
  // get the complete hight of window
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});

