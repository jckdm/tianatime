async function exhibit() {
  var count = document.getElementById('counter');
  var num = document.getElementById('num');
  var d = new Date(); //2020, 01, 01, 06, 00, 00, 000
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var hrs;

  // 6am – 12am
  if (h >= 6) { hrs = 6 + (23 - h); }
  // 12am – 6am
  if (h < 6) { hrs = 5 - h; }
  var i = 180 - (Math.floor((((hrs * 60) + (59 - m) + ((60 - s) / 60)) / 1440) * 180));

  while (true) {
    var n = Math.max(1, i%181);
    var y = (((23 - hrs) * 60) + m)/8;
    var x = Math.max(1, (8 - (y - Math.floor(y)) * 8));
    $('#container').append('<figure class="image-rate"> <img class="epix" id="' + n + '" src="img/' + n + '.png"></figure>');
    for (var j = 0; j < x; j++) {
      count.innerHTML = "Next in: " + (x - j) + " min.";
      num.innerHTML = n + " / 180";
      await sleep(60000);
    }
    $(".image-rate").remove();
    i++;
  }
}
