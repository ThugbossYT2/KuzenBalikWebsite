$(document).ready(function () {
  alert("⚠ Bu bir deneme amaçlı gerçek ilanlar olmayan replika bir sitedir.⚠");
  $(".Gbtn").click(function () {
    var currentValue = parseInt($("#checkoutLabel").text());

    var newValue = currentValue + 1;

    $("#checkoutLabel").text(newValue);
  });
});
