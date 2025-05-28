const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, Menu) => {
            if (link.style.animation){
                link.style.animation = '';
            } else{
                link.style.animation= `navLinkFade 0.5s ease forwards ${Menu/ 5 + 0.5}s`;
            }    
            });
            burger.classList.toggle('toggle');
            });
        }

navSlide();

function imgUrl(sl){
    document.getElementById("slider").src = sl;
}