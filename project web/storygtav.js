// Animate cards on scroll
const cards = document.querySelectorAll('.story-card');
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom){
            card.classList.add('animate');
        }
    });
});

// Show more story
const showBtn = document.getElementById('showMore');
const extraStory = document.getElementById('extraStory');

showBtn.addEventListener('click', () => {
    extraStory.classList.toggle('show');
    showBtn.textContent = extraStory.classList.contains('show') ? "Hide Story" : "Show More Story";
});