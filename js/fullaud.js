var a = document.getElementById('audio');
var ad = document.getElementById('aud');

async function play() {
  ad.style.color = "#FF6F61";
  a.play();
  await sleep(a.duration * 1000);
  a.pause();
  ad.style.color = "#3CB371";
}
