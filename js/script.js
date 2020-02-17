window.addEventListener('DOMContentLoaded', function () {
    let hamburger = document.querySelector(".hamburger");
    let top = document.querySelector(".top");
    let subheader = document.querySelector(".subheader_wrapper");
    let menu_item = document.querySelectorAll(".menu_item");
    hamburger.addEventListener('click', function(){
        hamburger.classList.toggle("hamburger_active");
        top.classList.toggle("top_active");
        if(top.classList.contains("top_active")){
        subheader.style.display = "none";
        }else{
            subheader.style.display = "block";  
        }
    });
    for(let i = 0; i<menu_item.length; i ++){
        menu_item[i].addEventListener('click', function(){
            hamburger.classList.toggle("hamburger_active");
            top.classList.toggle("top_active");
        });
    }
});