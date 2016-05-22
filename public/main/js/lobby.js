        var t;
        var c = 10;
        var count, time;
        if (window.localStorage['str'] === undefined)
        {
            str = 5;
            
        }
        else
        {
            str = window.localStorage['str'];
        }
        
        if(localStorage.year)
        {
        byear = parseInt(localStorage.getItem("year"), 10);
        bmonth = parseInt(localStorage.getItem("month"), 10);
        bday = parseInt(localStorage.getItem("day"), 10);
        bhour = parseInt(localStorage.getItem("hour"), 10);
        bminutes = parseInt(localStorage.getItem("minutes"), 10);
        bseconds = parseInt(localStorage.getItem("seconds"), 10);
        var before = new Date(byear, bmonth, bday, bhour, bminutes, bseconds);
        console.log(before);
        }
        else{
            console.log('fail');
        }
        
        function timedCount()
        {
            
            document.getElementById('str').innerHTML = "Strength:" + str;
            count ="剩於"+ c + "秒回復體力";
            document.getElementById("clock").innerHTML  = count;
            if(c <= 0)
            {
                c = 60;
                str = str + 1 ;
            }
            c=c-1
            t=setTimeout("timedCount()",1000)          
        }   
            
        now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        var hour = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var diff = now - before;
        
        console.log(month);
        function saveToStorage() {
            window.localStorage["local"] = now; 
            localStorage.setItem("year", year);
            localStorage.setItem("month", month);
            localStorage.setItem("day", day);
            localStorage.setItem("hour", hour);
            localStorage.setItem("minutes", minutes);
            localStorage.setItem("seconds", seconds);
            //window.localStroage["str"] = str;   
        }
$(document).ready(function() {
    
    var ani_time = 500;

    $('.flexslider').flexslider({
    animation: "slide"
    });            
        timedCount();
        
        window.onbeforeunload = saveToStorage();
    $(".mapbut").click(function(){
      go("map");
    });
    $(".misbut").click(function(){
      go("mission");
    });
    $(".collectbut").click(function(){
      go("collect");
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
    
    }
});
