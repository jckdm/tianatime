var a = document.getElementById('audio');
var on = false;

async function play() {
  if (on == true) {
    on = false;
    a.pause();
    $('#aud').attr('src','vol-red.png');
  }
  else {
    on = true;
    $('#aud').attr('src','vol-green.png');
    a.play();
    await sleep(a.duration * 1000);
    a.pause();
  }
}
