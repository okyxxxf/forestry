
window.onload = () => {
	const forestrySwiper = new Swiper(".forestries__slider", {
        loop: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 0
          }
        }
      });

  const infoResoursesSwiper = new Swiper(".info-resourses__slider", {
        loop: true,
        spaceBetween: 0,
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