async function exhibit() {
  var s = 480000;
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
    for (var j = 0; j < s / 1000; j++) {
      var next = (s - (j * 1000)) / 1000;
      count.innerHTML = "Next in: " + next;
      num.innerHTML = n + " / 180";
      await sleep(1000);
    }
    $(".image-rate").remove();
    i++;
  }
}
