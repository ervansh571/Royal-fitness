let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.navbar');
menu.onclick=() =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toogle('active');
}
window.onscroll=() =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const typed = new Typed('.multiple-text', {
    strings: ['Physcial Fitness', 'Strength Training','Weight Lifting','Fat Lose','Running','Weight Gain'],
    typeSpeed: 60,
    backspeed: 60,
    backdelay: 1000,
    loop: true,
  });