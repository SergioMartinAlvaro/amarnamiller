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

document.getElementById("button-start").addEventListener("click", () => {
  smoothTo('info');
})

document.getElementById("header-info").addEventListener("click", () => {
  smoothTo('info');
})

document.getElementById("header-amarna").addEventListener("click", () => {
  smoothTo('amarna');
})

document.getElementById("header-about").addEventListener("click", () => {
  smoothTo('about');
})

window.addEventListener("scroll", function() {

    if(window.scrollY > 10) {
      document.getElementsByClassName("header")[0].classList.add("backHeader");
    } else {
      document.getElementsByClassName("header")[0].classList.remove("backHeader");
    }
    if( document.documentElement.clientWidth > "1189") {
           const distance = window.scrollY;
    (document.getElementsByClassName("mainContainer")[0]).style.transform = `translateY(${distance *
      1}px)`;
    document.getElementsByClassName(
      "pageLayout"
    )[0].style.transform = `translateY(${distance * 0.3}px)`;
     setTimeout(() => {
      document.querySelector(".informationScreen .container").classList.add("animate-me");
        }, 400); 
    }

  });