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

const btnEng = document.getElementById('btnEng') 
const btnBr = document.getElementById('btnBr') 

btnEng.addEventListener('click', function() {
 
  
  let ulAbout = document.getElementById('ulAbout')
  let ulProjects = document.getElementById('ulProjects')
  let ulContact = document.getElementById('ulContact')

  let introMyself = document.querySelector('.intro-myself');
  let devFront = document.getElementById('devFront');

  let aboutH1 = document.getElementById('aboutH1');
  let aboutH2 = document.getElementById('aboutH2');
  let aboutP = document.getElementById('aboutP');

  let gradH2 = document.getElementById('gradH2');
  let gradH3 = document.getElementById('gradH3');
  let gradP = document.getElementById('gradP');

  let gradHh3 = document.getElementById('gradHh3');
  let gradHh4 = document.getElementById('gradHh4');
  let gradPp = document.getElementById('gradPp');
  
/* Header */
  ulAbout.innerHTML = ('<a href="#about">About</a>');
  ulProjects.innerHTML = ('<a href="#projects">Projects</a>');
  ulContact.innerHTML = ('<a href="#about">Contact</a>');
/* Main */
  introMyself.textContent = ('Hey there, i am');
  devFront.textContent = (' Front-End Developer.'); 
/* About */
  aboutH1.textContent = ('About me');
  aboutH2.textContent = ('Guilherme Boracini, IT student focusing on WEB Development.');
  aboutP.textContent = ("Graduating in Systems Analysis and Development from VINCIT College, passionate about creating interactive and visually attractive websites. I'm constantly improving my coding skills, design principles and web development framework."); 
/* Graduation */
  gradH2.textContent = ("Graduation");
  gradH3.textContent = ("Feb 2023 - May 2023");
  gradP.textContent = ("Origamid - 46 Hours");

  gradHh3.textContent = ('Oct 2022 - Studying');
  gradHh4.textContent = ('Systems Analysis and Development')
  gradPp.textContent = ('VINCIT College')

});
/*
btnBr.addEventListener('click', function() {

});
 /* 
  let ulAbout = document.getElementById('ulAbout')
  let ulProjects = document.getElementById('ulProjects')
  let ulContact = document.getElementById('ulContact')

  let introMyself = document.querySelector('.intro-myself');
  let devFront = document.getElementById('devFront');

  ulAbout.innerHTML = ('<a href="#about">Sobre</a>');
  ulProjects.innerHTML = ('<a href="#projects">Projetos</a>');
  ulContact.innerHTML = ('<a href="#about">Contato</a>');
  introMyself.textContent = ('Olá, eu sou');
  devFront.textContent = ('Desenvolvedor Front-End');  

  
  /* About */
  
  /*aboutH1.textContent = ('Sobre');
  aboutH2.textContent = ('Guilherme Boracini, estudante de TI com foco em Desenvolvimento WEB.');
  aboutP.textContent = ("Graduating in Systems Analysis and Development from VINCIT College, passionate about creating interactive and visually attractive websites. I'm constantly improving my coding skills, design principles and web development framework."); 
/* Graduation */
  /*gradH2.textContent = ("Graduation");
  gradH3.textContent = ("Feb 2023 - May 2023");
  gradP.textContent = ("Origamid - 46 Hours");

  gradHh3.textContent = ('Oct 2022 - Studying');
  gradHh4.textContent = ('Systems Analysis and Development')
  gradPp.textContent = ('VINCIT College')
})
;
*/