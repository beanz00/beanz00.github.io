
var flashbangImg = document.createElement("img");
flashbangImg.src = "flashbang.png";
flashbangImg.classList.add("center");
document.body.appendChild(flashbangImg);
document.documentElement.style.backgroundColor = "#000000";
setTimeout(() => {
  document.documentElement.style.backgroundColor = "#ffffff";
  var images = document.querySelectorAll('img');
  images.forEach(function(img) {
      img.remove();
  });
}, 1500);

