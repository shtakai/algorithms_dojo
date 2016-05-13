$(document).ready(function () {

  var topDoll = null;

  $('#add_doll').click(function () {
    console.log('add doll clicked');
    var doll = new RussianDoll(Date.now());
    if (topDoll === null) {
      console.log('create topdoll');
      topDoll = doll;
    } else {
      console.log('add doll into doll');
      doll.addDoll(topDoll);
      topDoll = doll;
    }
    $('#doll').html("<p>DOLL " + topDoll.show() +"</p>");
    $('#saying').html("");
  });

  $('#say').click(function () {
    console.log('say clicked');
    if (topDoll) {
      topDoll.saying();
      $('#saying').html("<p>Saying " + topDoll.saying() + "</p>");
    }
  });

  $('#open_up').click(function () {
    console.log('open up clicked');
    if(topDoll){
      topDoll = topDoll.openUp();
    }
    if(topDoll){
      $('#doll').html("<p> DOLL " + topDoll.show() + "</p>");
    }else{
      $('#doll').html("<p> no more doll</p>")
      $('#saying').html("<p> no more doll</p>");
    }
  });
});
