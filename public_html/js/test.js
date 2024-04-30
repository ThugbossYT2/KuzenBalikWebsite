const acceptButton = document.getElementById("acceptButton");
const popup = document.getElementById("popup");

acceptButton.addEventListener("click", function () {
  const video = document.getElementById("vidauto");

  video.muted = false;
  video.play();
  video.volume = 0.3;

  popup.style.display = "none";
});
