window.onload = function() { $('#container').flexgal(); color(); };

(function($) {
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
    if (h >= 19 || h < 7) { hrs = (h >= 19) ? 7 + (23 - h) : 7 - h; }
    var c = (((hrs * 60) + (60 - m)) / 720) * 255;
    var cc = 255 - c;

    if (h >= 7 && h < 19) { [c, cc] = [cc, c]; } // white --> black

    $("body").css("backgroundColor", 'rgb(' + cc + ',' + cc + ',' + cc + ')');
    await sleep(60000);
  }
}
