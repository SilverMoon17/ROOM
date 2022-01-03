const swiper = new Swiper('.swiper', {
    slidesPerView: 1.15,
    centeredSlides: true,
    loop: true,
    // mousewheel: true,
    // cssMode: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });