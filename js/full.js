$(function() {
  render(1);
  $('#container').flexgal();
  color();
})

var cP = 0;

var pre = '<img id="aud" src="icons/vol-red.png" onclick="play();"></img> <audio id="audio"> <source src="aud/';
var post = '.wav" type="audio/mpeg"> </audio>';

function render(n) {
  $('#container').html("");

  var nav = document.getElementById('nav');
  nav.children[cP].removeAttribute('id');
  cP = (n - 1) + (2 * (n - 1));
  nav.children[cP].id = "curr";

  var end = n * 18;
  var start = end - 17;
  for (var i = start; i <= end; i++) {
    $('#container').append('<figure class="image-rate"> <img src="img/' + i + '.jpg"></figure>');
    var p = end - i;
    if ((n == 1) && (p == 4)) { $('#container').append(pre + 'park' + post); }
    if ((n == 4) && (p == 7)) { $('#container').append(pre + 'birds' + post); }
    if ((n == 5) && (p == 5)) { $('#container').append(pre + 'swan' + post); }
    if ((n == 7) && (p == 4)) { $('#container').append(pre + 'suzhou' + post); }
    if ((n == 9) && (p == 10)) { $('#container').append(pre + 'lake' + post); }
  }
}

async function color() {
  var bg, fg;
  while (true) {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();

    // 6am - 10pm
    if (h >= 6 && h < 22) { bg = "#FFFFFF"; fg = "#000000"; }
    if (h >= 22 || h < 6) { bg = "#000000"; fg = "#FFFFFF"; }

    $("body").css("backgroundColor", bg);
    $('p').css('color', fg);
    await sleep(60000);
  }
}
