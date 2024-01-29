document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.hamburger');
    var nav = document.querySelector('nav ul');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
});


