

$(function(){
    //плавный скролл если браузер не поддерживает  scroll-behavior: smooth
     var $page = $('html, body');
     $('a[href*="#"]').click(function() {
         $page.animate({
             scrollTop: $($.attr(this, 'href')).offset().top
         }, 400);
         return false;
    });

    $('.menu__btn').on('click', function(){
    $('.swiper-pagination-bullets').slideToggle();
    });

    $('body').on('click', '.swiper-pagination-bullets', function(){
        $(this).hide();
      });

    $('.menu__btn-search').on('click', function(){
        $('.header__search').toggleClass('active')
    })
//закрытие окна поиска при клике вне его
    $(document).mouseup(function (e) {
        var container = $('.header__search');
        if (container.has(e.target).length === 0){
            container.removeClass('active');
        }
    });
    
    const swiperH = new Swiper('.home__slider', {
        lazy: {
            loadPrevNext: true,
        },
        loop: true,
        slidesPerView: 1,
        watchSlidesVisibility: true,
        watchSlidesProgress:true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
    });

    const swiper = new Swiper('.services__slider', {
        loop: true,
        slidesPerView: 3,
        watchSlidesVisibility: true,
        watchSlidesProgress:true,
        lazy: {
            loadPrevNext: true,
        },
        navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            1180: {
              slidesPerView: 3,
              direction: 'horizontal',
              spaceBetween: 0,
            },

            800: {
                direction: 'vertical',
                slidesPerView: 2,
                spaceBetween: 50,
                centeredSlides: false, 
            },
           
            320: {
                direction: 'horizontal',
                slidesPerView: 1,
                spaceBetween: 50,
                centeredSlides: true, 
                
            },
        }
    });

   

    const swiperV = new Swiper('.main-slider', {
       
        direction: 'vertical',
        mousewheel: true,              
        hashNavigation: {
            replaceState: true,
            watchState:true,
        },

        pagination: {
            clickable: true,
            renderBullet: function (index, className) {
                var arr = new Array('Главная', 'Почему мы', 'Наша клиника', 'Услуги',   'Дополнительно', 'Контакты');
              return '<span class="' + className + '">' + (arr[index]) + '</span>';
            },
            el: '.swiper-pagination',
            },
          
        });
     
      
        swiperV.on('slideChangeTransitionStart', function() {  
        if($('.swiper-slide.swiper-slide-active').hasClass('reviews-slide')){
        $(".counter__count").each(function() {
            $(this).prop("Counter", 0).animate({
                Counter: $(this).text()
            }, {
                duration: 1200,
                easing: "swing",
                step: function(t) {
                     $(this).text(Math.ceil(t))
                    }
                })
           }); 
        }
    });
   // swiper-slide reviews-slide swiper-slide-active
         
    //     $(".swiper-slide-active.counter__count").each(function() {
    //         $(this).prop("Counter", 0).animate({
    //             Counter: $(this).text()
    //         }, {
    //             duration: 1200,
    //             easing: "swing",
    //             step: function(t) {
    //                 $(this).text(Math.ceil(t))
    //             }
    //         })
    //    }); 
    
   
   // google.maps.event.addDomListener(window, 'load', initMap);
   // Initialize and add the map
  
 
 
})  