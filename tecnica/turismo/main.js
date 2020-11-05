$(document).ready(function(){
    $(window).resize(function(){
        
        
        //medium
        if( $(window).width() <= 550 ) {
            $(".icono-red").hide();
            $(".fa-facebook-square").addClass("fa-2x");
            $(".fa-twitter-square").addClass("fa-2x");
            $(".fa-whatsapp-square").addClass("fa-2x");
            $(".fa-instagram-square").addClass("fa-2x");
            
        }
        else{
            $(".icono-red").show();
            $(".fa-facebook-square").removeClass("fa-2x");
            $(".fa-twitter-square").removeClass("fa-2x");
            $(".fa-whatsapp-square").removeClass("fa-2x");
            $(".fa-instagram-square").removeClass("fa-2x");
        }
        
        

    });

    
});