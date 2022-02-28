const close = document.querySelector('.close');
const ham = document.querySelector('.ham');
const navBar = document.querySelector('.nav-container');

close.addEventListener('click', ()=>{
  navBar.classList.toggle('hide');
})

ham.addEventListener('click', ()=>{
  navBar.classList.toggle('hide');
})