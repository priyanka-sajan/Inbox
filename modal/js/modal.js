$(document).ready(function () {
  $(".open-btn").click(function () {
    $(".container").addClass("show");
  })
  $(".container").click(function() {
    $(".container").removeClass("show");
  })
});






