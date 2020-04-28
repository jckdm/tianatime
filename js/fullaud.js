var on = false;

async function play() {
  var a = document.getElementById('audio');
  if (on == true) {
    on = false;
    a.pause();
    $('#aud').attr('src','icons/vol-red.png');
  }
  else {
    on = true;
    $('#aud').attr('src','icons/vol-green.png');
    a.play();
    await sleep(a.duration * 1000);
    a.pause();
    $('#aud').attr('src','icons/vol-red.png');
  }
}
