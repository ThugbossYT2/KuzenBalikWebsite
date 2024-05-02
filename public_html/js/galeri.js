$(document).ready(function () {
  
  

  const acceptButton = $("#acceptButton");
  const declineButton = $("#declineButton");
  const popup = $("#popup");
  const video = $("#vidauto")[0];
  const overlay = $("#overlay");


  
  popup.hide();
  overlay.hide();

  setTimeout(function () {
    popup.slideDown();
    overlay.show();
  }, 200);

  acceptButton.addClass("Gbtn");
  declineButton.addClass("Gbtn");

  acceptButton.on("click", function () {
    video.muted = false;
    video.play();
    video.volume = 0.3;
    popup.slideUp();
    overlay.hide();
  });

  declineButton.on("click", function () {
    video.muted = true;
    video.pause();
    video.currentTime = 0;
    video.volume = 0.3;
    popup.slideUp();
    overlay.hide();
  });
  var images = [];
  $.each(preload, function(i, val) {
      images[i] = new Image();
      images[i].src = val;
  });
});
