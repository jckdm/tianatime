$(function() {
  $.fn.flexgal = function() {
    $('body').prepend('<div id="fullimage" style="display: none"></div>');
    $(this).addClass('flex-gallery');
    $('img',this).parent().addClass('image-rate');
 }
}(jQuery));

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
