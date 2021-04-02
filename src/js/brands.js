var swiper = new Swiper('.brands__swiper-container', {
    loop:true,
    // autoplay: true,
    centeredSlides: true,
    // speed: 100,
    spaceBetween: 1,
    slidesPerView:1,
    slidesPerGroup:1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });