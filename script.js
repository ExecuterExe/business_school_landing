document.addEventListener('DOMContentLoaded', function () {
    // Плавная прокрутка для навигационных ссылок
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Открытие и закрытие модального окна
    const modal = document.getElementById('modal');
    const ctaButtons = document.querySelectorAll('.cta-button');
    const closeButton = document.querySelector('.close');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function () {
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Обработка отправки формы
    const registrationForm = document.getElementById('registration-form');
    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Здесь можно добавить логику отправки формы на сервер
        const formData = new FormData(registrationForm);

        // Имитация отправки данных на сервер
        setTimeout(() => {
            alert('Спасибо за регистрацию! Мы свяжемся с вами в ближайшее время.');
            modal.style.display = 'none';
            registrationForm.reset();
        }, 1000);
    });

    // Анимация появления элементов при прокрутке
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScrollAnimation() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add('animated');
            }
        });
    }

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Вызываем функцию при загрузке страницы

    // Слайдер отзывов
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showNextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonialSlider.scrollTo({
            left: testimonials[currentTestimonial].offsetLeft,
            behavior: 'smooth'
        });
    }

    setInterval(showNextTestimonial, 5000); // Переключение отзывов каждые 5 секунд

    // Аккордеон для FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Анимация счетчика для статистики
    function animateCounter(el, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            el.textContent = Math.round(current);
            if (current >= target) {
                clearInterval(timer);
                el.textContent = target;
            }
        }, 20);
    }

    const counterElements = document.querySelectorAll('.counter');
    counterElements.forEach(el => {
        const target = parseInt(el.getAttribute('data-target'));
        animateCounter(el, target);
    });

    // Sticky header
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;

    function handleStickyHeader() {
        if (window.pageYOffset > headerHeight) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', handleStickyHeader);

    // Мобильное меню
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNavLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        mobileNavLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});