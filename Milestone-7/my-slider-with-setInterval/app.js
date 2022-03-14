const images = [
  "images/mypic1.jpg",
  "images/mypic2.jpg",
  "images/mypic3.jpg",
  "images/mypic4.jpg",
  "images/mypic5.jpg",
  "images/mypic6.jpg",
  "images/mypic7.jpg",
  "images/mypic8.jpg",
  "images/mypic9.jpg",
];

let imageIndex = 0;
const imageSlider = document.getElementById("slider-img");
setInterval(() => {
  if (imageIndex >= images.length) {
    imageIndex = 0;
  }
  const imageURL = images[imageIndex];
  imageSlider.setAttribute("src", imageURL);
  imageIndex++;
}, 1500);
