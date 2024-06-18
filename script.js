const btnPopUp = document.getElementById('btnPopUp');
const btnClose = document.querySelector('.close');
const overlay = document.querySelector('.overlay');

btnPopUp.addEventListener('click', ()=>{
    overlay.classList.add('show');
});

btnClose.addEventListener('click', ()=>{
    overlay.classList.remove('show');
});

