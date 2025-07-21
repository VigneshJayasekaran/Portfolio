let scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  scrollToTopBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const toggleButton = document.getElementById("toggle-dark-mode");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️ Light Mode";
    } else {
        toggleButton.textContent = "🌙 Dark Mode";
    }
});
