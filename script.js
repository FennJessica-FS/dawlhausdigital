document.addEventListener("DOMContentLoaded", () => {
  const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 100; // Trigger slightly earlier

      if (elementTop < windowHeight - elementVisible) {
        el.classList.add("active");
      }
    });
  };

  // Run on scroll
  window.addEventListener("scroll", reveal);

  // Run immediately on load to catch boxes already in view
  reveal();
  
  // Backup: Force active class after 1 second if still hidden
  setTimeout(reveal, 1000);
});
