export class Carousel {
  constructor(mainContainer, images) {
    this.container = document.querySelector(mainContainer);
    this.images = document.querySelectorAll(images);
    this.currentIndex = 0;
    this.init();
  }

  init() {
    this.carouselDots();
    this.addEventListners();
    this.autoSlide();
  }

  autoSlide() {
    setInterval(() => this.nextSlide(), 5000);
  }

  addEventListners() {
    const carouselControls = document.querySelectorAll(".carousel-control");
    carouselControls.forEach((item) => {
      item.addEventListener("click", (event) => {
        const controllerIdentify = event.target.classList;

        if (controllerIdentify.contains("prev")) {
          this.prevSlide();
        } else if (controllerIdentify.contains("next")) {
          this.nextSlide();
        }
        console.log(this.currentIndex);
      });
    });

    const carouselDots = document.querySelectorAll(".carousel-dot");
    carouselDots.forEach((item) => {
      item.addEventListener("click", () => {
        const dotIndex = Array.from(item.parentElement.children).indexOf(item);

        this.images.forEach((item, index) => {
          if (index === dotIndex) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
        this.shiftActiveDot(dotIndex);
        this.currentIndex = dotIndex;
      });
    });
  }

  prevSlide() {
    this.currentIndex -= 1;
    this.checkIndex();
    this.images.forEach((item, index) => {
      if (index === this.currentIndex) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

    this.shiftActiveDot(this.currentIndex);
  }

  checkIndex() {
    if (this.currentIndex === -1) {
      this.currentIndex = this.images.length - 1;
    } else if (this.currentIndex === this.images.length) {
      this.currentIndex = 0;
    }
  }

  nextSlide() {
    this.currentIndex += 1;
    this.checkIndex();
    this.images.forEach((item, index) => {
      if (index === this.currentIndex) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

    this.shiftActiveDot(this.currentIndex);
  }

  shiftActiveDot(imageIndex) {
    const dots = document.querySelectorAll(".carousel-dot");

    dots.forEach((item, index) => {
      if (index === imageIndex) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  carouselDots() {
    const dotCount = this.images;

    const container = this.container;

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
}

const carousel = new Carousel(".carousel-container", ".carousel-image");
