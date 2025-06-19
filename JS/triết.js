var typed = new Typed('.text', {
    strings: ['Developer', 'Designer', 'Writer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});
var typed = new Typed('.hero_text', {
    strings: ['-- Developer --', '-- Designer --', '-- Writer --'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});


const skillsSwiper = new Swiper('.skills-carousel', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    }
});



// Initialize Swiper for Portfolio Carousel
const portfolioSwiper = new Swiper('.portfolio-carousel', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    }
});

// Progress Circle Animation
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    const percent = item.getAttribute('data-percent');
    const circle = item.querySelector('circle:nth-child(2)');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;

    const icon = item.getAttribute('data-icon');
    if (icon) {
        const img = document.createElement('img');
        img.src = icon;
        img.style.width = '40px';
        img.style.height = '40px';
        img.style.marginBottom = '10px';
        item.insertBefore(img, item.firstChild);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const hobbyCards = document.querySelectorAll('.hobby-card');
    const hobbyImage = document.getElementById('hobby-image');
    const hobbyImg = document.getElementById('hobby-img');
    const closeButton = document.getElementById('close-image');

    const hobbyImages = {
        'du-lich': '/anh/tour.jpg',
        'doc-sach': '/anh/dalat.jpg',
        'the-thao': '/anh/daidien.jpg'
    };

    hobbyCards.forEach(card => {
        card.addEventListener('click', () => {
            const hobbyType = card.getAttribute('data-hobby');
            const imageSrc = hobbyImages[hobbyType];

            if (hobbyImage.style.display === 'none' || hobbyImg.src !== window.location.origin + imageSrc) {
                hobbyImg.src = imageSrc;
                hobbyImage.style.display = 'block';
            } else {
                hobbyImage.style.display = 'none';
            }
        });
    });

    closeButton.addEventListener('click', () => {
        hobbyImage.style.display = 'none';
    });

    document.addEventListener('click', (event) => {
        if (!hobbyImage.contains(event.target) && !event.target.closest('.hobby-card')) {
            hobbyImage.style.display = 'none';
        }
    });
});