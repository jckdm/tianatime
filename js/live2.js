async function exhibit() {
  var count = document.getElementById('counter');
  var sig = document.getElementById('sig');
  var num = document.getElementById('num');
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var hrs;

  // 7am – 12am
  if ((h >= 7 && h < 19) || (h >= 19)) { hrs = 7 + (23 - h); }
  // 12am – 7am
  if (h < 7) { hrs = 6 - h; }
  var i = 180 - (Math.floor((((hrs * 60) + (60 - m)) / 1440) * 180));
  while (true) {
    var n = Math.max(1, i%181);
    $('#container').append('<figure class="image-rate"> <img class="epix" id="' + n + '" src="img/' + n + '.png"></figure>');
    for (var j = 0; j < 8; j++) {
      count.innerHTML = "Next in: " + (8 - j) + " min.";
      num.innerHTML = n + " / 180";
      await sleep(60000);
    }
    $(".image-rate").remove();
    i++;
  }
}
