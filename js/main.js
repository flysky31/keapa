
$(document).ready(function() {

    
    let listArray = ["01","02","03","04","05"];
    let swiper = new Swiper('.swiper-container', {
      // Optional parameters
            loop: true,
            autoplayDisableOnInteraction: false,
            slidesPerView: 1,        
            //autoHeight: true,
               autoplay: {
                   delay: 5000,
              }, 
            effect: 'fade',
            fadeEffect: {
                fade: true
            },
            speed:2000,
            pagination: {
                el: '.swiper-pagination',
                clickable: 'true',
                type: 'bullets',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + '<em>'+ listArray[index]+'</em>' + '<i></i>' + '<b></b>'  + '</span>';
                  },
            
            },
       navigation: {
        nextEl: '#deps02 .swiper-button-next', 
        prevEl: '#deps02 .swiper-button-prev', 
      },
      
    })

    


     // 이미지 높이를 디바이스 높이에 맞게 조절하는 함수
    //  function resizeImageToScreenHeight() {
    //     var screenHeight = $(window).height();
    //     $('#deps01').height(screenHeight);
    // }

    // 페이지 로드 시 이미지 크기 조절
    // $(document).ready(function() {
    //     resizeImageToScreenHeight();
    // });

    // // 창 크기가 변경될 때마다 이미지 크기 조절
    // $(window).resize(function() {
    //     resizeImageToScreenHeight();
    // });
});
  

$(document).ready(function () {
    let ww = $(window).width();
    let tubesSwiper = undefined;

    function initSwiper() {

    if (ww < 1280 && tubesSwiper == undefined) {
         
        tubesSwiper = new Swiper(".tubesSwiper", {
        slidesPerView:1,   
        //centeredSlides: true,
       // slidesPerView: 2,
       // spaceBetween: 10,
        simulateTouch: true,
        loop: true,
           autoplay: {
             delay: 2000,
             disableOnInteraction: false,
           },
        navigation: {
            nextEl: ".tube.swiper-button-next",
            prevEl: ".tube.swiper-button-prev",
        },
        breakpoints: {

            1280: {
              slidesPerView: 6,
              spaceBetween: 40
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 40
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 20
              },
          
        },
        });
        } else if (ww >= 1280 && tubesSwiper != undefined) {
            tubesSwiper.destroy();
            tubesSwiper = undefined;
        }
    }

    initSwiper();

    $(window).on('resize', function () {
        ww = $(window).width();
        initSwiper();
    });

});


let swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 2,

    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
        nextEl: '.myarrow.swiper-button-next',
        prevEl: '.myarrow.swiper-button-prev',
      },
      breakpoints: {
        2000: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
      },
  });

    
  let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
	

	slidesPerGroup : 1, 
	loopFillGroupWithBlank : true,

    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    navigation: {
        nextEl: '.myarrow2.swiper-button-next',
        prevEl: '.myarrow2.swiper-button-prev',
      },
      breakpoints: {
        1930: {
          slidesPerView: 4,
          slidesPerGroup : 4, 
          spaceBetween: 20,
        },
        1280: {
            slidesPerView: 3,
            slidesPerGroup : 3, 
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 2,
            slidesPerGroup : 2, 
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup : 2, 
            spaceBetween: 20,
          },
      },
  });





   // 이미지 높이를 디바이스 높이에 맞게 조절하는 함수
// function resizeImageToScreenHeight() {
//     var screenHeight = $(window).height();
//     $('#deps01').height(screenHeight);
// }

// // 페이지 로드 시 이미지 크기 조절
// $(document).ready(function() {
//     resizeImageToScreenHeight();
// });

// // 창 크기가 변경될 때마다 이미지 크기 조절
// $(window).resize(function() {
//     resizeImageToScreenHeight();
// });




function aniCtrl(){
    var _st = $(window).scrollTop();
   
    var _wH = $(window).height();

    $('.ani-item').each(function(){
        var _this = $(this);
        if( _this.offset().top <= (_st + _wH) && !_this.hasClass('done') ){
            _this.addClass('done');
        }
    });
}


$(document).ready(function(){

    aniCtrl();

    $(window).scroll(function(){
        aniCtrl();
    });
});


