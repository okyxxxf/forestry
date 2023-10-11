
window.onload = () => {
	const swiper = new Swiper(".forestries__slider", {
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
}