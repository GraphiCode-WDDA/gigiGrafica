const fadeInElements = [];
document.querySelectorAll('.fade:not(.active)').forEach(element => {
    fadeInElements.push({
        element: element,
        yAxisOffset: element.getBoundingClientRect().top + window.scrollY
    });
});

if(fadeInElements.length){
    window.onscroll = () => {
        if(window.scrollY >= fadeInElements[0].yAxisOffset - (window.innerHeight / 1.2)){
            fadeInElements[0].element.classList.add('active');
            fadeInElements.shift();
            if(!fadeInElements.length) window.onscroll = undefined;
        }
    };
    window.onload = () => {
        let maxElementReached = false;
        while(!maxElementReached && fadeInElements.length){
            if(window.scrollY >= fadeInElements[0].yAxisOffset - (window.innerHeight / 1.2)){
                fadeInElements[0].element.classList.add('active');
                fadeInElements.shift();
                continue;
            }
            maxElementReached = true;
        }
        if(!fadeInElements.length) window.onscroll = undefined;
    };
}