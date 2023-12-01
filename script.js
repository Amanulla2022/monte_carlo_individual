// code for next and previous button

let currentIndex = 0;

function showImage(index) {
  const images = document.querySelectorAll("#slider-images img");
  images.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
  currentIndex = index;
}

function nextImage() {
  const totalImages = document.querySelectorAll("#slider-images img").length;
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

function prevImage() {
  const totalImages = document.querySelectorAll("#slider-images img").length;
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

function changePosition(position) {
  const images = document.querySelectorAll("#slider-images img");
  images.forEach((img) => {
    switch (position) {
      case "start":
        img.style.marginRight = "auto";
        showImage(currentIndex);
        break;
      case "center":
        img.style.margin = "auto";
        showImage(currentIndex);

        break;
      case "end":
        img.style.marginLeft = "auto";
        showImage(currentIndex);
        break;
      default:
        break;
    }
  });

  // Show the current image based on the selected position
  showImage(currentIndex);
}
// Show the initial image
showImage(currentIndex);
