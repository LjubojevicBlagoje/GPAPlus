// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".nav-btn");
  const views = document.querySelectorAll(".view-section");

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const viewToShow = btn.getAttribute("data-view");

      // Update active button style
      navButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Show the correct view and hide the others
      views.forEach((section) => {
        section.classList.remove("active-view");
      });
      document.getElementById(`${viewToShow}-view`).classList.add("active-view");
    });
  });
});
