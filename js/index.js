// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

window.onload = function() { color(); };

async function color() {
  while (true) {
    var x = document.getElementsByTagName('a')[0];
    var y = document.getElementsByTagName('a')[1];
    var z = document.getElementsByTagName('a')[2];
    var d = new Date();
    var c = (((d.getHours() * 60) + (d.getMinutes())) / 1440) * 255;
    var cc = 255 - c;
    document.body.style.backgroundColor = 'rgb(' + cc + ', ' + cc + ', ' + cc + ')';
    x.style.color = y.style.color = z.style.color = 'rgb(' + c + ', ' + c + ', ' + c + ')';
    await sleep(60000);
  }
}
