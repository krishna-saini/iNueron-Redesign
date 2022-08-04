// Tabbed components

const tabsContainer = document.querySelector(".programs--tab-container");
const tabs = document.querySelectorAll(".programs-tab");
const tabContent = document.querySelectorAll(".program-content");

// event delegation
tabsContainer.addEventListener("click", function (e) {
  const clickedTab = e.target.closest(".programs-tab");

  // Guard closed
  if (!clickedTab) return;

  // Remove active classes
  tabs.forEach((tab) => tab.classList.remove("programs-tab--active"));
  tabContent.forEach((c) => c.classList.remove("program-content--active"));

  // Activate tab
  clickedTab.classList.add("programs-tab--active");

  // Activate content AREA
  document
    .querySelector(`.program-content--${clickedTab.dataset.tab}`)
    .classList.add("program-content--active");

  // Reshuffle Slider

  slider(clickedTab.dataset.tab);
});

// //slider on program list

function slider(sliderNo = 1) {
  const slides = document.querySelectorAll(
    `.program-content--${sliderNo} .program-slider .program-slide`
  );
  const btnLeft = document.querySelector(
    `.slider__btn--${sliderNo}.slider__btn--left`
  );

  const btnRight = document.querySelector(
    `.slider__btn--${sliderNo}.slider__btn--right`
  );

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${34 * (i - slide)}%)`;
    });
  };

  //Next Slide
  const nextSlide = function () {
    if (curSlide + 3 === maxSlide) return;
    else curSlide++;
    goToSlide(curSlide);
  };

  //Prev Slide
  const prevSlide = function () {
    if (curSlide === 0) return;
    else curSlide--;
    goToSlide(curSlide);
  };

  //initial configuration
  const init = () => {
    goToSlide(0);
  };
  init();

  //Event Handler
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
}
slider();

// ---------------------------------
// // automatic slider on achiever's company
// ------------------------------------

// const companySlider = document.querySelector(".company-slider");
// const companySlides = document.querySelectorAll(".company-slider li");
// const firstSlideClone = companySlides[0].cloneNode(true);
// const lastSlideClone = companySlides[companySlides.length - 1].cloneNode(true);
// firstSlideClone.id = "first-clone";
// lastSlideClone.id = "last-clone";
// companySlider.append(firstSlideClone);
// companySlider.prepend(lastSlideClone);
// let index = 0;
// const slideWidth = companySlides[index].clientWidth;
// console.log(slideWidth);
// companySlider.style.transform = `translateX(${-slideWidth * index}px)`;
// const infiniteSlider = () => {
//   setInterval(() => {
//     index++;
//     companySlider.style.transform = `translateX(${-slideWidth * index}px)`;
//   }, 1000);
// };

// companySlider.addEventListener("transitionend", () => {
//   console.log("tranisiton end");
//   const companySlides = document.querySelectorAll(".company-slider li");
// });
// infiniteSlider();

const slide = document.querySelector(".company-slider");
const interval = 1000;

let slides = document.querySelectorAll(".company-slider li");
let index = 0;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

// slid.style.transform = `translateX(${-slideWidth * index}px)`;

const startSlide = () => {
  setInterval(() => {
    index++;
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${-slideWidth * index}px)`;
      slide.style.transition = "0.7s";
    });
  }, interval);
};

slides.forEach((slide) =>
  slide.addEventListener("transitionend", () => {
    slides = document.querySelectorAll(".company-slider li");
    if (slides[index].id === firstClone.id) {
      slide.style.transition = "none";
      index = 0;
      slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }

    // if (slides[index].id === lastClone.id) {
    //   slide.style.transition = "none";
    //   index = slides.length - 2;
    //   slide.style.transform = `translateX(${-slideWidth * index}px)`;
    // }
  })
);

startSlide();

// slider on tech avengers

function sliderTutor() {
  const slides = document.querySelectorAll(` .tutor-slide`);

  const btnLeft = document.querySelector(
    `.slider__btn--tutor.slider__btn--left`
  );

  const btnRight = document.querySelector(
    `.slider__btn--tutor.slider__btn--right`
  );

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    // console.log(curSlide);
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${36 * (i - slide)}%)`;
    });
  };

  //Next Slide
  const nextSlide = function () {
    if (curSlide + 3 === maxSlide) return;
    else curSlide++;
    goToSlide(curSlide);
  };

  //Prev Slide
  const prevSlide = function () {
    if (curSlide === 0) return;
    else curSlide--;
    goToSlide(curSlide);
  };

  //initial configuration
  const init = () => {
    goToSlide(0);
  };
  init();

  //Event Handler
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
}
sliderTutor();

// slider on testimonials

function sliderTestimonial() {
  const slides = document.querySelectorAll(` .testimonial-slide`);

  const btnLeft = document.querySelector(
    `.slider__btn--testimonial.slider__btn--left`
  );

  const btnRight = document.querySelector(
    `.slider__btn--testimonial.slider__btn--right`
  );

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    // console.log(curSlide);
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${33.5 * (i - slide)}%)`;
    });
  };

  //Next Slide
  const nextSlide = function () {
    if (curSlide + 3 === maxSlide) return;
    else curSlide++;
    goToSlide(curSlide);
  };

  //Prev Slide
  const prevSlide = function () {
    if (curSlide === 0) return;
    else curSlide--;
    goToSlide(curSlide);
  };

  //initial configuration
  const init = () => {
    goToSlide(0);
  };
  init();

  //Event Handler
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
}
sliderTestimonial();
