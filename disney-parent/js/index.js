let signUpBtn = document.querySelectorAll(".signUp");
let navLinks = document.querySelectorAll(".nav-container .nav-items a, .nav-container .signUp");
let navItems = document.querySelector(".nav-items");

let menuIcon = document.createElement("div");
menuIcon.innerHTML = "<div></div><div></div><div></div>";
menuIcon.className = "menuIcon";
menuIcon.style = "width: 8rem; height: 8rem; margin-top: 2rem; background: #1642BF40; cursor: pointer";
menuIcon.querySelectorAll("div").forEach(innerDiv => innerDiv.style = "width: 90%; height: 1.5rem; background: #1642BF; margin: .9rem auto; border-radius: 5px;");


document.querySelector("body").onload = function(){
    signUpBtn.forEach(button => button.setAttribute("href", "#"));
    
    if(window.innerWidth < 500) {
        navItems.prepend(menuIcon);
    }

    this.onresize = function() {
        if(window.innerWidth < 500) {
            navItems.prepend(menuIcon);
            menuIcon.style.display = "block";
            
            if( menuIcon.style.width === "8rem") {
                navLinks.forEach(link => link.style = "display: none;");
            } else {
                navLinks.forEach(link => link.style = "display: block;")
            }
            
            document.querySelector(".logo-link").style = "display: block;";
        } else {
            menuIcon.style.display = "none";
            navLinks.forEach(link => link.style = "display: block;");

        }
    }
    
}



menuIcon.onclick = function() {
    let hidden = document.querySelector(".nav-items a:last-child").getAttribute("style") === null || document.querySelector(".nav-items a:last-child").getAttribute("style") === "display: none;";

    if (hidden) {
        navLinks.forEach(link => link.style = "display: block;");
        menuIcon.lastChild.setAttribute("style", "display:none;");
        menuIcon.firstChild.setAttribute("style", "position: relative; width: 90%; height: .5rem; background: #1642BF; margin: -1rem auto; border-radius: 5px; transform: rotate(45deg); top: 2.3rem;");
        menuIcon.children[1].setAttribute("style", "position: relative; width: 90%; height: .5rem; background: #1642BF; margin: 2.8rem auto; border-radius: 5px; transform: rotate(-44deg);");
        menuIcon.style = "position: absolute; width: 3rem; height: 3rem; top: .8rem; right: 9rem; background: #1642BF40; cursor: pointer";
        
    } else {
        navLinks.forEach(link => link.style = "display: none;");
        document.querySelector(".logo-link").style = "display: block;";
        menuIcon.querySelectorAll("div").forEach(innerDiv => innerDiv.style = "width: 90%; height: 1.5rem; background: #1642BF; margin: .9rem auto; border-radius: 5px;");
        menuIcon.style = "width: 8rem; height: 8rem; margin-top: 2rem; background: #1642BF40; cursor: pointer";
    }
}


