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
    $('.flexslider').flexslider({
    animation: "slide"
    });            
        timedCount();
        
        window.onbeforeunload = saveToStorage();
});