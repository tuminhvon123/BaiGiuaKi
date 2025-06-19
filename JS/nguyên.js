document.addEventListener('DOMContentLoaded', () => {
    // Xử lý điều hướng
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');

    function showSection(sectionId) {
        navItems.forEach(item => item.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
        document.getElementById(sectionId).classList.add('active');

        // Đóng menu di động nếu đang mở
        sidebar.classList.remove('active');
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            showSection(item.dataset.section);
        });
    });

    // Chuyển đổi menu hamburger
    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Hiệu ứng gõ chữ cho tiêu đề
    const typingElement = document.querySelector('.typing');
    const titles = ['Lập trình viên Full-stack', 'Người đam mê Công nghệ', 'Nhà sáng tạo'];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentTitle = titles[titleIndex];
        typingElement.textContent = currentTitle.substring(0, charIndex);

        if (!isDeleting && charIndex < currentTitle.length) {
            charIndex++;
            setTimeout(type, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, 50);
        } else if (charIndex === currentTitle.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            setTimeout(type, 500);
        }
    }

    type();

    // Carousel sở thích
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;
    const items = document.querySelectorAll('.hobby-item');
    const itemCount = items.length;

    function updateCarousel() {
        const offset = -currentIndex * (100 / 4);
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % itemCount;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + itemCount) % itemCount;
        updateCarousel();
    });

    // Hiệu ứng cuộn cho các section
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                animateSectionElements(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    function animateSectionElements(section) {
        const animatableElements = section.querySelectorAll('.skill-item, .hobby-item, .project-card, .contact-item');
        animatableElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            setTimeout(() => {
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }

    // Tạo sao động
    const starsBackground = document.querySelector('.stars-background');
    function createStars(count) {
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.width = `${Math.random() * 3 + 1}px`;
            star.style.height = star.style.width;
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 3}s`;
            starsBackground.appendChild(star);
        }
    }

    createStars(50);

    // Cuộn mượt cho liên kết neo
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });
});