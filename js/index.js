$(function() { color(); });

async function color() {
  var bg, fg;
  while (true) {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();

    // 6am - 10pm
    if (h >= 6 && h < 22) { bg = "#FFFFFF"; fg = "#000000"; }
    if (h >= 22 || h < 6) { bg = "#000000"; fg = "#FFFFFF"; }

    $("body").css("backgroundColor", bg);
    $('a').css("color", fg);
    $('#myBtn').css("color", "#FF6F61");
    $('.link').css("color", "#3CB371");
    $('.modal').css("background-color", bg);
    await sleep(60000);
  }
}
