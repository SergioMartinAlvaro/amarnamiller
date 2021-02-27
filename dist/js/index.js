let isSocialOpen = false;

document.getElementById("button-social").addEventListener("click",function() {
    this.innerText = "";
    if(!isSocialOpen) {
        let social = document.createElement("div");
        social.className = "button-media";
        let instagram = document.createElement("img");
        instagram.src = "dist/img/instagram.png";
        instagram.alt = "instagram";
        social.appendChild(instagram);
        let facebook = document.createElement("img");
        facebook.src = "dist/img/facebook.png";
        facebook.alt = "facebook";
        social.appendChild(facebook);
        document.getElementById("button-social").appendChild(social);
        document.getElementById("button-social").classList.add("button-media__hover");
    } else {
        this.innerText = "Me apunto!";
        document.getElementById("button-social").classList.remove("button-media__hover");
    }
    isSocialOpen = !isSocialOpen;

});

function smoothTo(id) {
  document.getElementById(id).scrollIntoView({block: 'start', behavior: 'smooth'});
}

function detectScrollEnd() {
  return (window.innerHeight + window.scrollY) >= document.body.offsetHeight
}

document.getElementById("button-start").addEventListener("click", () => {
  smoothTo('info');
})

function addSmoth(className, f) {
  document.querySelectorAll(className).forEach(x => x.addEventListener("click", f));
}
addSmoth('.header-info', () => {
  smoothTo('info');
  if(document.documentElement.clientWidth < "1189") {
    setTimeout(function() {
      toggleMenu();
    }, 400)
  }
});
addSmoth('.header-amarna', () => {
  smoothTo('amarna');
  if(document.documentElement.clientWidth < "1189") {
    setTimeout(function() {
      toggleMenu();
    }, 400)
  }
});
addSmoth('.header-about', () => {
  smoothTo('about');
  if(document.documentElement.clientWidth < "1189") {
    setTimeout(function() {
      toggleMenu();
    }, 400)
  }
})

window.addEventListener("scroll", function() {

    if(window.scrollY > 10) {
      document.getElementsByClassName("header")[0].classList.add("backHeader");
    } else {
      document.getElementsByClassName("header")[0].classList.remove("backHeader");
    }
    if( document.documentElement.clientWidth > "1189" && !detectScrollEnd()) {
        const distance = window.scrollY;
        (document.getElementsByClassName("mainContainer")[0]).style.transform = `translateY(${distance *
          1}px)`;
        document.getElementsByClassName(
          "pageLayout"
        )[0].style.transform = `translateY(${distance * 0.3}px)`;
    }

  });

  const menuBtn = document.querySelector('.menu-btn');
  const hamburger = document.querySelector('.menu-btn__burger');
  const nav = document.querySelector('.navR');
  const menuNav = document.querySelector('.menu-nav');
  const navItems = document.querySelectorAll('.menu-nav__item');
  let showMenu = false;

  menuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    if(!showMenu) {
      hamburger.classList.add('open');
      nav.classList.add('open');
      menuNav.classList.add('open');
      navItems.forEach(item => item.classList.add('open'));
      showMenu = true;
      
    } else {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
      menuNav.classList.remove('open');
      navItems.forEach(item => item.classList.remove('open'));
      showMenu = false;
    }
  }