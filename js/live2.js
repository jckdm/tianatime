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
