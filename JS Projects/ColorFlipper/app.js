const button = document.querySelector('#changeColor');

function changeColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    button.style.backgroundColor = `rgb(${b},${g},${r})`;
}
changeColor();

button.addEventListener('click', ()=>{
    changeColor();
});