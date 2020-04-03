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

var s = 5000;

async function exhibit() {
  var i = 0;
  while (true) {
    $('.epix').css('display','none');
    document.getElementById(String(i%3)).style.display = 'block';
    await sleep(s);
    i++;
  }
}

function speed(sp) { s = (sp == 0) ? Math.min(10000,s+2500) : Math.max(0, s-2500); }
