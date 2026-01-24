const images = [
  "images/OIP (1).webp",
  "images/OIP (2).webp",
  "images/OIP.webp"
];

let currentIndex = 0;

const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

nextBtn.onclick = function () {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  sliderImage.src = images[currentIndex];
};

prevBtn.onclick = function () {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  sliderImage.src = images[currentIndex];
};
