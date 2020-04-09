// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

var iModal = document.getElementById("myModal");
var iBtn = document.getElementById("myBtn");
var iSpan = document.getElementsByClassName("close")[0];
iBtn.onclick = function() { iModal.style.display = "block"; }
iSpan.onclick = function() { iModal.style.display = "none"; }

window.onload = function() { color(); };

async function color() {
  var x = document.getElementsByTagName('a')[0];
  var y = document.getElementsByTagName('a')[1];
  var z = document.getElementsByTagName('a')[2];
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

    iModal.style.backgroundColor = document.body.style.backgroundColor = 'rgb(' + cc + ',' + cc + ',' + cc + ')';
    var cx = 'rgb(' + c + ',' + c + ',' + c + ')';
    $('.modal-content').css("color", cx);
    $('a').css("color", cx);
    iBtn.style.color = x.style.color = y.style.color = z.style.color = cx;
    await sleep(60000);
  }
}
