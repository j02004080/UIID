$(document).ready(function(){
	$("#button").click(function(){
		$("#house").animate({
			width: "100%", 
			margin: "0 0", 
			bottom: "0"
			
		}, 3000);
    
    /*setTimeout(function(){
      location.assign('http://luffy.ee.ncku.edu.tw:8108/GamePage');
    }, 3500);*/
		$("#man").fadeOut(3000);
	})
});
