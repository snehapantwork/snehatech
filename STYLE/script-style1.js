// Tabbed component

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

//using event delegation--add event handeler to the common parent, of all element.

tabsContainer.addEventListener("click", function (e) {
  //matching strategy
  const clicked = e.target.closest(".operations__tab");

  //Guard Class
  if (!clicked) return;

  //Remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  //Active tab
  clicked.classList.add("operations__tab--active");

  //Activate content area using data-tab
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
