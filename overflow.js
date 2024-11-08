let burgerOpener = document.querySelector('.menu__sidemenu-button');
let overflowHidden = document.getElementsByTagName('body');
burgerOpener.addEventListener('click', function (evt) {
    evt.preventDefault();
    overflowHidden.classList.toggle('hidden');
});
let exitButton = document.querySelector('.exitbutton');
exitButton.addEventListener('click', function(ada) {
    ada.preventDefault();
    overflowHidden.classList.toggle('hidden');
});
