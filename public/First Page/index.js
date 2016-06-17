



$(document).ready(function(){
  $("#test1").click(function(){
    $.post('/continue');
    });
	$("#test").click(function(e){
    e.preventDefault();
    $(".buttondiv").fadeOut(500);
    $("#test1").fadeOut();
    $("#sheet").fadeIn(500);
  });
});
