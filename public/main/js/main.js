$(document).ready(function() {
   
	  var ani_time = 500;
    var active_id = "0";
   
    $('.button1, .ON1, .OFF1').click(function(){
            if(button1 == true){
                $('.button1').animate({
                    right:'14%'},200);
                button1 = false;
            }
            else if(button1 == false){
                $('.button1').animate({
                    right:'30%'},200);
                button1 = true;
            }
        });
        $('.button2, .ON2, .OFF2').click(function(){
            if(button2 == true){
                $('.button2').animate({
                    right:'14%'},200);
                button2 = false;
            }
            else if(button2 == false){
                $('.button2').animate({
                    right:'30%'},200);
                button2 = true;
            }
        });
        
        $('.menubut').click(function(){
            $('.setMenu').animate({
                top:'0%'},200);
            $('#jan, #fu, #zheng').click(function(){
                $('.setMenu').animate({
                    top:'-100%'},200);
            });
        });
	
	
	$(".mapbut").click(function(){
        if (active_id === "0"){
            
			    go("map", 10, 80, 90);
        }
        else {
          var a_test = active_id;
          back(active_id);
            
          if (a_test !== "map"){
            setTimeout(function(){
              go("map", 10, 80, 90);
            }, ani_time)
          }
        }  
        
      });
    
    $(".misbut").click(function(){
      if (active_id === "0"){
          
			  go("mission", 15, 80, 75);
      }
      else {
        var a_test = active_id;
        back(active_id);
        if (a_test !== "mission"){
          setTimeout(function(){
            go("mission", 15, 80, 75);
          }, ani_time)
        }
     } 
    });
    $(".collectbut").click(function(){
      if (active_id === "0"){
          
			  go("collect", 20, 85, 75);
      }
      else {
        var a_test = active_id;
        back(active_id);
        if (a_test !== "collect"){
          setTimeout(function(){
            go("collect", 20, 85, 75);
          }, ani_time)
        }
     } 
    });
    
    function go(id, t, w, h){
		  active_id = id;
		  w = w + "vw";
		  h = h + "vh";
		  t = t + "vh";
		  $("#"+id).show();
        $('.mask').show();
      $("#"+id).animate({          
			  top: t,
			  margin: "0 2%",            
			  width: w,            
			  height: h,
			  left: "8vw"
      }, ani_time);                      
		
	}
	
	function back(id){
        
		var left_d = "8vw";
        $('.mask').hide();
    if (id==="mission"){
			left_d = "16vw";
		}
		else if (id === "collect"){
			left_d = "24vw";
		}
		
		$("#"+id).animate({
          top: "1.5vh",
          margin: "0 0",
          width: "5px",
          height: "5px",
					left: left_d
        }, ani_time);
		active_id = "0";       
    setTimeout(function(){          
        $("#"+id).hide();       
    }, ani_time);          
	}
	
	
		
});
