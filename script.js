const envelope = document.querySelector('.envelope');
const heartSeal = document.querySelector('.heart-seal');
let timeoutId;

function setActive(active) {
    document.body.classList.toggle('envelope-active', active);
}

envelope.addEventListener('mouseover', () => {
    clearTimeout(timeoutId);
    heartSeal.style.opacity = 0;
    setActive(true);
});

envelope.addEventListener('mouseout', () => {
    const isOpen = envelope.classList.contains('open');
    setActive(isOpen);
    timeoutId = setTimeout(() => {
        heartSeal.style.opacity = 1;
    }, 1500);
});

envelope.addEventListener('click', (e) => {
    e.preventDefault();
    envelope.classList.toggle('open');
    setActive(envelope.classList.contains('open'));
    if (envelope.classList.contains('open')) {
        heartSeal.style.opacity = 0;
    } else {
        timeoutId = setTimeout(() => {
            heartSeal.style.opacity = 1;
        }, 1500);
    }
});

heartSeal.style.transition = 'opacity 0.3s ease';