window.addEventListener("DOMContentLoaded", () => {
  let times = document.querySelector(".fa-times");
  let newNavbar = document.querySelector(".nav__new_navbar");
  let faBars = document.querySelector(".fa-bars-staggered");
  let header = document.querySelector(".header");
  let images = document.querySelectorAll(".section__box_small img");
  let secretPicture = document.querySelector(".section__secret_img");
  let secretPictureImg = document.querySelector(
    ".section__secret_img_hover img"
  );
  let section__secret_img_hover = document.querySelector(
    ".section__secret_img_hover"
  );
  let body = document.querySelector("body");
  let newContainerNavbar = document.querySelector(".new__navbar_container");
  let newNavbarLinks = newContainerNavbar.querySelectorAll(
    ".nav__new_navbar_link"
  );

  // Sroll
  window.addEventListener("scroll", () => {
    header.classList.toggle("header__scroll", window.scrollY > 0);
  });

  // Open Navbar Function
  function openNavbarFunction() {
    newNavbar.classList.add("active");
    newContainerNavbar.classList.add("active");
  }

  // Close Navbar Function
  function closeNavbarFunction() {
    newNavbar.classList.remove("active");
    newContainerNavbar.classList.remove("active");
  }

  // Close Picture Function
  function closePicture() {
    secretPicture.classList.remove("active");
    body.style.overflow = "";
  }

  // Bars
  faBars.addEventListener("click", () => {
    openNavbarFunction();
  });

  // Times
  times.addEventListener("click", () => {
    closeNavbarFunction();
  });

  // Images
  images.forEach((element) => {
    element.addEventListener("click", () => {
      secretPicture.classList.add("active");
      body.style.overflow = "hidden";
      secretPictureImg.src = element.getAttribute("src");
    });
  });

  // New Navbar Container
  newContainerNavbar.addEventListener("click", (event) => {
    if (event.target == newContainerNavbar) {
      closeNavbarFunction();
    }
  });

  // Secret Img
  section__secret_img_hover.addEventListener("click", (event) => {
    if (event.target == section__secret_img_hover) {
      closePicture();
    }
  });

  // New Navbar Links
  newNavbarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeNavbarFunction();
    });
  });

  this.addEventListener("keydown", (e) => {
    if (e.code == "Escape") {
      closeNavbarFunction();
      closePicture();
    }
  });
});
