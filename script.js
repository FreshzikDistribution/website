// Freshzik Distribution

document.addEventListener("DOMContentLoaded", function () {
    console.log("Freshzik Distribution website loaded successfully.");
});

// Animation au clic sur les boutons
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        button.style.transform = "scale(0.95)";

        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 150);
    });
});
