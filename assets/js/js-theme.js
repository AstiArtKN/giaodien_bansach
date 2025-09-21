let slideIndex = 1;
showSlides(slideIndex);

// Điều khiển Next/Prev
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Điều khiển theo dot
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Hàm hiển thị slide
function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll(".dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// Auto chạy sau 3 giây
setInterval(() => {
  plusSlides(1);
}, 5000);
