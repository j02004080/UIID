



$(document).ready(function(){
	$("#test").click(function(e){
    e.preventDefault();
    $(".buttondiv").fadeOut(500);
    $("#test1").fadeOut();
    $("#sheet").fadeIn(500);
  });
});
