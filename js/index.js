$(function() { color(); });

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

    iModal.style.backgroundColor = document.body.style.backgroundColor = 'rgb(' + cc + ',' + cc + ',' + cc + ')';
    $('.modal-content').css("color", 'rgb(' + c + ',' + c + ',' + c + ')');
    $('a').css("color", 'rgb(' + c + ',' + c + ',' + c + ')');
    $('#myBtn').css("color", "#FF6F61");
    await sleep(60000);
  }
}
