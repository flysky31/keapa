$(document).ready(function() {
    $(".tab-item").click(function() {
        $(".tab-item").removeClass("active");
        $(this).addClass("active");

        var index = $(this).index();
        $(".tab-content").removeClass("active");
        $(".tab-content:eq(" + index + ")").addClass("active");
    });

    $('.tab').click(function () {
      $('.tab').removeClass('active');
      $('.tab-pane').removeClass('active');
      $(this).addClass('active');
      var tabId = $(this).data('tab');
      $('#' + tabId).addClass('active');
  });
  
    $("#encyclical01 ul li").click(function(){
        $(this).toggleClass("on");
        $('#encyclical01 ul li').not(this).removeClass('on');   
        $("#encyclical01 ul li .revers").removeClass("on");      
     
        let subElement = $(this).find(".content");

        if (subElement.is(":visible")) {
          subElement.slideUp();         
          
        } else {
          $("#encyclical01 ul li .content").slideUp();
          subElement.slideDown();        }

        if($(this).hasClass("on")){        
            $(this).find(".revers").addClass("on");
          } else {
            $(this).find(".revers").removeClass("on");
        }      
    });
});
