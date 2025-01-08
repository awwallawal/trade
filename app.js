const menuBtn = document.querySelector("#hambuger");
const navLinks = document.querySelector('header nav ul');
const dropdowns = document.querySelectorAll('.dropdown');
// console.log(menuBtn);
menuBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    navLinks.classList.toggle('active');
});