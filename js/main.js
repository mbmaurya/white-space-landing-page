$(document).ready(function () {
  $(".testimonial").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
  });

  $(".navbar-button").click(function () {
    $(".navigation").toggleClass("navbar-active");
  });
});
