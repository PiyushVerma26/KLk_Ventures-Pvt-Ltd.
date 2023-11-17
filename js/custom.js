var readMoreBtn = document.getElementById("read-more-btn");
var readMoreContent = document.querySelector(".read-more-content");
var image = document.querySelector("#centreImage");

readMoreBtn.addEventListener("click", toggleReadMore);

function toggleReadMore() {
  const buttonText = readMoreBtn.textContent;

  if (buttonText === "Read More") {
    readMoreContent.style.display = "block";
    readMoreBtn.textContent = "Read Less";
    image.style.margin = "auto";
  } else {
    readMoreContent.style.display = "none";
    readMoreBtn.textContent = "Read More";
    image.style.margin = "0";
  }
}

// const galleryImages = document.querySelectorAll(".gallery-image");
// const modalImage = document.getElementById("modalImage");

// galleryImages.forEach((image) => {
//   image.addEventListener("click", function () {
//     modalImage.src = this.src;
//   });
// });
