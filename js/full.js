$(function() {
  render(1);
  $('#container').flexgal();
})

var cP = 0;

function render(n) {
  $('#container').html("");

  var pre = '<img id="aud" src="icons/vol-red.png" onclick="play();"></img> <audio id="audio"> <source src="aud/';
  var post = '.wav" type="audio/mpeg"> </audio>';

  var ppre = '<figure> <p>';
  var ppos = '</p></figure>';

  var nav = document.getElementById('nav');
  nav.children[cP].removeAttribute('id');
  cP = (n - 1) + (2 * (n - 1));
  nav.children[cP].id = "curr";

  var end = n * 18;
  var start = end - 17;
  for (var i = start; i <= end; i++) {
    $('#container').append('<figure class="image-rate"> <img src="img/' + i + '.jpg"></figure>');
    var p = end - i;
    if ((n == 1) && (p == 4)) { $('#container').append(pre + 'park' + post); }
    if (n == 4) {
      if (p == 7) { $('#container').append(pre + 'birds' + post); }
      if (p == 17) { $('#container').append(ppre + 'The train, the hour—late, late late. <br> Sipping warm lemonade from a glass bottle, <br> I stare at the men who have been drinking since ten this morning.' + ppos); }
      if (p == 16) { $('#container').append(ppre + 'An old tradition, they say: this stumbling along the yellow stripes <br> of the platform, this laughter at the mention of green fairies near the lakes, <br> spots of strange color. I must turn away.')}
      if (p == 15) { $('#container').append(ppre + 'Earlier, I was busy <br> dropping gingerbread crumbs on William <br> and Dorothy’s graves, fumbling' + ppos); }
      if (p == 14) { $('#container').append(ppre + 'for an umbrella in the light rain. In Keswick <br> artists had set up shop at a little church <br> that smelled of strong perfume. “Poetry,”' + ppos); }
      if (p == 13) { $('#container').append(ppre + 'one was called. I dabbed a little on my wrists. The scent <br> comes home on my jacket sleeves. <br> It was hard to resist collecting the portraits' + ppos); }
      if (p == 12) { $('#container').append(ppre + 'of sheep, posed like a close family, in lovely Ambleside, <Br> and at a leather and fur store I ran my fingers <Br> through coarse Herdwick wool.' + ppos); }
      if (p == 11) { $('#container').append(ppre + 'In Grasmere I bought a postcard for fifty pence in loose change <br> and told myself I was doing it right. It was also right <br> to tour Dove Cottage at half past two, before the rain got too bad,' + ppos); }
      if (p == 10) { $('#container').append(ppre + 'but it might have been more right to go at three <br> when the bird in his cuckoo clock came out. Wordsworth, <br> the guide announced, loved that clock. Loves? He' + ppos); }
      if (p == 9) { $('#container').append(ppre + 'is the Lake District’s great son, still. They are rather proud, <br> the three drunk men. One of them borrows <br> my multicolored pen to write his email on an old football ticket.' + ppos); }
      if (p == 8) { $('#container').append(ppre + 'The scrawled letters run together on the damp paper. <br> His friend lights a cigarette in the grey drizzle. The train pulls into the station. <br> I am a face in the window with eyes fixed north.' + ppos); }
    }
    if ((n == 5) && (p == 5)) { $('#container').append(pre + 'swan' + post); }
    if ((n == 7) && (p == 4)) { $('#container').append(pre + 'suzhou' + post); }
    if ((n == 9) && (p == 10)) { $('#container').append(pre + 'lake' + post); }
  }
  color();
}

async function color() {
  var bg, fg;
  while (true) {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();

    // 6am - 10pm
    if (h >= 6 && h < 22) { bg = "#FFFFFF"; fg = "#000000"; }
    if (h >= 22 || h < 6) { bg = "#000000"; fg = "#FFFFFF"; }

    $('body').css("backgroundColor", bg);
    $('p').css('color', fg);
    await sleep(60000);
  }
}
