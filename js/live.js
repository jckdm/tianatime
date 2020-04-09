(function($) {
  $.fn.flexgal = function() {
    $('body').prepend('<div id="fullimage" style="display: none"></div>');
    $(this).addClass('flex-gallery');
    $('img',this).parent().addClass('image-rate');
 }
}(jQuery));

window.onload = function() {
  $('#container').flexgal();
  color();
  exhibit();
};

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

var s = 7500;

async function exhibit() {
  var i = 0;
  while (true) {
    $('.epix').css('display','none');
    document.getElementById(String(i%3)).style.display = 'block';
    await sleep(s);
    i++;
  }
}

var slider = document.getElementById("rng");
var st = document.getElementById("sptxt");

st.innerHTML = "Speed: " + slider.value;
function update() {
  st.innerHTML = "Speed: " + slider.value;
  s = 12000 - (slider.value * 2000);
}

async function color() {
  while (true) {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var hrs;

    // 7am – 7pm
    if (h >= 7 && h < 19) { hrs = 18 - h; }
    // 7pm – 7am
    if (h >= 19 || h < 7) { hrs = (h >= 19) ? 7 + (23 - h) : 7 - h; }
    var c = (((hrs * 60) + (60 - m)) / 720) * 255;
    var cc = 255 - c;

    if (h >= 7 && h < 19) { [c, cc] = [cc, c]; } // white --> black

    var ccx = 'rgb(' + cc + ',' + cc + ',' + cc + ')';
    var cx = 'rgb(' + c + ',' + c + ',' + c + ')';

    $("body").css("backgroundColor", ccx);
    $("#sptxt").css("backgroundColor", cx);
    $("#sptxt").css("color", ccx);
    $("#rng").css("backgroundColor", cx);
    await sleep(60000);
  }
}
