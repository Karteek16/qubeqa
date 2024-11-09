let items = document.querySelectorAll('.slider .item');
let active = 0; // Starting index for the active item

function loadShow() {
    items.forEach((item, index) => {
        item.classList.remove('active');
        item.style.transform = '';
        item.style.zIndex = '';
        item.style.opacity = '';
    });

    // Set the active item in the center
    items[active].classList.add('active');
    items[active].style.zIndex = 1;
    items[active].style.opacity = 1; // Fully opaque for active card

    // Left and right card calculations
    const leftIndices = [(active + 3) % items.length, (active + 4) % items.length]; // Left side cards
    const rightIndices = [(active + 1) % items.length, (active + 2) % items.length]; // Right side cards

    // Show items to the left
    leftIndices.forEach((index, offset) => {
        items[index].style.transform = `translateX(${-150 * (offset + 1)}px) scale(${0.8})`;
        items[index].style.zIndex = -1;
        items[index].style.opacity = 0.6; // Semi-transparent
    });

    // Show items to the right
    rightIndices.forEach((index, offset) => {
        items[index].style.transform = `translateX(${150 * (offset + 1)}px) scale(${0.8})`;
        items[index].style.zIndex = -1;
        items[index].style.opacity = 0.6; // Semi-transparent
    });
}

// Initial load
loadShow();

// Click listeners for carousel navigation
document.querySelector('.left-click-area').addEventListener('click', () => {
    active = (active + 1) % items.length; // Increment to go to the next item
    loadShow();
});

document.querySelector('.right-click-area').addEventListener('click', () => {
    active = (active - 1 + items.length) % items.length; // Decrement to go to the previous item
    loadShow();
});

// Auto move functionality
setInterval(() => {
    active = (active + 1) % items.length; // Move to the next item
    loadShow();
}, 3000); // Change slides every 3 seconds
