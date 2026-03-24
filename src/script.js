// 1. Cursor Glow Follow
const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// 2. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// 3. Performance-Optimized Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
const observerOptions = { threshold: 0.15 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

reveals.forEach((el) => observer.observe(el));

// 4. Contact Form User Feedback
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button");
    const originalText = btn.innerText;

    // UI Feedback: Show state change
    btn.innerText = "SENDING...";
    btn.disabled = true;

    setTimeout(() => {
      btn.innerText = "SENT! 🚀";
      btn.style.background = "var(--accent-cyan)";
      form.reset();

      setTimeout(() => {
        btn.innerText = originalText;
        btn.disabled = false;
        btn.style.background = "white";
      }, 3000);
    }, 1500);
  });
}
