// scroll sections active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');  //hope this works ; )
            });
        };
    });
};

// scroll reveal

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' })
ScrollReveal().reveal('.home-img, .services-container, .works-box, .contact form', { origin: 'bottom' })
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' })
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' })

//typed js

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','Backend Developer','javascript Developer','Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const moreContent = document.querySelector('.skills-content');

    moreContent.style.display = 'none'; // Hide the extra content initially

    readMoreBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor link behavior

        if (moreContent.style.display === 'none') {
            moreContent.style.display = 'inline';
            readMoreBtn.textContent = 'Read Less';
        } else {
            moreContent.style.display = 'none';
            readMoreBtn.textContent = 'Read More';
        }
    });
});


