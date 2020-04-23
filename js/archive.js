$(function() {
  $.fn.flexgal = function(){
    $('body').prepend('<div id="fullimage" style="display: none"></div>')
    $(this).addClass('flex-gallery');
    $('img', this).parent().addClass('image-rate');

   $('.image-rate').click(function() {
     color(); // fixes background of fullimage
     $('#fullimage').html(""); // fixes multiple appends
     $('img', this).clone().prependTo('#fullimage');
     $("#fullimage").fadeIn(200);
   });

   $('#fullimage').click(function() {
     $(this).fadeOut(200, function() {
       $('img',this).remove();
     });
   });
 }
}(jQuery));

$(function() { color(); })

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

async function color() {
  var bg, fg;
  while (true) {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();

    // 6am - 10pm
    if (h >= 6 && h < 22) { bg = "#FFFFFF"; fg = "#000000"; }
    if (h >= 22 || h < 6) { bg = "#000000"; fg = "#FFFFFF"; }

    $('body').css('backgroundColor', bg);
    $('p').css('color', fg);
    $('.modal').css('backgroundColor', bg);
    $('#fullimage').css("backgroundColor", bg);
    await sleep(60000);
  }
}

function go(x) {
  if (x == 1) { document.getElementById("drop1").classList.toggle("show"); }
  else { document.getElementById("drop2").classList.toggle("show"); }
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn1')) {
    var dropdowns = document.getElementsByClassName("dc1");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns = document.getElementsByClassName("dc2");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$(".dropdown1").mouseenter( function() { $(".top-card").css("background-color", "#3CB37133"); });
$(".dropdown1").mouseout( function() { $(".top-card").css("background-color", "transparent"); });

$(".dropdown2").mouseenter( function() { $(".btm-card").css("background-color", "#3CB37133"); });
$(".dropdown2").mouseout( function() { $(".btm-card").css("background-color", "transparent"); });

var b = true;
var pre = '<figure class="image-rate"> <img src="img/';
var post = '.jpg"></figure>';
var _0 = [2, 4, 6, 8, 10];
var _1 = [1, 3, 5, 7, 9];
var _2 = [101, 3, 51, 7, 93];
var _3 = [21, 3, 85, 7, 9];
var _4 = [31, 33, 5, 7, 89];
var _5 = [41, 43, 25, 7, 9];
var _6 = [41, 23, 15, 7, 19];
var _7 = [61, 33, 5, 7, 9];
var _8 = [71, 93, 5, 7, 109];
var _9 = [81, 13, 75, 7, 9];

var last;

function query(n) {
  if (b == true) { $(".top-card, .btm-card").css("border", "none"); b = false; }
  var card = (n <= 4) ? ".top-card" : ".btm-card";
  var k = $(card)[0].childElementCount;

  if (k == 0) {
    $("#fullimage").remove();
    var l = eval("_" + n);
    var x = l.length;
    for (var i = 0; i < x; i++) { $(card).append(pre + l[i] + post); }
    last = n;
    $('#container').flexgal();
  }
  else if (n != last) { $(card)[0].innerHTML = ""; query(n); }
}
