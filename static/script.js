// ================= TYPING EFFECT =================
const text = "Aspiring Data Analyst • Problem Solver";
let i = 0;

function typeEffect() {
  const el = document.getElementById("typing-text");
  if (!el) return;

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 35);
  }
}
window.addEventListener("load", typeEffect);

// ================= SCROLL REVEAL =================
function revealOnScroll() {
  const reveals = document.querySelectorAll(".glass-card");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      el.classList.add("active");
      el.classList.add("reveal");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ================= MOUSE GLOW =================
const glow = document.createElement("div");
glow.className = "cursor-glow";
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
// ================= AUTO CERTIFICATE SLIDER =================
window.addEventListener("load", () => {
  const slider = document.getElementById("certSlider");
  if (!slider) return;

  let scrollAmount = 0;

  function autoSlide() {
    scrollAmount += 240; // card width move

    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0;
    }

    slider.style.transform = `translateX(-${scrollAmount}px)`;
  }

  setInterval(autoSlide, 2500); // speed control
});
// ================= SMOOTH SCROLL =================
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ================= ACTIVE LINK ON SCROLL =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
// ================= HAMBURGER TOGGLE =================
const hamburger = document.getElementById("hamburger");
const navLinksBox = document.getElementById("navLinks");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinksBox.classList.toggle("show");
  });
}

// ================= SCROLL PROGRESS =================
window.addEventListener("scroll", () => {
  const progress = document.querySelector(".scroll-progress");
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = (scrollTop / height) * 100;
  progress.style.width = scrolled + "%";
});

// ================= NAVBAR GLOW =================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ================= SECTION REVEAL PRO =================

function revealOnScrollPro() {
  const trigger = window.innerHeight - 80;

  revealSections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;

    if (top < trigger) {
      sec.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScrollPro);
window.addEventListener("load", revealOnScrollPro);
// ===== SAFE REVEAL INIT =====
window.addEventListener("load", () => {
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.add("reveal-start");
  });
});
// ================= SAFE REVEAL v2 =================
const reveals = document.querySelectorAll(".reveal");

function revealOnScrollSafe() {
  const triggerBottom = window.innerHeight - 80;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerBottom) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScrollSafe);
window.addEventListener("load", revealOnScrollSafe);
// ================= TYPING EFFECT =================
const typingText = [
  "Aspiring Data Analyst 🚀",
  "Problem Solver 💡"
];

let tIndex = 0;
let cIndex = 0;
let isDeleting = false;

function typeEffect(){
  const el = document.getElementById("typing");
  if(!el) return;

  const current = typingText[tIndex];

  if(isDeleting){
    el.textContent = current.substring(0, cIndex--);
  }else{
    el.textContent = current.substring(0, cIndex++);
  }

  if(!isDeleting && cIndex === current.length){
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if(isDeleting && cIndex === 0){
    isDeleting = false;
    tIndex = (tIndex + 1) % typingText.length;
  }

  setTimeout(typeEffect, isDeleting ? 40 : 80);
}

window.addEventListener("load", typeEffect);
// ================= LIGHTBOX =================
const certImages = document.querySelectorAll(".cert-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

certImages.forEach(img=>{
  img.addEventListener("click", ()=>{
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

if(closeLightbox){
  closeLightbox.addEventListener("click", ()=>{
    lightbox.style.display = "none";
  });
}

window.addEventListener("click", e=>{
  if(e.target === lightbox){
    lightbox.style.display = "none";
  }
});
// ================= JOURNEY TOGGLE =================
function toggleJourney(){
  const content = document.getElementById("journeyContent");
  const arrow = document.getElementById("journeyArrow");

  if(!content) return;

  content.classList.toggle("show");
  arrow.classList.toggle("rotate");
}