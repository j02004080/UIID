$(document).ready(function() {
    
    
    if(document.documentElement.clientWidth <=601){
            $(".next").click(function(){
                $('#jan-b').animate({
                    left:'-100%'}, 300);
                $('#fu-b').animate({
                    left:'0%',
                },  {
                    duration:300,
                    complete:function(){
                        $('#jan-o').animate({
                            left:'-100%'}, 300);
                        $('#fu-o').animate({
                            left:'0%'
                        }, {
                            duration:300,
                            complete:function(){
                                $('#jan-r').animate({
                                    left:'-100%'}, 300);
                                $('#fu-r').animate({
                                    left:'0%'}, 300);
                            }
                        });
                    }
                });

            });
    }
});