let GalImages = document.querySelectorAll('#pageContent #listGlr img');

for(let i = 0; i < GalImages.length; i++){
    let image = GalImages[i];
    image.addEventListener('click',showSinglePict,false);
}
function showSinglePict(e){
    let image = e.target;
    let imageContainer = document.getElementById('imageContainer');
    let bigImage = imageContainer.querySelector('img');
    bigImage.src = image.src;
    imageContainer.classList.toggle('visible');
    imageContainer.addEventListener('click',closeSinglePict,false);
}
function closeSinglePict(){
    let imageContainer = document.getElementById('imageContainer');
    imageContainer.classList.toggle('visible');
}