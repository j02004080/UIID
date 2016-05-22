        

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

    var calldone = false;

    function go(id){
      
      if (id === "map"){
         if (calldone === false){
                  $("#map").show();
                  calldone = true;
                  $("#map").animate({
                    top: "10vh",
                    margin: "0 2%",
                    width: "80vw",
                    height: "90vh"
                     
                  }, ani_time);
         
                }else{
                  $("#map").animate({
                    top: "1.5vh",
                    margin: "0 0",
                    width: "5px",
                    height: "5px"
                  }, ani_time);
                  calldone = false;
                  setTimeout(function(){
                    $("#map").hide();
                  }, ani_time);
                }

      }else if(id==="mission"){
        if (calldone === false){
                           $("#mis").show();
                           calldone = true;
                           $("#mis").animate({
                             top: "15vh",
                             margin: "0 2%",
                             width: "80vw",
                             height: "75vh",
                              left: "8vw" 
                           }, ani_time);
        
                         }else{
                           $("#mis").animate({
                             top: "1.5vh",
                             margin: "0 0",
                             width: "5px",
                             height: "5px",
                             left: "16vw"
                           }, ani_time);
                           calldone = false;
                           setTimeout(function(){
                             $("#mis").hide();
                           }, ani_time);
                         }

      }
    
      else if(id==="collect"){
       if (calldone === false){
                           $("#collect").show();
                           calldone = true;
                           $("#collect").animate({
                             top: "20vh",
                             margin: "0 0",
                             width: "85vw",
                             height: "50vh",
                              left: "8vw" 
                           }, ani_time);
        
                         }else{
                           $("#collect").animate({
                             top: "1.5vh",
                             margin: "0 0",
                             width: "5px",
                             height: "5px",
                             left: "24vw"
                           }, ani_time);
                           calldone = false;
                           setTimeout(function(){
                             $("#collect").hide();
                           }, ani_time);
                         }
      

      }
    };
    
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
