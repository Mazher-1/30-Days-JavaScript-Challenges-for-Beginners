const images = [
    'artical.jpg',
    'artical1.jpg',
    'artical3.jpg',
];


let currentIndex = 0;
const sliderImage = document.getElementById('sliderImage')
const prevButton = document.getElementById('prevButton')
const nextButton = document.getElementById('nextButton')

sliderImage.src = images[currentIndex];

function updateImage(index) {
    sliderImage.src = images[index];
}

prevButton.addEventListener('click' , () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex -1 ;
    updateImage(currentIndex)
});

nextButton.addEventListener('click' , () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1 ;
    updateImage(currentIndex);
});

setInterval(() => {
    currentIndex = (currentIndex === images.length -1) ? 0 :currentIndex + 1;
    updateImage(currentIndex)
}, 5000);