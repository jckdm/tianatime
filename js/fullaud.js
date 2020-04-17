var a = document.getElementById('audio');
var ad = document.getElementById('aud');

var on = false;

async function play() {
  if (on == true) {
    on = false;
    a.pause();
    ad.style.color = "#3CB371";
  }
  else {
    on = true;
    ad.style.color = "#FF6F61";
    a.play();
    await sleep(a.duration * 1000);
    a.pause();
  }
}
