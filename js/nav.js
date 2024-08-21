
$(document).ready(function() {
    let $header = $("#header");
    let burger = $('.navbar-toggler');
    let menu = $('.full-menu');
    let navItems =$('.nav-item');
    
    //논문규정 다운로드파일
    /*
    $('a:contains("논문규정")').on('click', function(e) {
        var fileURL = '/data/file/%EB%85%BC%EB%AC%B8%EC%9E%91%EC%84%B1%EC%9A%94%EB%A0%B9.pdf';

        $(this).attr('download', '논문작성요령.pdf');
        $(this).attr('href', fileURL);
    });
    */

    $('.navbar-toggler').on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $('#lnb').toggleClass('menu--open');
      $('body').toggleClass('menu--open');
    });

  

    $(window).scroll(function(){
      if( $(window).scrollTop() > 50){
          $header.addClass("on");
      } else {
          $header.removeClass("on");
      }

    });

    $(".navbar-toggler").click(function(){
     //   $("#aside").toggleClass("on");
        //$(".aside_bg").toggleClass("on");
   
        $(this).toggleClass("on");

        function toggleClassBasedOnScreenSize() {

        if ($(window).width() > 1280) { 
          //  $("#aside").removeClass("on");
            //$(".aside_bg").removeClass("on");
            
            $(".navbar-toggler").removeClass("on");
            $("#lnb").removeClass("on");
            $("#aside .navbar-nav_m li").find(".sub").removeClass("on");
          } else {
          
          }
        }
        toggleClassBasedOnScreenSize();

        $(window).resize(function() {
            toggleClassBasedOnScreenSize();
        });

     
    });
    $(".aside_bg").click(function(){
        $("#aside").removeClass("on");
        $(".aside_bg").removeClass("on");
        $(".navbar-toggler").removeClass("on");
        $("#aside .navbar-nav_m li").removeClass("on");
        $("#aside .navbar-nav_m li").find(".sub").removeClass("on");
    });


    // $("#aside .navbar-nav_m li .sub").hide();

 
   

    $("#aside .navbar-nav_m li").click(function() {
      if (window.innerWidth <= 1280) { // 체크할 화면 너비 값
        $(this).toggleClass("on");
        $('#aside .navbar-nav_m li').not(this).removeClass('on');
        let subElement = $(this).find(".sub");
    
        if (subElement.is(":visible")) {
          subElement.slideUp();
        } else {
          $("#aside .navbar-nav_m li .sub").slideUp();
          subElement.slideDown();
        }
      }
    });

    




    
    $(".navbar-nav li").on("mouseenter", function(){
        $(this).addClass("on");
        $(this).find('.sub_menu').addClass("on");
    });
      
    $(".navbar-nav li").on("mouseleave", function(){
        $(this).removeClass("on");
        $(this).find('.sub_menu').removeClass("on");
   
    //   setTimeout(function(){
    //      $(".sub_menu").removeClass("on");
    //  }, 100);
  });
   
});
    

