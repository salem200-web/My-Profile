// ==========================
// BUY BUTTONS
// ==========================
document.querySelectorAll(".buy-btn").forEach(button => {
    button.addEventListener("click", function () {
        const type = this.dataset.type || "template";
        alert("Redirecting to payment for " + type + "...");
    });
});


// ==========================
// SHOW BUTTONS (PAGE REDIRECT)
// ==========================
document.querySelectorAll(".show-btn").forEach(button => {
    button.addEventListener("click", function () {

        const page = this.dataset.page;

        if (!page) {
            console.error("No page defined for this button.");
            return;
        }

        // Fade effect
        document.body.style.transition = "opacity 0.4s ease";
        document.body.style.opacity = "0";

        setTimeout(() => {
            window.location.href = page;
        }, 400);
    });
});


// ==========================
// STAR RATING SYSTEM
// ==========================
const stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        stars.forEach((s, i) => {
            if (i <= index) {
                s.classList.add("active");
            } else {
                s.classList.remove("active");
            }
        });
    });
});