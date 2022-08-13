window.addEventListener("DOMContentLoaded", () => {
  let times = document.querySelector(".fa-times");
  let newNavbar = document.querySelector(".nav__new_navbar");
  let faBars = document.querySelector(".fa-bars-staggered");
  let header = document.querySelector(".header");
  let images = document.querySelectorAll(".section__box_small img");
  let timesSecret = document.querySelector(".section__secret_img_hover i");
  let secretPicture = document.querySelector(".section__secret_img");
  let secretPictureImg = document.querySelector(
    ".section__secret_img_hover img"
  );
  let body = document.querySelector("body");
  let newContainerNavbar = document.querySelector(".new__navbar_container");

  window.addEventListener("scroll", () => {
    header.classList.toggle("header__scroll", window.scrollY > 0);
  });

  faBars.addEventListener("click", () => {
    newNavbar.classList.add("active");
    body.style.overflow = "hidden";
    newContainerNavbar.classList.add("active");
  });

  times.addEventListener("click", () => {
    newNavbar.classList.remove("active");
    body.style.overflow = "";
    newContainerNavbar.classList.remove("active");
  });

  images.forEach((element) => {
    element.addEventListener("click", () => {
      secretPicture.style.transform = "scale(1.0)";
      secretPictureImg.src = element.getAttribute("src");
    });
  });

  timesSecret.addEventListener("click", () => {
    secretPicture.style.transform = "scale(0)";
  });

  newContainerNavbar.addEventListener("click", (event) => {
    if (event.target == newContainerNavbar) {
      newNavbar.classList.remove("active");
      body.style.overflow = "";
      newContainerNavbar.classList.remove("active");
    }
  });
});
