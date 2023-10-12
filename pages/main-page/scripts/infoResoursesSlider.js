window.onload = () => {
  const infoResoursesSwiper = new Swiper(".info-resourses__slider", {
    loop: true,
    spaceBetween: 0,
    centeredSlidesBounds: true,
    speed: 200,
    navigation: {
      nextEl: "#info-resourse-next",
      prevEl: "#info-resourse-prev"
    },
    breakpoints: {
      440: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      640:{
        slidesPerView: 1,
        spaceBetween: 0
        },
      840:{
        slidesPerView: 2,
        spaceBetween: 0
      },
      1040: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      1240: {
        slidesPerView: 4,
        spaceBetween: 0
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 0
      },
    }
  });
}