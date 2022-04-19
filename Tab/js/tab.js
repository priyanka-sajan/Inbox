$(document).ready(function () {
  $('.link').click(function () {
    $('.link').removeClass('active');
    $(this).addClass('active');
    tab = $(this).attr('href');
    $('.tab-menu .active').removeClass('active');
    $(tab).addClass('active');
  });
});


