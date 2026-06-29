$(document).ready(function () {
  const breakpoint = 768;

  function manageSlider() {
    const windowWidth = $(window).width();

    if (windowWidth <= breakpoint) {
      // Initialize Slick if it hasn't been initialized yet
      $(".cards").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      });
    } else {
      $(".cards").slick("unslick");
    }
  }

  $(".testimonial").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".navbar-button").click(function () {
    $(".navigation").toggleClass("navbar-active");
  });

  manageSlider();
  $(window).on("resize orientationchange", manageSlider);
});
