(function($) {
  $.fn.flexgal = function() {
    $('body').prepend('<div id="fullimage" style="display: none"></div>');
    $(this).addClass('flex-gallery');
    $('img',this).parent().addClass('image-rate');
 }
}(jQuery));

window.onload = function() {
  $('#container').flexgal();
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

function speed(sp) {
  if (sp == 0) {
    b2.disabled = false;
    s = Math.min(12500, s+2500);
    if (s == 10000) {
      b1.disabled = true;
    }
  }
  if (sp == 1) {
    b1.disabled = false;
    s = Math.max(2500, s-2500);
    if (s == 0) {
      b2.disabled = true;
    }
  }
}
