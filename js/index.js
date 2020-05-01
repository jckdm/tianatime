$(function() {
  color();
  var cB = document.getElementById('cBtn');
  $(cB).on('click', function () {
    var x = (cB.innerHTML).length;
    if (x == 1) { $('<text id="cText">All photos copyright Tiana Wang </text>').prependTo(cB); }
    else { cB.innerHTML = "&copy;"; }
  });
});

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

    $('body, .index-modal').css("backgroundColor", bg);
    $('a, #cBtn').css("color", fg);
    $('#myBtn').css("color", "#FF6F61");
    $('.link').css("color", "#3CB371");
    await sleep(60000);
  }
}
