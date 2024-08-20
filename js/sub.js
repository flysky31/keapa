$(document).ready(function() {
    $(".tab-item").click(function() {
        // 클릭한 탭을 활성화
        $(".tab-item").removeClass("active");
        $(this).addClass("active");

        // 클릭한 탭에 해당하는 콘텐츠를 표시
        var index = $(this).index();
        $(".tab-content").removeClass("active");
        $(".tab-content:eq(" + index + ")").addClass("active");
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
          subElement.slideDown();
        }

        if($(this).hasClass("on")){
            //$(this).find(".revers > span").html("접어두기");            
            $(this).find(".revers").addClass("on");
          } else {
            $//(this).find(".revers > span").html("펼쳐보기");
            $(this).find(".revers").removeClass("on");
        }
        
       
    });
});
