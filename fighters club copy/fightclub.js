const slideshow = document.querySelector('.slideshow');
const slideshowImages = document.querySelectorAll('.slideshow img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = slideshowImages[0].clientWidth;

slideshow.style.transform = 'translateX(' + (-size * counter) + 'px';

//Button listeners

nextBtn.addEventListener('click',()=>{
    if(counter >= slideshowImages.length -1) return;
    slideshow.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slideshow.style.transform = 'translateX(' + (-size * counter) + 'px';
});

prevBtn.addEventListener('click',()=>{
    if (counter <= 0) return;
    slideshow.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slideshow.style.transform = 'translateX(' + (-size * counter) + 'px';

});

slideshow.addEventListener('transitionend',()=>{
  if (slideshowImages[counter].id === 'lastClone'){
    slideshow.style.transition = 'none'
    counter= slideshowImages.length -2;
    slideshow.style.transform = 'translateX(' + (-size * counter) + 'px';
  }
  if (slideshowImages[counter].id === 'firstClone'){
    slideshow.style.transition = 'none'
    counter= slideshowImages.length -counter;
    slideshow.style.transform = 'translateX(' + (-size * counter) + 'px';
  }
})