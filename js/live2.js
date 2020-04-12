var s = 480000;
var count = document.getElementById('counter');
var sig = document.getElementById('sig');

async function exhibit() {
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
    $('.epix').css('display','none');
    document.getElementById(String(Math.max(1, i%181))).style.display = 'block';
    for (var j = 0; j < s / 1000; j++) {
      var next = (s - (j * 1000)) / 1000;
      count.innerHTML = "Next in: " + next;
      sig.innerHTML = "Next in: " + next;
      await sleep(1000);
    }
    i++;
  }
}
