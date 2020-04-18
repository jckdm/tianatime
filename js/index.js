$(function() { color(); });

async function color() {
  while (true) {
    //var d = new Date(2020, 01, 01, 19, 00, 00);
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();

    var bg, fg;

    // 7am - 7pm
    if (h >= 7 && h < 19) {
      bg = "#FFFFFF";
      fg = "#000000";
    }
    if (h >= 19 || h < 7) {
      bg = "#000000";
      fg = "#FFFFFF";
    }
    $("body").css("backgroundColor", bg);
    $('a').css("color", fg);
    $('#myBtn').css("color", "#FF6F61");
    $('.link').css("color", "#3CB371");
    $('.modal').css("background-color", bg);
    await sleep(60000);
  }
}
