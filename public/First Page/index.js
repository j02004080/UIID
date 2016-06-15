$(document).ready(function(){
	$("#test").click(function(e){
    e.preventDefault();
    $(".buttondiv").fadeOut(2000);
    $("#test1").fadeOut();
    $("#sheet").fadeIn(2000);
  });
});
