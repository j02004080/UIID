$(doc   ument).ready(function(){
	$("#button").click(function(e){
    e.preventDefault();
    var goTo = this.getAttribute("href");

    $("#house").animate({
			width: "200%", 
			margin: "0 -50%", 
			top: "-50vh",
      bottom: "0",

			
		}, 3000);
    
		$("#man").fadeOut(3000);
	})
	  setTimeout(function(){
      window.location=goTo;
    }, 3000);
  })
});
