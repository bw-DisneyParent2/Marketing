let signUpBtn = document.querySelectorAll(".signUp");


document.querySelector("body").onload = function(){
    signUpBtn.forEach(button => button.setAttribute("href", "#"));
}

