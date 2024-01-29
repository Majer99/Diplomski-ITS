document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.hamburger');
    var nav = document.querySelector('nav ul');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll('.asortiman li a');
    var clickedLinkIndex = localStorage.getItem('clickedLinkIndex');

    links.forEach(function (link, index) {
        link.addEventListener('click', function (event) {
        
            removeClickedClass();

     
            link.classList.add('clicked');

            localStorage.setItem('clickedLinkIndex', index);
        });

        link.addEventListener('mouseover', function () {
          
            link.classList.add('hover');

            links.forEach(function (otherLink) {
                if (otherLink !== link) {
                    otherLink.classList.remove('clicked');
                }
            });
        });

        link.addEventListener('mouseout', function () {
         
            link.classList.remove('hover');
        });

        if (clickedLinkIndex && index.toString() === clickedLinkIndex) {
            link.classList.add('clicked');
        }
    });

    function removeClickedClass() {
        links.forEach(function (link) {
            link.classList.remove('clicked');
        });
    }
});






