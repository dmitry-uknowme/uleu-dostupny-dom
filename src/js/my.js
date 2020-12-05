// $(document).ready( () => {
//     if (mediaQuery.matches) {
//         console.log('Media Query Matched!')
//         $(".owl-carousel").owlCarousel({
//                     margin:10,
//                     loop:true,
//                     autoWidth:true,
//                     items:1,
//                     nav: true
//                 });
//     }
// })
  
//   $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({
//         margin:10,
//         loop:true,
//         autoWidth:true,
//         items:1,
//         nav: true
//     });
//   });
// const buttons = document.querySelectorAll('button')
// const modal = document.querySelector('.modal')
// const modalClose = document.querySelector('.modal__close')
// const overlay = document.querySelector('.modal__overlay')

// const carousel = document.querySelector('.carousel')
// const carouselPrev = document.querySelector('.carousel-control-prev')

// for (b of buttons) {
//     b.addEventListener('click', (e) => {
//         overlay.style.opacity = '1'
//         overlay.style.maxHeight = 'none'
//         modal.style.opacity = '1'
//         modal.style.display = 'block'
//         modalClose.addEventListener('click', (e) => {
//             overlay.style.opacity = '0'
//             overlay.style.maxHeight = '0'
//             modal.style.opacity = '0'
//             modal.style.display = 'none'
//         })

//     })
// }



const outroHiddenText = document.querySelector('.outro__readable')
outroHiddenText.style.opacity = '0'

// const animatedItems = document.querySelectorAll('.anim')
// console.log(animatedItems)

// if (animatedItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll)
//     function animOnScroll() {
//         for (let i=0; i < animatedItems.length; i++) {
//             const animatedItem = animatedItems[i]
//             const animatedItemHeight = animatedItem.offsetHeight
//             const animatedItemOffset = offset(animatedItem).top
//             const animStart = 1

//             let animatedItemPoint = window.innerHeight - animatedItemHeight / animStart
//             if (animatedItemHeight > window.innerHeight) {
//                 animatedItemPoint = window.innerHeight - window.innerHeight / animStart
//             }

//             if ((pageYOffset > animatedItemOffset - animatedItemPoint) && pageYOffset < (animatedItemOffset + animatedItemHeight)) {
//                 animatedItem.classList.add('animated')
//             }

//             else {
//                 if (!animatedItem.contains('.anim-no-repeat')) {
//                     animatedItem.classList.remove('animated')
//                 }
//             }
//         }
//     }
// }

// function offset (el) {
//     const rect = el.getBoundingClientRect(),
//         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//         scrollTop = window.pageYOffset || document.documentElement.scrollTop
//     return { top: rect.top + scrollTop, left: rect.left + screenLeft }
// }

const chooseHouseImg = document.querySelectorAll('.projects__previewChoose')
const selectedImg = document.querySelector('.projects__previewImg')
const selectedImgGallery = document.querySelector('.gallery__selectedImageItem')
const galleryImages = document.querySelectorAll('.gallery__img')
const gallerySelectors = document.querySelector('.gallery__selectors')
const gallerySelectorRock = document.querySelector('.gallery__selectorsRock')
const gallerySelectorWood = document.querySelector('.gallery__selectorsWood')
const unselectedImages = document.querySelectorAll('.gallery__unselectedImagesItem')


for (let i=0; i < chooseHouseImg.length; i++) {
    chooseHouseImg[i].addEventListener('click', (e) => {
        selectedImg.setAttribute('src', `./img/projects/projects__preview${i}.png`)
        selectedImgGallery.setAttribute('src', `./img/gallery/gallery__img${i}.png`)
    })
}
for (let i=0; i < galleryImages.length; i++) {
    console.log(galleryImages[i].getAttribute('data-material'))
}

// console.log(gallerySelectors.children)

    // gallerySelectors.children[i].addEventListener('click', (e) => {
    //     // console.log(e.target.getAttribute('data-material'))
    //     console.log(e.target)
        // console.log(galleryImages[currentGalleryIndex].getAttribute('data-material'))
        // for (currentGalleryIndex; currentGalleryIndex < galleryImages.length; currentGalleryIndex++) {
        //     // console.log(currentGalleryIndex)
        //     console.log(e.target)
        //     if (e.target.getAttribute('data-material')==galleryImages[currentGalleryIndex].getAttribute('data-material')) {
        //         selectedImgGallery.setAttribute('src', `./img/gallery/gallery__img${currentGalleryIndex}.png`)
        //         // currentGalleryIndex++
        //     }

        // }
        // for (let n=0; i < galleryImages.length; n++) {
        //     console.log(e.target.getAttribute('data-material'))
        //     console.log(galleryImages[i].getAttribute('data-material'))
        //     if (gallerySelectors.children[i].getAttribute('data-material')==galleryImages[i].getAttribute('data-material')) {
        //         console.log(gallerySelectors.children[i].getAttribute('data-material'))
        //         selectedImgGallery.setAttribute('src', `./img/gallery/gallery__img${i}.png`)
        //         continue
        //     }
        //     else {
        //         console.log('xz')
        //     }
        //     console.log(galleryImages[i].getAttribute('data-material'))

let currentGalleryIndex = 0

gallerySelectorRock.addEventListener('click', (e) => {
    e.target.style.background = '#4aca5a'
    for (currentGalleryIndex; currentGalleryIndex < galleryImages.length; currentGalleryIndex++) {
        if ('rock'==galleryImages[currentGalleryIndex].getAttribute('data-material')) {
            console.log('selector '+gallerySelectorRock.getAttribute('data-material'))
            console.log('img '+galleryImages[currentGalleryIndex].getAttribute('data-material'))
            // console.log(gallerySelectors.children[i].getAttribute('data-material'))
            selectedImgGallery.setAttribute('src', `./img/gallery/gallery__img${currentGalleryIndex}.png`)
            if (currentGalleryIndex==galleryImages.length) {
                currentGalleryIndex = 0
            }
            currentGalleryIndex++
            break
        }
    }
})
// gallerySelectorWood.addEventListener('click', (e) => {
//     gallerySelectorWood.style.background = '#4aca5a'
// })


for (img of unselectedImages) {
    img.addEventListener('click', (e) => {
        let unselectedAttr = e.target.getAttribute('src')
        let selectedAttr = selectedImgGallery.getAttribute('src')
        selectedImgGallery.setAttribute('src', unselectedAttr)
        e.target.setAttribute('src', selectedAttr)
    })
}

