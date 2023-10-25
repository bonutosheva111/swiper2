new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
  
  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
 
    pagination: {
        el: '.swiper-pagination',
       /*  clickable: true,
        dynamicBullets: true,
        renderBullet:function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        } */
        type: 'progressbar',
        /* renderFraction: function (currentClass, totalClass) {
            return '<Фото span class="' + currentClass + '"></span>' +
                    ' из ' +
                    '<span class="' + totalClass + '"></span>';
        } */
      },
      scrollbar:{
        el: 'swiper-scrollbar',
        draggable: true
      },
      simulateTouch: true,
      touchRatio: 1,
      touchAngle: 45,
      grabCursor: true,
      slideToClickedSlide: true,

      keyboard: {
      enable: true,
      onlyInViewport: true
      },
      mousewheel:{
        sensitivity: 1,
       /*  eventsTarget: '.image-slider' */
      },
      slidesPerView: 3,
      /* spaceBetween: 40, */
      centeredSlides: true,

      autoplay:{
        delay: 1000,
        StopOnLastSlide: false,
        disableOnInteraction: true
      },
      speed: 1000,
      parallax: true,
      



  });