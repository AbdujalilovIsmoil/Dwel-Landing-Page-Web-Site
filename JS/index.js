let times = document.querySelector(".fa-times");
let newNavbar = document.querySelector(".nav__new_navbar");
let faBars = document.querySelector(".fa-bars-staggered");
let header = document.querySelector(".header");
let images = document.querySelectorAll(".section__box_small img");
let timesSecret = document.querySelector(".section__secret_img_hover i");
let secretPicture = document.querySelector(".section__secret_img");
let secretPictureImg = document.querySelector(".section__secret_img_hover img");

window.addEventListener("scroll", () => {
  header.classList.toggle("header__scroll", window.scrollY > 0);
});

times.addEventListener("click", () => {
  newNavbar.style.transform = "translateX(-675px)";
  newNavbar.style.boxShadow = "0 0 0 white";
  console.log(1);
});

faBars.addEventListener("click", () => {
  newNavbar.style.transform = "translateX(0px)";
  newNavbar.style.boxShadow = "0 0 20px 1000px rgba(0, 0, 0,0.7)";
  console.log(1);
});

images.forEach(element => {
  element.addEventListener("click",()=>{
    secretPicture.style.transform = "scale(1.0)";
    secretPictureImg.src = element.getAttribute("src");
  })
})

timesSecret.addEventListener("click",()=>{
  secretPicture.style.transform = "scale(0)";
})