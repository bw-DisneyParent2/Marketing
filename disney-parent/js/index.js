// Variables for selecting elements
let signUpBtn = document.querySelectorAll(".signUp");
let navLinks = document.querySelectorAll(".nav-container .nav-items a, .nav-container .signUp");
let navItems = document.querySelector("#navBar .nav-container .nav-items");
let menuIcon = document.createElement("div");

// Creating Burger Menu Icon for mobile view
menuIcon.innerHTML = "<div></div><div></div><div></div>";
menuIcon.className = "menuIcon";
menuIcon.style = "width: 8rem; height: 8rem; margin-top: 2rem; background: #1642BF40; cursor: pointer";
menuIcon.querySelectorAll("div").forEach(innerDiv => innerDiv.style = "width: 90%; height: 1.5rem; background: #1642BF; margin: .9rem auto; border-radius: 5px;");



/* Body Onload Function
 * As the body of the page loads, it will perform the following code
 */
document.querySelector("body").onload = function(){
    // Assign the href to all of the sign up button links on the page
    signUpBtn.forEach(button => button.setAttribute("href", "https://bw-disney-parent-ftro6xayi.now.sh/"));
    
   
    // Check the size of the window for mobile view to display the menu icon
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


/* Menu Icon OnClick function
 * If the menu icon is showing, will show the nav links when clicking on the icon and turn it into an 'x' to hide links when clicked again.
 */
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


