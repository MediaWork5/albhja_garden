/*glopal $, alert, console*/

$(function(){

    'use strict';
    // the header scroll 
    var scrollHeader = $("#headerMoving");
    $(window).scroll(function(){
        if ( $(this).scrollTop() >= 200){
            scrollHeader.addClass('header-scroll');
        }
        else{
            scrollHeader.removeClass('header-scroll');
        }
    });

    $("header a, .intro .thebox a, footer .container > div:nth-child(1) a").on("click", function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop : $("#" + $(this).data('scroll')).offset().top - 40
        }, 1000);
    });
    
    $("header li a").on("click", function () {
        //$(this).addClass('active').parent().siblings().find('a').removeClass('active');
        $("header a").removeClass('active');
        $(this).addClass('active');
    });
    
    
    
    // the bitton to top
    
    var scrollButton = $("#button-top");
    
    $(window).scroll(function(){
        
        
        if ( $(this).scrollTop() >= 700){
            
            scrollButton.show();
        }
        else{
            
            scrollButton.hide();
            
        }
        
    });
    
    scrollButton.click(function(){
            
        $("html, body").animate({ scrollTop: 0}, 2000);

    });
    
     // menu bars at mobile screen
    
    $("header .container > .row > div:nth-child(1) i").click(function(){   
        $("header .container > .row > div:nth-child(2)").slideToggle(500)       
    });
    

    
    
          
    
});