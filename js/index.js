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
    if (h >= 19 || h < 7) { hrs = (h >= 19) ? 7 + (23 - h) : 6 - h; }
    var c = (((hrs * 60) + (60 - m)) / 720) * 255;
    var cc = 255 - c;

    if (h >= 7 && h < 19) { [c, cc] = [cc, c]; } // white --> black

    var cx = 'rgb(' + c + ',' + c + ',' + c + ')';
    var ccx = 'rgb(' + cc + ',' + cc + ',' + cc + ')';

    $("body").css("backgroundColor", ccx);
    $('a').css("color", cx);
    $('.tit').css("color", cx);
    $('#myBtn').css("color", "#FF6F61");
    $('.link').css("color", "#3CB371");
    $('.modal').css("background-color", ccx);
    await sleep(60000);
  }
}
