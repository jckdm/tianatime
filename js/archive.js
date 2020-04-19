$(function() {
  $.fn.flexgal = function(){
    $('body').prepend('<div id="fullimage" style="display: none"></div>')
    $(this).addClass('flex-gallery');
    $('img', this).parent().addClass('image-rate');

   $('.image-rate').click(function() {
     $('img', this).clone().prependTo('#fullimage');
     $( "#fullimage" ).fadeIn(200);
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
    
    $("body").css("backgroundColor", bf);
    $('p').css('color', fg);
    $('.modal').css("backgroundColor", bg);
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
var post = '.png"></figure>';
var zero = [2, 4, 6, 8, 10];
var one = [1, 3, 5, 7, 9];

function query(n) {
  if (b == true) { $(".top-card, .btm-card").css("border", "none"); b = false; }
  var k = (n == 0 || n == 1) ? $(".top-card")[0].childElementCount : $(".btm-card")[0].childElementCount;

  if (n == 0 || n == 1) {
    if (k == 0) {
      if (n == 0) {
        for (var i = 0; i < 5; i++) {
          $(".top-card").append(pre + zero[i] + post);
        }
      }
      if (n == 1) {
        for (var i = 0; i < 5; i++) {
          $(".top-card").append(pre + one[i] + post);
        }
      }
      $('#container').flexgal();
    }
    else { $(".top-card")[0].innerHTML = ""; query(n); }
  }
  if (n == 2 || n == 3) {
    if (k == 0) {
      if (n == 2) {
        for (var i = 0; i < 5; i++) {
          $(".btm-card").append(pre + zero[i] + post);
        }
      }
      if (n == 3) {
        for (var i = 0; i < 5; i++) {
          $(".btm-card").append(pre + one[i] + post);
        }
      }
      $('#container').flexgal();
    }
    else { $(".btm-card")[0].innerHTML = ""; query(n); }
  }
}
