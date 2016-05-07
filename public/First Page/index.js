$(document).ready(function(){
	$("#button").click(function(){
		$("#house").animate({
			width: "100%", 
			margin: "0 0", 
			bottom: "0"
			
		}, 3000);
		$("#man").fadeOut(3000);
	})
});