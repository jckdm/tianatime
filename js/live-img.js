async function exhibit() {
  while (true) {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var hrs;

    // 6am – 12am
    if (h >= 6) { hrs = 6 + (23 - h); }
    // 12am – 6am
    if (h < 6) { hrs = 5 - h; }
    var i = Math.ceil(180 - ((((hrs * 60) + (59 - m) + ((60 - (s+1)) / 60)) / 1440) * 180));
    var n = Math.max(1, i%181);
    $('#container').html("");
    $('#container').append('<figure class="image-rate"> <img class="epix" id="' + n + '" src="img/' + n + '.jpg"></figure>');
    $("#num").html(n + " / 180");

    var y = (((23 - hrs) * 60) + m + (s / 60)) / 8;
    var xs = Math.round(60 * (8 - (y - Math.floor(y)) * 8));
    var countDownTime = d;
    countDownTime.setSeconds(s + xs);
    var now = new Date();
    var distance = countDownTime - now;

    var mins = Math.floor((distance % 3600000) / 60000);
    var secs = Math.floor((distance % 60000) / 1000);
    secs = (String(secs).length == 1) ? "0" + secs : secs;
    $("#counter").html("Next in: " + mins + ":" + secs);

    if (mins == 0 && secs == "00") { $(".image-rate").remove(); }
    else { await sleep(1000); }
  }
}
