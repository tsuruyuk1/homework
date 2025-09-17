(function () {
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        const burgerIcon = e.target.closest(".burger-icon")
        const burgerNavLink = e.target.closest(".nav__link")

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        }
        else {
            document.body.classList.remove('body--opened-menu')
        }
    }

})()

// MODAL

document.querySelector('.about__img-button').addEventListener('click', function (event) {
    event.preventDefault();
    document.body.classList.add('body--opened-modal');
});

document.querySelector('.modal__cancel').addEventListener('click', function (event) {
    event.preventDefault();
    document.body.classList.remove('body--opened-modal');
});

document.querySelector('.modal').addEventListener('click', function (event) {
    if (event.target == this) {
        event.preventDefault();
        document.body.classList.remove('body--opened-modal');
    }
});

// MODAL

// TAB

const tabControls = document.querySelector('.tab-controls')

tabControls.addEventListener('click', toggleTab)

function toggleTab(e) {
    const tabControl = e.target.closest('.tab-controls__link')

    if (!tabControl) return

    e.preventDefault()

    if (tabControl.classList.contains('tab-controls__link--active')) return


    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.tab-controls__link--active')
    const activeContent = document.querySelector('.tab-content--show')

    activeContent.classList.remove('tab-content--show')
    tabContent.classList.add('tab-content--show')

    activeControl.classList.remove('tab-controls__link--active')
    tabControl.classList.add('tab-controls__link--active')
}

// TAB

// ACCORDION

const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {
    el.addEventListener('click', (e) => {
        const accordionList = e.currentTarget;

        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return;

        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;


        accordionList.querySelectorAll('.accordion-list__item').forEach(item => {
            const content = item.querySelector('.accordion-list__content');
            if (item !== accordionItem) {
                item.classList.remove('accordion-list__item--opened');
                if (content) content.style.maxHeight = null;
            }
        });


        accordionItem.classList.toggle('accordion-list__item--opened');
        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }
    });
});

// ACCORDION

// SLIDER-GALLERY

const gallerySwiper = new Swiper('.gallery__slider', {

    spaceBetween: 15,
    slidesPerView: 1.5,

    pagination: {
        el: '.gallery__pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
    },

    breakpoints: {

        601: {
            slidesPerView: 3,
        },

        801: {
            spaceBetween: 32,

        },

        1101: {
            slidesPerView: 4,
        }
    }

});

// SLIDER-GALLERY

// SLIDER-REWIEWS

const reviewsSwiper = new Swiper('.reviews__slider', {
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,



    navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    breakpoints: {

        901: {
            slidesPerView: 1.5,
        },

        1201: {
            slidesPerView: 2.1,
        }
    }

});

// SLIDER-REWIEWS
