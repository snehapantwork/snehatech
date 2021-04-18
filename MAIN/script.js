"use strict";

//document.addEventListener("DOMContentLoaded", function () {
// code...

const overlay = document.querySelector(".overlay");
const btnsopenModal = document.querySelectorAll("[class^=show-modal]"); //Class starting with show-modal

const openModal = function (modal_var) {
  // console.log("Button clicked");
  modal_var.classList.remove("hidden");
  overlay.classList.remove("hidden");
  modal_var.querySelector("button").addEventListener("click", function () {
    closeModal(modal_var);
  });

  overlay.addEventListener("click", function () {
    closeModal(modal_var);
  });

  document.addEventListener("keydown", function (e) {
    //Close modal on escape
    // console.log(e.key);
    if (e.key === "Escape") {
      closeModal(modal_var);
    }
  });
};

const closeModal = function (modal_var) {
  modal_var.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 1; i <= btnsopenModal.length; i++) {
  // let _thisBtn = btnsopenModal11 [i - 1];
  let _thisModal = document.querySelector(".modal" + i);

  btnsopenModal[i - 1].addEventListener("click", function () {
    //Attach event on click
    openModal(_thisModal);
  });
}
//////////////////////////////////Another way of solving it
/* 
"use strict";

//document.addEventListener("DOMContentLoaded", function () {
// code...
const modal1 = document.querySelector(".modal1");
console.log(modal1);
const modal2 = document.querySelector(".modal2");

const modal3 = document.querySelector(".modal3");
const overlay1 = document.querySelector(".overlay1");

const btncloseModal11 = document.querySelector(".close-modal1");
const btncloseModal12 = document.querySelector(".close-modal2");
const btncloseModal13 = document.querySelector(".close-modal3");
const btnsopenModal11 1 = document.querySelector(".show-modal1");
const btnsopenModal11 2 = document.querySelector(".show-modal2");
const btnsopenModal11 3 = document.querySelector(".show-modal3");

const openModal11 = function () {
  console.log("Button clicked");
  modal1.classList.remove("hidden");
  overlay1.classList.remove("hidden");
  btncloseModal11.addEventListener("click", closeModal11);
  overlay1.addEventListener("click", closeModal11);
};

const openModal12 = function () {
  console.log("Button clicked");
  modal2.classList.remove("hidden");
  overlay1.classList.remove("hidden");
  btncloseModal12.addEventListener("click", closeModal12);
  overlay1.addEventListener("click", closeModal12);
};
const openModal13 = function () {
  console.log("Button clicked");
  modal3.classList.remove("hidden");
  overlay1.classList.remove("hidden");
  btncloseModal13.addEventListener("click", closeModal13);
  overlay1.addEventListener("click", closeModal13);
};

const closeModal11 = function () {
  modal1.classList.add("hidden");
  overlay1.classList.add("hidden");
};
const closeModal12 = function () {
  modal2.classList.add("hidden");
  overlay1.classList.add("hidden");
};
const closeModal13 = function () {
  modal3.classList.add("hidden");
  overlay1.classList.add("hidden");
};

btnsopenModal11 1.addEventListener("click", openModal11);
btnsopenModal11 2.addEventListener("click", openModal12);
btnsopenModal11 3.addEventListener("click", openModal13);
// for (let i = 0; i < btnsopenModal11 1.length; i++) {
// console.log("adding " + i);
// btnsopenModal11 1[i].addEventListener("click", openModal11);
//   console.log("added " + i);
// }

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal1.classList.contains("hidden")) {
    closeModal11();
  }
  if (e.key === "Escape" && !modal2.classList.contains("hidden")) {
    closeModal12();
  }
  if (e.key === "Escape" && !modal3.classList.contains("hidden")) {
    closeModal13();
  }
});
 */
///////////////////////////////////////////////////////////
//slider1
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  //FUNCTIONS

  //dots functionality

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  //starting condition..side by side images
  //0% 100, 200, 300

  //-100, 0, 100, 200

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  //prev slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  //event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      // const slide = e.target.dataset.slide;
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
