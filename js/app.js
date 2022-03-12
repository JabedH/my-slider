const myImg = [
  "img-1.jpg",
  "img-2.jpg",
  "img-3.jpg",
  "img-4.jpg",
  "img-5.jpg",
  "img-6.jpg",
  "img-7.jpg",
  "img-8.jpg",
];
let imgIndex = 0;
const getImg = document.getElementById("myImg");
setInterval(() => {
  if (imgIndex >= myImg.length) {
    imgIndex = 0;
  }
  const imgUrl = myImg[imgIndex];
  getImg.setAttribute("src", imgUrl);
  console.log(imgUrl);
  imgIndex++;
}, 1500);
