const btn = document.querySelector(".btn--open");
const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".modal__close--btn");

btn.addEventListener("click", () => {
    modal.classList.add("modal--show");
});

btnClose.addEventListener("click", () => {
    modal.classList.remove("modal--show");
});
