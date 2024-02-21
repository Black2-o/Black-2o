/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll(".services_modal"),
    modalBtns = document.querySelectorAll(".services_button"),
    modalClose = document.querySelectorAll(".services_modal_close");

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active_modal');
}
modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})
modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove("active_modal")
        })
    })
})