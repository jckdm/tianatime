$(function() {
  $.fn.flexgal = function() {
    $('body').prepend('<div id="fullimage" style="display: none"></div>');
    $(this).addClass('flex-gallery');
    $('img',this).parent().addClass('image-rate');
 }
}(jQuery));

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

var iModal = document.getElementById("myModal");
var iBtn = document.getElementById("myBtn");
var iSpan = document.getElementsByClassName("close")[0];
iBtn.onclick = function() { iModal.style.display = "block"; }
iSpan.onclick = function() { iModal.style.display = "none"; }
