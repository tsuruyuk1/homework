
const swiper = new Swiper(".phones__slider", {
    spaceBetween: 15,
    slidesPerView: 1,
    


    navigation: {
        nextEl: ".phones__slider .swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
});

const input = document.querySelector('.search__input');
const tags = document.querySelectorAll('.search__tag');

tags.forEach(tag => {
    tag.addEventListener('click', () => {
        input.value = tag.textContent; // вставляем текст кнопки в input
        input.focus(); // ставим фокус в поле (по желанию)
    });
});

const openBtn = document.getElementById("openSearch");
const closeBtn = document.getElementById("closeSearch");
const modal = document.getElementById("searchModal");

openBtn.addEventListener("click", () => {
    modal.classList.add("active");
    modal.querySelector(".search-input").focus();
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("search-modal__overlay")) {
        modal.classList.remove("active");
    }
});

const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

// dropdown для всех меню (desktop + mobile)
const allToggles = document.querySelectorAll(".solutions-toggle");

allToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const dropdownMenu = toggle.nextElementSibling;
        const parentDropdown = toggle.parentElement;

        // переключаем класс active
        dropdownMenu.classList.toggle("active");
        parentDropdown.classList.toggle("active");
        toggle.querySelector(".arrow").classList.toggle("rotated");
    });
});

// закрытие при клике вне меню (desktop)
document.addEventListener("click", (e) => {
    allToggles.forEach((toggle) => {
        const parentDropdown = toggle.parentElement;
        if (!parentDropdown.contains(e.target)) {
            parentDropdown.classList.remove("active");
            const menu = toggle.nextElementSibling;
            if (menu) menu.classList.remove("active");
            const arrow = toggle.querySelector(".arrow");
            if (arrow) arrow.classList.remove("rotated");
        }
    });
});
