window.addEventListener("load", (event) => {
    pills = document.getElementsByClassName("nav-secteur")
    if (event["currentTarget"]["location"]["pathname"] != "/") {
        return; 
    }
    precedent = pills[0].children[0].children[1].children[1];

    for (let i = 0; i < pills.length; i++) {
        let text = pills[i].children[0].children[1].children[1];
        text.style.display = "none";
        if (pills[i].classList.contains("active")) {
            precedent = text;
            text.style.display = "block";
        }
        pills[i].addEventListener("click", changeFocusOnClick, false);
    }

    function changeFocusOnClick() {
        precedent.style.display = "none";
        this.children[0].children[1].children[1].style.display = "block";
        precedent = this.children[0].children[1].children[1];
    }
});