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
    
});