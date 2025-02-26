document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check local storage for mode preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener('change', function () {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});
