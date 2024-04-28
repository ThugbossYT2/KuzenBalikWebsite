$(document).ready(function () {
  // Function to handle increasing item count and updating total price
  $(".increment-btn").click(function () {
    var $parent = $(this).closest("p");
    var $priceSpan = $parent.find(".price");
    var price = parseFloat($priceSpan.text().replace("₺", ""));
    var count = parseInt($parent.find(".item-count").text());

    // Update item count
    count++;
    $parent.find(".item-count").text(count);

    // Update total price
    var totalPrice = parseFloat($(".total-price").text().replace("₺", ""));
    totalPrice += price;
    $(".total-price").html("<b>₺" + totalPrice.toFixed(2) + "</b>");
  });

  // Function to handle decreasing item count and updating total price
  $(".decrement-btn").click(function () {
    var $parent = $(this).closest("p");
    var $priceSpan = $parent.find(".price");
    var price = parseFloat($priceSpan.text().replace("₺", ""));
    var count = parseInt($parent.find(".item-count").text());

    // Update item count if count is greater than 0
    if (count > 0) {
      count--;
      $parent.find(".item-count").text(count);

      // Update total price
      var totalPrice = parseFloat($(".total-price").text().replace("₺", ""));
      totalPrice -= price;
      $(".total-price").html("<b>₺" + totalPrice.toFixed(2) + "</b>");
    }
  });
  $(".col-25 a")
    .on("mouseenter", function (evt) {
      var imgUrl = $(this).data("img");
      var text = $(this).data("text");
      $(".popup").html(
        '<img src="' + imgUrl + '" width="150" height="150"><br>' + text
      );
      $(".popup")
        .css({ left: evt.pageX + 30, top: evt.pageY - 15 })
        .show();
    })
    .on("mouseleave", function () {
      $(".popup").hide();
    });
});
