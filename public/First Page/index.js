
function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}


$(document).ready(function(){
  $("#test1").click(function(){
    $.post('/continue');
    });
	$("#test").click(function(e){
      //  var rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    $.get('/ask');
//    $(".buttondiv").fadeOut(500);
//    $("#test1").fadeOut();
//    $("#sheet").fadeIn(500);
  });
});
