$(function() {
  $('#container').flexgal();
  color();
  exhibit();
})

var s = 10000;
var count = document.getElementById('counter');
var sig = document.getElementById('sig');

async function exhibit() {
  var i = 0;
  while (true) {
    $('.epix').css('display','none');
    document.getElementById(String(i%3)).style.display = 'block';
    for (var j = 0; j < s / 1000; j++) {
      count.innerHTML = "Next image in: " + ((s - (s / 10) * j) / 1000);
      sig.innerHTML = "Next image in: " + ((s - (s / 10) * j) / 1000);
      await sleep(1000);
    }
    i++;
  }
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
    if (h >= 19 || h < 7) { hrs = (h >= 19) ? 7 + (23 - h) : 6 - h; }
    var c = (((hrs * 60) + (60 - m)) / 720) * 255;
    var cc = 255 - c;

    if (h >= 7 && h < 19) { [c, cc] = [cc, c]; } // white --> black

    var ccx = 'rgb(' + cc + ',' + cc + ',' + cc + ')';
    var cx = 'rgb(' + c + ',' + c + ',' + c + ')';

    $("body").css("backgroundColor", ccx);
    iModal.style.backgroundColor = ccx;
    $('.modal-content').css("color", cx);
    sig.style.color = count.style.color = cx;
    $('a').css("color", cx);
    $('#myBtn').css("color", "#FF6F61");
    await sleep(60000);
  }
}
