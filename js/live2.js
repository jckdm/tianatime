var s = 1000;
var count = document.getElementById('counter');
var sig = document.getElementById('sig');

async function exhibit() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var i = 1;
  while (true) {
    $('.epix').css('display','none');
    document.getElementById(String(Math.max(1, i%181))).style.display = 'block';
    for (var j = 0; j < s / 1000; j++) {
      var next = (s - (s / 10) * j) / 1000;
      count.innerHTML = "Next image in: " + next;
      sig.innerHTML = "Next image in: " + next;
      await sleep(1000);
    }
    i++;
  }
}
