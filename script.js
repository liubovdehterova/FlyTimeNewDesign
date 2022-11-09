let myForm = document.querySelector(".background");
let buttonFormClose = document.querySelector(".button__esc");
let buttonForm = document.querySelectorAll(".header__flx__button");

function hide(e){
    myForm.style.display = 'block';
}

for(let i = 0; i < buttonForm.length; i++){
    buttonForm[i].addEventListener('click', hide, );
}

buttonFormClose.addEventListener('click', function () {
    myForm.style.display = 'none';
})