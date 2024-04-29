// ============= Faqs =======================

let loader = document.querySelector(".loader");
window.addEventListener("scroll", vanish)

function vanish() {
  loader.classList.add("dispear");
}

// ============= Faqs =======================

const question = document.querySelectorAll('.faq');
question.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
    document.document.querySelector('.fa-arrow-circle-right').style.color = '#E3101F';
  })
})


// ================ Go To Top ==================

const goTopBtn = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});
