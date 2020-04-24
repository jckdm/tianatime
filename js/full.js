$(function() {
  render(1);
  $('#container').flexgal();
  color();
})

var cP = 0;

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
    if ((n % 2 == 1) && (end - i == 14)) { // audio only on odd pages, after 4 images ? random
      $('#container').append('<img id="aud" src="vol-red.png" onclick="play();"></img> <audio id="audio"> <source src="aud/SuzhouOpera.m4a" type="audio/mpeg"> </audio>');
    }
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
