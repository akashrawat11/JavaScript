const appear = document.querySelector('a');
const closed = document.querySelector('button');
const modal = document.querySelector('.modal');

appear.addEventListener('click',()=>{
  modal.classList.remove('hide');
  console.log('appear');
})

closed.addEventListener('click',()=>{
  modal.classList.add('hide');
  console.log('close');
})