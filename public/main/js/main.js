        var t;
        var str = 3;
        var c = 10;
        var count, time;
        var onehour = 60*60*1000;
        var onemin = 60*1000;
        var onesec = 1000;

function StrCount(){
            
            count ="剩於"+ c + "秒回復體力";
            showStr(str);
            if(str < 3){
                if(c <= 0 ){
                c = 60;
                str = str + 1 ;
               
                }
                    c=c-1
                    t=setTimeout("StrCount()",1000);   
    
            }
        }   
        

function TimeToStr(){     

            var diff = now - before;
            var leftHours = Math.floor(diff/onehour);
            if(leftHours > 0) diff = diff - (leftHours * onehour);
            var leftMins = Math.floor(diff/onemin);
            if(leftMins >0) diff = diff - (leftMins * onemin);
            var leftSecs = Math.floor(diff/onesec);

            console.log("now: " + now);
            console.log(leftHours + ":" + leftMins + ":" + leftSecs);
            if(leftHours >=1){
                str = 3;
            }
        }
    
function setStr(num){
            str = num;
        }

function showStr(str){
            if(str == 0){
                $(".str1").hide();
                $('.str2').hide();
                $(".str3").hide();
            }
            if(str == 1){
                $(".str1").show();
                $('.str2').hide();
                $(".str3").hide();
            }
            if(str == 2){
                $(".str1").show();
                $('.str2').show();
                $(".str3").hide();
            }
            if(str == 3){
                $(".str1").show();
                $('.str2').show();
                $(".str3").show();
            }
        }


$(document).ready(function() {
   
    if(str < 3){
        showStr(str);
        StrCount();   
    }
    var button1 = true;
    var button2 = true;
    $(window).load(function() {  document.getElementById("hideAll").style.display = "none"; });
    
    var vid = document.getElementById('water');
    vid.play();
    vid.onended = function(){
        console.log('end');
        $('#water').hide();
    }
  
  var ani_time = 500;
  var active_id = "0";
  images = [];

  function preload(){
    for (var i=0; i< arguments.length; i++){
      images[i] = new Image();
      images[i].src = preload.arguments[i]; 
      console.log('preloaded');
    }
  }
  preload(
    "img/map1-06.png",
    "img/map2-06.png",
    "img/map3-06.png",
    "img/map4-06.png",
    "img/map5-06.png",
    "img/map6-06.png",
    "img/map7-06.png",
    "img/map8-06.png",
    "img/map9-06.png",
    "img/map10-06.png",
    "img/map11-06.png",
    "img/map12-06.png"
  )
  
      
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
            $('#player').click(function(){
                $('.setMenu').animate({
                    top:'-100%'},200);
            });
        });
	
	  var counter = 1;
    
    $(".mapbut").click(function(){
        document.getElementById("shards").src="img/map"+counter+"-06.png";
        $("#shards").show();
        $("#map_back").fadeIn(1000);
			  go("map", 0, 100, 100);
    });
    
    $("#map_back").click(function(){
        back("map");    
        if (counter <= 12)
        counter += 1;
    }); 
    
    $('.jan-boss, .fu-boss, .zheng-boss').click(function(){
            $('#all').animate({
                height: '40%'},200);
            str = str - 1;
            setStr(str);
            StrCount();
            
            $('#all').mouseleave(function(){
                $('#all').animate({
                    height:'0%'},200);
            });
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
			  //margin: "0 2%",            
			  width: w,            
			  height: h,
			  left: "0vw"
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
