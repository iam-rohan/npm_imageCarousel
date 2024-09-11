function carouselDots(images, mainContainer) {
  const dotCount = document.querySelectorAll(images);

  const container = document.querySelector(mainContainer);

  const carouselDots = document.createElement("div");
  carouselDots.classList.add("carousel-dots");

  dotCount.forEach((_, index) => {
    const carouselDot = document.createElement("span");
    carouselDot.classList.add("carousel-dot");
    if (index === 0) {
      carouselDot.classList.add("active");
    }
    carouselDots.appendChild(carouselDot);
  });

  container.appendChild(carouselDots);
}

carouselDots(".carousel-image", ".carousel-container");
