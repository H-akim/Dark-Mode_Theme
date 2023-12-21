var btn = document.getElementById("btn");
var btn_text = document.getElementById("btn_text");
var btn_icon = document.getElementById("btn_icon");
var logo = document.getElementById("logo")

btn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark_theme");
    if(document.body.classList.contains("dark_theme")){
        btn_icon.src = 'images/sun.png';
        btn_text.innerHTML = "light";
        logo.src = "images/logo-white.png";
    }else{
        btn_icon.src = 'images/moon.png';
        btn_text.innerHTML = "moon";
        logo.src = "images/logo.png";
    }
})