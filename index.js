// fade in animation when an elements enter the viewport

function isInViewport(element){
    const rect =element.getBoundingClientRect();
    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

function handleFadeIn() {
    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((element)=>{
        if(isInViewport(element)){
            element.classList.add('is-visible');
        }
    });
}

// event for scrolling 
window.addEventListener('scroll',() =>{
    handleFadeIn();
});

// initial check Animation on the load page 
handleFadeIn();

// _______for responsiveness 

burger=document.querySelector('.burger')
navbarItems=document.querySelector('.navbar')
nav=document.querySelector('.items')

burger.addEventListener('click',()=>{
    navbarItems.classList.toggle('h-class')
    nav.classList.toggle('v-class')
})