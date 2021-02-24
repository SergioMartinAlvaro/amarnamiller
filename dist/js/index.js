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

})