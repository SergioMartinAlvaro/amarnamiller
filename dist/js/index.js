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

window.addEventListener("scroll", function() {
    if( document.documentElement.clientWidth > "1189") {
           const distance = window.scrollY;
    (document.getElementsByClassName("frontScreen")[0]).style.transform = `translateY(${distance *
      1}px)`;
    document.getElementsByClassName(
      "pageLayout"
    )[0].style.transform = `translateY(${distance * 0.3}px)`;
     setTimeout(() => {
      document.querySelector(".informationScreen .container").classList.add("animate-me");
        }, 400); 
    }
  });