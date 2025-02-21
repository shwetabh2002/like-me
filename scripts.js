// Click YES button
function clickYesButton() {
    alert('I like you too <3');
}

// Move NO button on hover (Desktop) or click (Mobile)
function moveNoButton() {
    let noButton = document.getElementById('no-button');

    // Get screen dimensions
    let maxX = window.innerWidth - noButton.offsetWidth - 20; // 20px margin
    let maxY = window.innerHeight - noButton.offsetHeight - 20; // 20px margin

    // Generate random position within limits
    let x = Math.max(10, Math.random() * maxX);
    let y = Math.max(10, Math.random() * maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Apply correct event for mobile & desktop
document.addEventListener("DOMContentLoaded", function () {
    let noButton = document.getElementById('no-button');

    if (window.innerWidth <= 768) {
        // Mobile: Move on click
        noButton.addEventListener('click', moveNoButton);
    } else {
        // Desktop: Move on hover
        noButton.addEventListener('mouseover', moveNoButton);
    }
});
