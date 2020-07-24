$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('#scrollTop').fadeIn();
    } else {
      $('#scrollTop').fadeOut();
    }
  });
  $(".hamburger.hamburger--squeeze").on("click", function (e) {
    $(this).toggleClass("is-active"),
      e.preventDefault(),
      $(".header__menu-list").toggleClass("is-active")
  });
  $('.testimonials__slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button id="prev" type="button" class="slick-arrow slick-prev"><img src="images/left-arrow.svg" alt="left"></button>',
    nextArrow: '<button id="next" type="button" class="slick-arrow slick-next"><img src="images/right-arrow.svg" alt="right"></button>'
  });
  $('a[href^="#"]').click(function () {
    let anchor = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(anchor).offset().top
    }, 600);
  });
  $("#scrollTop").click(function () {
    $('html ,body').animate({
      scrollTop: 0
    }, 800);
  });
});