window.addEventListener("DOMContentLoaded", () => {

  // ****SCROLL START****
  window.addEventListener("scroll", () => {
    $(".header").classList.toggle("header__scroll", window.scrollY > 0);
  });
  // ****SCROLL END****

  // ****NAVBAR FUNCTION START****
  function openNavbarFunction() {
    $(".nav__new_navbar").classList.add("active");
    $(".new__navbar_container").classList.add("active");
  }

  function closeNavbarFunction() {
    $(".nav__new_navbar").classList.remove("active");
    $(".new__navbar_container").classList.remove("active");
  }

  $(".fa-bars-staggered").addEventListener("click", () => {
    openNavbarFunction();
  });

  $(".fa-times").addEventListener("click", () => {
    closeNavbarFunction();
  });

  $$(".nav__new_navbar_link").forEach((link) => {
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

  // ****NAVBAR FUNCTION END****


  // ****PICTURE CODES START****

  function closePicture() {
    $(".section__secret_img").classList.remove("active");
    $("body").style.overflow = "";
  }


  $$(".section__box_small img").forEach((element) => {
    element.addEventListener("click", () => {
      $(".section__secret_img").classList.add("active");
      $("body").style.overflow = "hidden";
      $(".section__secret_img_hover img").src = element.getAttribute("src");
    });
  });

  $(".new__navbar_container").addEventListener("click", (e) => {
    if (e.target == $(".new__navbar_container")) {
      closeNavbarFunction();
    }
  });

  $(".section__secret_img_hover").addEventListener("click", (e) => {
    if (e.target == $(".section__secret_img_hover")) {
      closePicture();
    }
  });

  // ****PICTURE CODES END****
});