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

showImage(currentIndex);

// add to wishlist hovering
document.addEventListener("DOMContentLoaded", function () {
  const iconContainers = document.querySelectorAll(".coloured-span-icon");

  iconContainers.forEach(function (iconContainer) {
    const wishlistDropup = iconContainer.nextElementSibling;

    iconContainer.addEventListener("mouseenter", function () {
      wishlistDropup.style.display = "block";
    });

    iconContainer.addEventListener("mouseleave", function () {
      wishlistDropup.style.display = "none";
    });
  });
});

// search overlay
const mainSearch = document.querySelector(".search-container-main");
const closeBtn = document.querySelector(".search-close-button");
const overLay = document.querySelector(".overlay");

function closeButtonPopupHide() {
  mainSearch.style.display = "none";
  document.body.style.overflow = "auto";
  document.body.style.opacity = "1";
  overLay.style.display = "none";
}

closeBtn.addEventListener("click", closeButtonPopupHide);

overLay.addEventListener("click", closeButtonPopupHide);

// search button popup
const searchPopupBtn = document.querySelector(".search-button-popup");
const searchPopupconatiner = document.querySelector(".search-container-main");

searchPopupBtn.addEventListener("click", () => {
  searchPopupconatiner.style.display = "block";
  document.body.style.overflow = "hidden";
  document.body.style.opacity = "0.5";
  overLay.style.opacity = "0.5";
  overLay.style.display = "block";
});

// cart overlay
const mainCart = document.querySelector(".cartpopup-container-main");
const closeBtnc = document.querySelector(".cart-close-button");
const overLayc = document.querySelector(".overlay");

function closeButtonPopupHidecart() {
  mainCart.style.display = "none";
  document.body.style.overflow = "auto";
  document.body.style.opacity = "1";
  overLayc.style.display = "none";
}

closeBtnc.addEventListener("click", closeButtonPopupHidecart);

overLayc.addEventListener("click", closeButtonPopupHidecart);

// cart button popup
const cartPopupBtn = document.querySelector(".cart-button-popup");
const cartPopupcontainer = document.querySelector(".cartpopup-container-main");

cartPopupBtn.addEventListener("click", () => {
  cartPopupcontainer.style.display = "block";
  document.body.style.overflow = "hidden";
  document.body.style.opacity = "0.5";
  overLayc.style.opacity = "0.5";
  overLayc.style.display = "block";
});
