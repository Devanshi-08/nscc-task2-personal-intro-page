// ---------------------------------------------------------------
// Devanshi Mishra — Personal Introduction Page
// Handles: dark/light theme toggle with localStorage persistence,
// and the dynamic footer year.
// ---------------------------------------------------------------

(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");

  /**
   * Returns the theme currently applied to <html>.
   */
  function getCurrentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  /**
   * Applies a theme to the page, updates the toggle button's
   * accessible state, and persists the choice to localStorage
   * so it survives a page refresh.
   */
  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }

    toggleBtn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    toggleBtn.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
    );

    localStorage.setItem("theme", theme);
  }

  // Sync the button's initial accessible state with whatever the
  // inline head script already applied (it runs before this file
  // to avoid a flash of the wrong theme).
  applyTheme(getCurrentTheme());

  toggleBtn.addEventListener("click", function () {
    const next = getCurrentTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
  });

  // Footer year, kept accurate without needing a manual edit each year.
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
