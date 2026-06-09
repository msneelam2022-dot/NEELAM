/* ==========================
NEELAM Premium Website JS
========================== */

/* Loader */

window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

}, 800);

});

/* Navbar Shadow On Scroll */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

navbar.style.boxShadow =
"0 10px 30px rgba(0,0,0,.12)";

}else{

navbar.style.boxShadow =
"0 2px 20px rgba(0,0,0,.08)";

}

});

/* Counter Animation */

const counters = document.querySelectorAll(".stat-box h3");

let counterStarted = false;

function startCounters(){

if(counterStarted) return;

counterStarted = true;

counters.forEach(counter => {

const targetText = counter.innerText;

const target =
parseInt(targetText.replace(/\D/g,''));

let count = 0;

const speed = target / 120;

const updateCounter = () => {

count += speed;

if(count < target){

counter.innerText =
Math.floor(count) +
targetText.replace(/[0-9]/g,'');

requestAnimationFrame(updateCounter);

}else{

counter.innerText = targetText;

}

};

updateCounter();

});

}

window.addEventListener("scroll", () => {

const statsSection =
document.querySelector(".stats");

if(!statsSection) return;

const sectionTop =
statsSection.getBoundingClientRect().top;

if(sectionTop < window.innerHeight - 100){

startCounters();

}

});

/* Reveal Animation */

const revealElements =
document.querySelectorAll(
".collection-card, .review-card, .stat-box, .gallery-grid img, .contact-box"
);

function revealOnScroll(){

revealElements.forEach(element => {

const top =
element.getBoundingClientRect().top;

if(top < window.innerHeight - 80){

element.style.opacity = "1";

element.style.transform =
"translateY(0px)";

}

});

}

revealElements.forEach(element => {

element.style.opacity = "0";

element.style.transform =
"translateY(40px)";

element.style.transition =
"all .7s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* Smooth Active Menu */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop =
section.offsetTop - 150;

if(pageYOffset >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(
link.getAttribute("href")
=== "#" + current
){

link.classList.add("active");

}

});

});

/* Mobile Menu */

const menuBtn =
document.querySelector(".menu-btn");

const navMenu =
document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click", () => {

if(
navMenu.style.display === "flex"
){

navMenu.style.display = "none";

}else{

navMenu.style.display = "flex";

navMenu.style.flexDirection = "column";

navMenu.style.position = "absolute";

navMenu.style.top = "80px";

navMenu.style.right = "20px";

navMenu.style.background = "#fff";

navMenu.style.padding = "20px";

navMenu.style.borderRadius = "15px";

navMenu.style.boxShadow =
"0 10px 30px rgba(0,0,0,.15)";

}

});

}

/* Floating WhatsApp Pulse */

const whatsapp =
document.querySelector(
".floating-whatsapp"
);

if(whatsapp){

setInterval(() => {

whatsapp.style.transform =
"scale(1.12)";

setTimeout(() => {

whatsapp.style.transform =
"scale(1)";

},300);

},2500);

}

/* Welcome Message */

console.log(
"NEELAM Premium Website Loaded Successfully"
);
