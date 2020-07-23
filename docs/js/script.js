$(function () {
  $(".hamburger.hamburger--squeeze").on("click", function (e) {
    $(this).toggleClass("is-active"),
      e.preventDefault(),
      $(".header__menu-list").toggleClass("is-active")
  });
});