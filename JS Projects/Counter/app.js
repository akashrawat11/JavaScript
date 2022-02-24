const increaseBtn = document.querySelector('#increase');
const resetBtn = document.querySelector('#reset');
const decreaseBtn = document.querySelector('#decrease');
const counter = document.querySelector('.counter');

let number = 0;
increaseBtn.addEventListener('click',()=>{
    number += 1;
    if (!increaseBtn.classList.contains('active')){
        increaseBtn.classList.add('active');
    }
    if (resetBtn.classList.contains('active')){
        resetBtn.classList.remove('active')
    }
    if (decreaseBtn.classList.contains('active')){
        decreaseBtn.classList.remove('active');
    }
    formatNumber();
});
decreaseBtn.addEventListener('click',()=>{
    number -= 1;
    if (increaseBtn.classList.contains('active')){
        increaseBtn.classList.remove('active');
    }
    if (resetBtn.classList.contains('active')){
        resetBtn.classList.remove('active')
    }
    if (!decreaseBtn.classList.contains('active')){
        decreaseBtn.classList.add('active');
    }
    formatNumber();
});
resetBtn.addEventListener('click',()=>{
    number = 0;
    if (increaseBtn.classList.contains('active')){
        increaseBtn.classList.remove('active');
    }
    if (!resetBtn.classList.contains('active')){
        resetBtn.classList.add('active')
    }
    if (decreaseBtn.classList.contains('active')){
        decreaseBtn.classList.remove('active');
    }
    formatNumber();
});

function formatNumber(){
    counter.innerHTML = number;
    if (number > 0){
        if (!counter.classList.contains('positive')){
            counter.classList.add('positive');
        }
        if (counter.classList.contains('negative')){
            counter.classList.remove('negative');
        }
        if (counter.classList.contains('zero')){
            counter.classList.remove('zero');
        }
    }else if(number < 0){
        if (counter.classList.contains('positive')){
            counter.classList.remove('positive');
        }
        if (!counter.classList.contains('negative')){
            counter.classList.add('negative');
        }
        if (counter.classList.contains('zero')){
            counter.classList.remove('zero');
        }
    } else{
        if (counter.classList.contains('positive')){
            counter.classList.remove('positive');
        }
        if (counter.classList.contains('negative')){
            counter.classList.remove('negative');
        }
        if (!counter.classList.contains('zero')){
            counter.classList.add('zero');
        }
    }
}
