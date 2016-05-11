$(document).ready(function(){
	$("#link").click(function(e){
    e.preventDefault();
    var goTo = this.getAttribute("href");

    $("#house").animate({
			width: "500%", 
			margin: "0 -200%", 
      bottom: "0"
      

			
		}, 3000);
    
		$("#man").fadeOut(3000);
  
	
	  setTimeout(function(){
      window.location=goTo;
    }, 3000);
  });
});
