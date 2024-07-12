
// JavaScript code to handle interactivity, like opening images in a lightbox
// You can expand this as needed
document.addEventListener("DOMContentLoaded", function() {
    // Example: Add event listeners to gallery items
    const galleryItems = document.querySelectorAll(".gallery-item img");
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            // Code to open image in a lightbox or larger view
        });
    });
});