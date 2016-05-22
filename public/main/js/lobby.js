        

        var t;
        var str = 0;
        var c = 10;
        var count, time;
        var onehour = 60*60*1000;
        var onemin = 60*1000;
        var onesec = 1000;
        
        //getDate
        now = new Date();
            var year = now.getFullYear();
            var month = now.getMonth();
            var day = now.getDate();
            var hour = now.getHours();
            var minutes = now.getMinutes();
            var seconds = now.getSeconds();
        // getStr
        if (localStorage.getItem("Str") === undefined){
            str = 3; 
            
        }
        else{
            str = parseInt(localStorage.getItem("Str"));
            console.log("read:" + str);
            TimeToStr();
        }
        
        if(localStorage.year){
            byear = parseInt(localStorage.getItem("year"), 10);
            bmonth = parseInt(localStorage.getItem("month"), 10);
            bday = parseInt(localStorage.getItem("day"), 10);
            bhour = parseInt(localStorage.getItem("hour"), 10);
            bminutes = parseInt(localStorage.getItem("minutes"), 10);
            bseconds = parseInt(localStorage.getItem("seconds"), 10);
            var before = new Date(byear, bmonth, bday, bhour, bminutes, bseconds);
            console.log("latest time:" + before);
        }
        else{
            console.log('fail');
        }

        //Count Strength
        function StrCount(){
            
            count ="剩於"+ c + "秒回復體力";
            showStr(str);
            if(str < 3){
                document.getElementById("clock").innerHTML  = count;
                if(c <= 0 ){
                c = 60;
                str = str + 1 ;
               
                }
                    c=c-1
                    t=setTimeout("StrCount()",1000);   
                window.onbeforeunload = saveToStorage();
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
        
    function saveToStorage() {
            
            localStorage.setItem("Str", str); 
            localStorage.setItem("year", year);
            localStorage.setItem("month", month);
            localStorage.setItem("day", day);
            localStorage.setItem("hour", hour);
            localStorage.setItem("minutes", minutes);
            localStorage.setItem("seconds", seconds);
              
        }

        function getstr(){
            return str;
        }

        function setStr(num){
            str = num;
        }
$(document).ready(function() {
    
    var ani_time = 500;
	  var active_id = "0";
    var button1 = true;
    var button2 = true;
    
    if(typeof(Storage) !== "undefined") {
        console.log("stroage useable");
    } else {
        alert("storage wrong");
    }   
    
   
    $('.flexslider').flexslider({
    animation: "slide",
    slideshow: false,
    smoothHeight: false,
    controlNav: false,
    directionNav: false
    });            
    if(str < 3){
        showStr(str);
        StrCount();
        
    }
   
    $('.setMenu').click(function(){
        $('.setMenu').animate({
            top:'0%'},200);
    });
    
    $('.setMenu').mouseleave(function(){
        $('.setMenu').animate({
            top:'-77%'},200);
    });
    
    $('.button1, .ON1, .OFF1').click(function(){
        if(button1 == true){
            $('.button1').animate({
                right:'12.5%'},200);
            button1 = false;
        }
        else if(button1 == false){
            $('.button1').animate({
                right:'28%'},200);
            button1 = true;
        }
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
    
  
    $('.button2, .ON2, OFF2').click(function(){
        if(button2 == true){
            $('.button2').animate({
                right:'12.5%'},200);
            button2 = false;
        }
        else if(button2 == false){
            $('.button2').animate({
                right:'28%'},200);
            button2 = true;
        }
    });
    
            
    $('.on').click(function(){
        setStr(0);
        StrCount();
    });
    
    
});
