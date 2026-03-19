
const counters = document.querySelectorAll('.counter');

counters.forEach(counter=>{
    const updateCount = ()=>{
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 100;

        if(count < target){
            counter.innerText = (count + increment).toFixed(1);
            setTimeout(updateCount,20);
        } else {
            counter.innerText = target;
        }
    }
    updateCount();
});


document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('mousemove',e=>{
        const x = e.offsetX;
        const y = e.offsetY;
        const rotateX = (y / card.offsetHeight - 0.5) * 20;
        const rotateY = (x / card.offsetWidth - 0.5) * 20;
        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave',()=>{
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});
