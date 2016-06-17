$(document).ready(function() {
    
    var Store = document.getElementById("Gscreen").children;
    var No=1;
    var i=1;
    console.log(Store[0].children[0]);
    $('#jan-b').addClass("showb");
    $('#jan-o').addClass("showo");
    $('#jan-r').addClass("showr");
    $('#jan-boss').addClass("showboss");
    $('.showb, .showo, .showr, .showboss').show();
    $('.showb, .showo, .showr, .showboss').css({"left":"0%"});
    $('.showb').css({"z-index":"1"});
    $('.showo').css({"z-index":"2"});
    $('.showr').css({"z-index":"3"});
    Store[i].children[0].className += "nextb";
    Store[i].children[1].className += "nexto";
    Store[i].children[2].className += "nextr";
    $('.nextb, .nexto, .nextr').show();
    $('.nextb').css({"z-index":"1"});
    $('.nexto').css({"z-index":"2"});
    $('.nextr').css({"z-index":"3"});
            
    $(".next").click(function(){
        console.log(i);
        $('.showb').animate({
            left:'-100%'}, 400);
        $('.showboss').hide();
        $('.nextb').animate({
            left:'0%',
        },  {
            duration:400,
            easing: "easeOutExpo",
            complete:function(){
                $('.showboss').removeClass('showboss');
                $('.showb').removeClass('showb');
                $('.nextb').removeClass('nextb');
                Store[i].children[0].className += "showb";
                $('.showo').animate({
                    left:'-100%'}, 400);
                $('.nexto').animate({
                    left:'0%'
                }, {
                    duration:400,
                    easing: "easeOutExpo",
                    complete:function(){
                        $('.showo').removeClass("showo");
                        $('.nexto').removeClass("nexto");
                        Store[i].children[3].className += " showboss";
                        Store[i].children[1].className += "showo";
                        $('.showr').animate({
                            left:'-100%'}, 500);
                        $('.nextr').animate({
                            left:'0%'
                        }, {
                           duration:400,
                            easing: "easeOutExpo",
                            complete:function(){
                                $('.showr').removeClass('showr');
                                $('.nextr').removeClass('nextr');

                                Store[i].children[2].className += "showr";
                                $('.showboss').show();
                                i = i + 1;
                                console.log(i);
                                Store[i].children[0].className += "nextb";
                                Store[i].children[1].className += "nexto"; 
                                Store[i].children[2].className += "nextr";
                                $('.nextb, .nexto, .nextr').show();
                                $('.nextb').css({"z-index":"1"});
                                $('.nexto').css({"z-index":"2"});
                                $('.nextr').css({"z-index":"3"});

                            }
                        });
                    }
                });
            }
        });

    });
    
});