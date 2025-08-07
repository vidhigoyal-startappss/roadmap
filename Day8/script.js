const toggleSwitch = document.getElementById("themeToggle");
const themeStatus = document.getElementById("themeStatus");
const themeIcon = document.getElementById("themeIcon");

window.addEventListener("DOMContentLoaded", () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.body.classList.add("dark");
    toggleSwitch.checked = true;
    updateUI("dark");
  } else {
    updateUI("light");
  }
});

function updateUI(theme) {
  themeStatus.textContent = `Current Theme: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`;
  themeIcon.src = theme === "dark" ? "dark-theme.jpg" : "light-theme.jpg";
}

toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    updateUI("dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
    updateUI("light");
  }
});
