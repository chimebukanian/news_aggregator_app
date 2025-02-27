document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".dark-mode-toggle");
    const body = document.body;

    // Dark Mode Toggle
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Store user preference
        localStorage.setItem("dark-mode", body.classList.contains("dark-mode"));
    });

    // Apply stored dark mode preference
    if (localStorage.getItem("dark-mode") === "true") {
        body.classList.add("dark-mode");
    }
});
