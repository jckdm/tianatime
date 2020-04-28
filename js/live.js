$(function() {
  $('#container').flexgal();
  color();
  exhibit();
})

async function color() {
  var bg;
  while (true) {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();

    // 6am - 10pm
    if (h >= 6 && h < 22) { bg = "#FFFFFF"; }
    if (h >= 22 || h < 6) { bg = "#000000"; }

    $('body, .modal').css("background-color", bg);
    await sleep(60000);
  }
}
