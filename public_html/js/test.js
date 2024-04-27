$(document).ready(function () {
  $(".Gbtn").click(function () {
    var currentValue = parseInt($("#checkoutLabel").text());

    var newValue = currentValue + 1;

    $("#checkoutLabel").text(newValue);
  });
});
