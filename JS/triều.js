document.addEventListener('DOMContentLoaded', () => {
    // Khởi tạo AOS
    AOS.init({
        once: true, // Hiệu ứng chỉ chạy 1 lần khi cuộn tới
        offset: 100, // Kích hoạt hiệu ứng sớm hơn một chút (px)
        duration: 800, // Thời gian animation mặc định (ms)
        easing: 'ease-in-out-cubic', // Kiểu easing mượt mà hơn
    });

    // Hiệu ứng gõ chữ cho tiêu đề công việc
    const jobTitleText = "Sinh Viên Năm 2 - Ngành CNTT";
    const jobTitleElement = document.querySelector('.job-title.animated-text');
    let charIndex = 0;

    function typeJobTitle() {
        if (jobTitleElement && charIndex < jobTitleText.length) {
            jobTitleElement.textContent += jobTitleText.charAt(charIndex);
            charIndex++;
            setTimeout(typeJobTitle, 80); // Tốc độ gõ chữ
        }
    }

    if (jobTitleElement) {
        jobTitleElement.textContent = '';
        setTimeout(typeJobTitle, 1600); // Chờ AOS hoàn thành
    }

    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    const heroSection = document.getElementById('hero');
    if (navbar && heroSection) {
        const heroSectionHeight = heroSection.offsetHeight;
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > heroSectionHeight * 0.8) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        });
    }

    // Copyright Year
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});