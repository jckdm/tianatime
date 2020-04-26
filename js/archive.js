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

var _0 = [54, 69, 70, 81, 86, 91, 92, 102, 103, 104, 105, 109, 180];
var _1 = [48, 49, 50, 51, 52, 53, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 71, 72, 73, 74, 75, 76, 78, 79, 80, 85, 86, 87, 88, 89, 90, 91, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 106, 107, 108, 110, 171, 172, 173, 177, 178, 179];
var _2 = [49, 50, 61, 67, 70, 71, 72, 74, 77, 80, 85, 86, 95, 97, 106, 109, 112, 174, 175, 176, 177, 178, 179, 180];
var _3 = [49, 50, 51, 52, 53, 55, 56, 58, 59, 60, 61, 65, 70, 71, 73, 78, 79, 85, 87, 88, 89, 90, 93, 94, 100, 101, 107, 108];
var _4 = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112];
var _5 = [171, 172, 173, 174, 175, 176, 177, 178, 179, 180];
var _6 = [1, 7, 9, 10, 11, 13, 15, 16, 22, 23, 24, 25, 27, 30, 31, 32, 33, 41, 42, 47, 113, 114, 119, 120, 121, 126, 131, 132, 134, 136, 137, 138, 139, 141, 143, 144, 145, 146, 147, 148, 149, 150, 151, 153, 156, 157, 158, 159, 161, 162, 163, 165, 166, 168, 170];
var _7 = [2, 3, 4, 5, 6, 8, 12, 17, 18, 19, 20, 21, 24, 28, 29, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 47, 115, 116, 117, 118, 123, 125, 127, 128, 129, 130, 133, 135, 138, 140, 142, 154, 160, 169];
var _8 = [14, 21, 22, 25, 26, 32, 37, 41, 43, 44, 45, 46, 47, 113, 115, 119, 122, 127, 128, 129, 130, 131, 136, 141, 148, 149, 162, 165, 167, 170];
var _9 = [2, 3, 4, 5, 6, 7, 17, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 44, 116, 117, 118, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 142, 143, 145, 146, 152, 153, 154, 159, 160, 164, 168];
var _10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 113, 114, 115, 116, 117, 118, 119, 120];
var _11 = [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170];

var last;

function query(n) {
  if (b == true) { $(".top-card, .btm-card").css("border", "none"); b = false; }
  var card = (n <= 5) ? ".top-card" : ".btm-card";
  var dr = (n <= 5) ? "#d1" : "#d2";
  var c = (n <= 5) ? "England: " : "China: ";
  var k = $(card)[0].childElementCount;

  if (k == 0) {
    $("#fullimage").remove();
    $(dr).html(c + document.getElementById('_' + n).innerHTML);
    var l = eval("_" + n); var x = l.length; last = n;
    for (var i = 0; i < x; i++) { $(card).append(pre + l[i] + post); }
    $('#container').flexgal();
  }
  else if (n != last) { $(card)[0].innerHTML = ""; query(n); }
}
