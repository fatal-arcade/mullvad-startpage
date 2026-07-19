const form = document.getElementById('searchForm');
const input = document.getElementById('searchInput');

// Custom dropdown components 
const trigger = document.getElementById('dropdownTrigger');
const menu = document.getElementById('dropdownMenu');
const currentFavicon = document.getElementById('currentFavicon');
const currentText = document.getElementById('currentText');

// Set initial form states explicitly to match defaults
form.action = "https://duckduckgo.com/";
input.name = "q";

// Open/Close menu view box toggles
trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('show');
});

// Close dropdown cleanly when clicking outside
document.addEventListener('click', () => {
    menu.classList.remove('show');
});

// Option click handlers mapping config updates
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
        const target = e.currentTarget;

        // Update UI visuals
        currentText.textContent = target.textContent.trim();
        currentFavicon.src = target.getAttribute('data-icon');

        // Dynamically update form routing immediately to prevent submission race conditions
        form.action = target.getAttribute('data-url');
        input.name = target.getAttribute('data-param');
        
        // Hide menu and refocus input
        menu.classList.remove('show');
        input.focus();
    });
});