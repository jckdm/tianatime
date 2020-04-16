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

$(function() {
  $('#container').flexgal();
  color();
})

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

async function color() {
  while (true) {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var hrs;

    // 7am – 7pm
    if (h >= 7 && h < 19) { hrs = 18 - h; }
    // 7pm – 7am
    if (h >= 19 || h < 7) { hrs = (h >= 19) ? 7 + (23 - h) : 6 - h; }
    var c = (((hrs * 60) + (60 - m)) / 720) * 255;
    var cc = 255 - c;

    if (h >= 7 && h < 19) { [c, cc] = [cc, c]; } // white --> black

    $("body").css("backgroundColor", 'rgb(' + cc + ',' + cc + ',' + cc + ')');
    $('p').css('color', 'rgb(' + c + ',' + c + ',' + c + ')');
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
function query(n) {
  if (b == true) { $(".top-card, .btm-card").css("border", "none"); b = false; }

  var k = (n == 0 || n == 1) ? $(".top-card")[0].childElementCount : $(".btm-card")[0].childElementCount;

  if (n == 0 || n == 1) {
    if (k == 0) {
      if (n == 0) {
        $(".top-card").append('<figure class="image-rate"> <img src="img/2.png"></figure>');
        $(".top-card").append('<figure class="image-rate"> <img src="img/4.png"></figure>');
        $(".top-card").append('<figure class="image-rate"> <img src="img/6.png"></figure>');
        $(".top-card").append('<figure class="image-rate"> <img src="img/8.png"></figure>');
        $(".top-card").append('<figure class="image-rate"> <img src="img/10.png"></figure>');
      }
      if (n == 1) {
        $(".top-card").append('<figure class="image-rate"> <img src="img/1.png"></figure>');
        $(".top-card").append('<figure class="image-rate"> <img src="img/3.png"></figure>');
        $(".top-card").append('<figure class="image-rate"> <img src="img/5.png"></figure>');
        $(".top-card").append('<figure class="image-rate"> <img src="img/7.png"></figure>');
        $(".top-card").append('<figure class="image-rate"> <img src="img/9.png"></figure>');
      }
    }
    else { $(".top-card")[0].innerHTML = ""; query(n); }
  }
  if (n == 2 || n == 3) {
    if (k == 0) {
      if (n == 2) {
        $(".btm-card").append('<figure class="image-rate"> <img src="img/2.png"></figure>');
        $(".btm-card").append('<figure class="image-rate"> <img src="img/4.png"></figure>');
        $(".btm-card").append('<figure class="image-rate"> <img src="img/6.png"></figure>');
        $(".btm-card").append('<figure class="image-rate"> <img src="img/8.png"></figure>');
        $(".btm-card").append('<figure class="image-rate"> <img src="img/10.png"></figure>');
      }
      if (n == 3) {
        $(".btm-card").append('<figure class="image-rate"> <img src="img/1.png"></figure>');
        $(".btm-card").append('<figure class="image-rate"> <img src="img/3.png"></figure>');
        $(".btm-card").append('<figure class="image-rate"> <img src="img/5.png"></figure>');
        $(".btm-card").append('<figure class="image-rate"> <img src="img/7.png"></figure>');
        $(".btm-card").append('<figure class="image-rate"> <img src="img/9.png"></figure>');
      }
    }
    else { $(".btm-card")[0].innerHTML = ""; query(n); }
  }
}
