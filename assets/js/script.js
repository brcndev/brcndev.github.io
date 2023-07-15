//Animação
if (window.SimpleAnime) {
    new SimpleAnime();
  }

  const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if(!immediate) func.apply(context, args)
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};

  
  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'anime';

  function animeScroll() {
    const windowTop = window.scrollY + ((window.innerHeight * 0.75));
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }

    })
  }

  animeScroll();

  if(target.length) {
  window.addEventListener('scroll', debounce( function() {
    animeScroll();
  }, 200));
}


const toTop = document.querySelector('.to-top');

window.addEventListener("scroll", () => {
  if(window.scrollY > 500) {
    toTop.classList.add('active')
  } else {
    toTop.classList.remove('active')
  }
})
