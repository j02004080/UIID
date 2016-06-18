$(document).ready(function() {
    
    var Store = document.getElementById("Gscreen").children;
    var No=1;
    var i=1;
    var ary=[
            "到江水號吃碗冰並合照",
            "到布街參觀，拿一張名片",
            "和福榮小吃店合照",
            "逛西市場一圈",
            "與西市場拱門合照",
            "回答問題，西市場在日治時期稱作?",
            "回答問題, 我們遊戲APP的名稱?",
            "和鄭記土魠魚羹合照"];
    
    console.log(Store[0].children[0]);
    $('#jan-b').addClass("showb");
    $('#jan-o').addClass("showo");
    $('#jan-r').addClass("showr");
    $('#jan-boss').addClass("showboss");
    $('.showb, .showo, .showr, .showboss').show();
    $('.showb, .showo, .showr').css({"left":"0%"});
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
    
    var endvid = document.getElementById('End'); 
    
    $(".next").click(function(){
        if(i>=12){
            $('#hideAll').fadeIn(500,function(){
                $('#End').fadeIn(500, function(){
                    endvid.play();
                    endvid.onended = function(){
                        window.location.href = "/";
                    }
                });
            });
        }
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
                                    
                                    if ( i==2){
                                     mission();
                                    }
                                    else if (i==5){
                                        mission();
                                    }
                                    else if(i==8){
                                        mission();
                                    }
                                    else if(i==11){
                                        mission();
                                    }
                            }
                        });
                    }
                });
            }
        });
                                    if(i==3){
                                        $('#1936').fadeIn(200);
                                    }

                                    else if(i==6){
                                        $('#1956').fadeIn(200);
                                    }

                                    else if(i==9){
                                        $('#1995').fadeIn(200);
                                    }
        
    });
    $('#1936, #1956, #1995').click(function(){
        $(this).fadeOut(200);
    });
    
    function random(num){
        var tmp = ary[ary.length-1]
        var s = ary[num];
        ary[num] = tmp;
        ary[ary.length-1] = s
        ary.pop();
        return s;
    }
    
        
    function mission(){
        var i = Math.floor((Math.random() * 7));
        var mis = random(i);
        console.log("mission:" +ary.length);
        swal({
              title: '任務',
              text: mis,
              type: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: '接受',
              cancelButtonText: '拒絕',
              confirmButtonClass: 'btn btn-success',
              cancelButtonClass: 'btn btn-danger',
              buttonsStyling: false
                }).then(function() {
                  swal(
                    '接受任務!',
                    '你已經接受任務',
                    'success'
                  );
                    }, function(dismiss) {
                      // dismiss can be 'cancel', 'overlay', 'close', 'timer'
                      if (dismiss === 'cancel') {
                        swal(
                          '拒絕',
                          '你拒絕了任務',
                          'error'
                        );
                    }
                })
        }
});