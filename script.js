const noButton = document.querySelector(".no-button");

function moveButton() {
    const randomX = Math.random() * 200 - 100; // Random position between -100px and 100px
    const randomY = Math.random() * 200 - 100;
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Move on hover (for desktop)
noButton.addEventListener("mouseover", moveButton);

// Move on click (for mobile)
noButton.addEventListener("click", moveButton);

function handleYesClick() {
    window.location.href = "yes_page.html";
}