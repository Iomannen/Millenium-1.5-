let consultationButton = document.querySelector('.call-button');
let consultationElement = document.querySelector('.consultation-window');

consultationButton.addEventListener('click', function() {
    consultationElement.classList.toggle('consultation-hidden');
    consultationElement.classList.toggle('consultation-window');
    overflowHidden.classList.toggle('hidden');
});

let consultationExit = document.querySelector('.consultation-exitbutton');
consultationExit.addEventListener('click', function() {
    consultationElement.classList.toggle('consultation-hidden');
    consultationElement.classList.toggle('consultation-window');
    overflowHidden.classList.toggle('hidden');


});
