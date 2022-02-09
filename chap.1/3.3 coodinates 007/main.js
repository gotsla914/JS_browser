const horizontal = document.querySelector('.horizontal'); 
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', event => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`${x}, ${y}`);

    horizontal.style.top = `${event.clientY}px`;
    vertical.style.left = `${event.clientX}px`;
    target.style.top = `${event.clientY}px`;
    target.style.left = `${event.clientX}px`;
    tag.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.innerHTML = `${x}, ${y}`;
});