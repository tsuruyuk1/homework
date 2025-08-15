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