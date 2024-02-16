window.addEventListener("load", (event) => {
  console.log(event["currentTarget"]["location"]["pathname"]);
  if (event["currentTarget"]["location"]["pathname"] != "/gip/propos/") {
    return;
  }
  var swiperPagination = document.querySelectorAll('.swiper-pagination-custom .swiper-pagination-switch');
  var mySwiper = new Swiper(".swiper", {
    autoHeight: true,
    speed: 500,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    loop: false,
    effect: "slide",
    spaceBetween: 30,
    on: {
      init: function () {

        swiperPagination.forEach((elt) => elt.classList.remove("active"));
        swiperPagination[0].classList.add("active");
      },
      slideChangeTransitionStart: function () {
        swiperPagination.forEach((elt) => elt.classList.remove("active"));
        swiperPagination[mySwiper.realIndex].classList.add("active");
      }
    }
  });

  swiperPagination.forEach((elt) => elt.addEventListener("click", () => {
    mySwiper.slideTo(Array.prototype.indexOf.call(swiperPagination, elt));
    swiperPagination.forEach((li) => li.classList.remove("active"));
    elt.classList.add("active");
  }, false));
});