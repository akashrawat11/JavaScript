const navItems = document.querySelectorAll('li');
const toggle = document.querySelector('.toggle');
const close = document.querySelector('.close');

toggle.addEventListener('click', ()=>{
  change();
})

close.addEventListener('click', ()=>{
  change();
})

function change(){
  navItems.forEach(element => {
    element.classList.toggle('hide');
  });
  close.classList.toggle('hide');
  toggle.classList.toggle('hide');
}