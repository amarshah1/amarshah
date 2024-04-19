const originalImage = document.getElementById('image-hover');

originalImage.addEventListener('mouseover', () => {
    hoverImage.style.opacity = '1';
});

originalImage.addEventListener('mouseout', () => {
    hoverImage.style.opacity = '0';
});