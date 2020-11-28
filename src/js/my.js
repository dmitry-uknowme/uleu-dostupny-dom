const buttons = document.querySelectorAll('button')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')
const overlay = document.querySelector('.modal__overlay')

const carousel = document.querySelector('.carousel')
const carouselPrev = document.querySelector('.carousel-control-prev')

console.log(overlay.style.opacity)
for (b of buttons) {
    b.addEventListener('click', (e) => {
        overlay.style.opacity = '1'
        overlay.style.maxHeight = 'none'
        modal.style.opacity = '1'
        modal.style.display = 'block'
        modalClose.addEventListener('click', (e) => {
            overlay.style.opacity = '0'
            overlay.style.maxHeight = '0'
            modal.style.opacity = '0'
            modal.style.display = 'none'
        })

    })
}


