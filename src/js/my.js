const unselectedImages = document.querySelectorAll(
	'.gallery__unselectedImagesItem'
);
const selectedImage = document.querySelector('.gallery__selectedImageItem');
const imageSelectors = document.querySelector('.gallery__selectors');
const rockSelector = document.querySelector('.gallery__selectorsRock');
const woodSelector = document.querySelector('.gallery__selectorsWood');
const sizes = document.querySelectorAll('.projects__sizesItem');
const previewSelectors = document.querySelectorAll('.projects__previewChoose');
const previewImage = document.querySelector('.projects__previewImg');

let index = 0;
let listenedIndexes = [0];
localStorage.setItem('listenedIndexes', listenedIndexes);

// selectedImage.setAttribute('src', unselectedImages[index].getAttribute('src'));
sizes[index].classList.toggle('projects__sizesItemActive');
previewImage.setAttribute(
	'src',
	`./img/projects/projects__preview${index}.png`
);
previewImage.setAttribute(
	'data-id',
	`./img/projects/projects__preview${index}.png`
);

for (let i = 0; i < unselectedImages.length; i++) {
	unselectedImages[i].addEventListener('click', (e) => {
		console.log(localStorage.getItem('listenedIndexes')[0]);
		index = e.target.getAttribute('data-id');

		// e.target.setAttribute('src', oldSrc);
		selectedImage.setAttribute('src', e.target.getAttribute('src'));

		sizes[index].classList.add('projects__sizesItemActive');

		previewImage.setAttribute(
			'src',
			`./img/projects/projects__preview${index}.png`
		);

		// selectedImage.setAttribute(
		// 	'data-material',
		// 	e.target.getAttribute('data-material')
		// );
		updateStorage(index);
	});
}

for (let i = 0; i < sizes.length; i++) {
	sizes[i].addEventListener('click', (e) => {
		index = e.target.getAttribute('data-id');
		e.target.classList.add('projects__sizesItemActive');
		selectedImage.setAttribute(
			'src',
			unselectedImages[index].getAttribute('src')
		);
		previewImage.setAttribute(
			'src',
			`./img/projects/projects__preview${index}.png`
		);
		updateStorage(index);
		console.log(unselectedImages[index].getAttribute('src'));

		// index = unselectedImages[index].getAttribute('data-id');
		// selectedImage.setAttribute('src', unselectedImages[index]);
	});
}

for (let n = 0; n < previewSelectors.length; n++) {
	previewSelectors[n].addEventListener('click', (e) => {
		index = e.target.getAttribute('data-id');
		selectedImage.setAttribute(
			'src',
			unselectedImages[index].getAttribute('src')
		);
		selectedImage.setAttribute('data-id', index);

		previewImage.setAttribute(
			'src',
			`./img/projects/projects__preview${index}.png`
		);
		updateStorage(index);
	});
}

let a = 0;
rockSelector.classList.add('gallery__selectorsActive');
for (let k = 0; k < imageSelectors.children.length; k++) {
	imageSelectors.children[k].addEventListener('click', (e) => {
		e.target.classList.add('gallery__selectorsActive');
		if (e.target.getAttribute('data-material') === 'rock') {
			console.log('sorted by rock');
			woodSelector.classList.remove('gallery__selectorsActive');
			e.target.style.borderRadius = '20px 0 20px 0';
			woodSelector.style.width = '55%';
			rockSelector.style.width = '50%';
			woodSelector.style.borderRadius = 'none';
		}
		if (e.target.getAttribute('data-material') === 'wood') {
			console.log('sorted by wood');
			rockSelector.classList.remove('gallery__selectorsActive');
			e.target.style.borderRadius = '0 20px 0 20px';
			woodSelector.style.width = '50%';
			rockSelector.style.width = '55%';
			rockSelector.style.borderRadius = 'none';
		}

		let a = index;
		while (a < unselectedImages.length) {
			if (
				unselectedImages[a].getAttribute('data=material') !=
				e.target.getAttribute('data-material')
			) {
				if (a >= unselectedImages.length) {
					a = 0;
				} else {
					a++;
				}
			}

			if (
				unselectedImages[a].getAttribute('data-material') ===
				e.target.getAttribute('data-material')
			) {
				console.log(unselectedImages[a]);
				selectedImage.setAttribute(
					'src',
					unselectedImages[a].getAttribute('src')
				);
				updateStorage(index);
				index++;
				return index;
			}
		}
	});
}

const updateStorage = (index) => {
	listenedIndexes.push(index);
	localStorage.setItem('listenedIndexes', listenedIndexes);
};

var swiper = new Swiper('.swiper-container', {
	loop: true,
	centeredSlides: true,
	slidesPerView: 1,
	spaceBetween: 20,
	// autoplay: {
	// 	delay: 5000,
	// },
	speed: 700,
	spaceBetween: 10,
});

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

const toggleOutroText = document.querySelector('.outro__viewableTitle');
const outroHiddenText = document.querySelector('.outro__readable');
outroHiddenText.style.opacity = '0';
outroHiddenText.style.display = 'none';
outroHiddenText.style.height = '0';

toggleOutroText.addEventListener('click', (e) => {
	if (e.target.innerText === 'Прочитать') {
		outroHiddenText.style.opacity = '1';
		outroHiddenText.style.display = 'block';
		outroHiddenText.style.height = 'auto';
		e.target.innerText = 'Посмотреть';
	} else {
		outroHiddenText.style.opacity = '0';
		outroHiddenText.style.display = 'none';
		outroHiddenText.style.height = '0';
		e.target.innerText = 'Прочитать';
	}
});

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

// const chooseHouseImg = document.querySelectorAll('.projects__previewChoose')
// const selectedImg = document.querySelector('.projects__previewImg')
// const selectedImgGallery = document.querySelector('.gallery__selectedImageItem')
// const galleryImages = document.querySelectorAll('.gallery__img')
// const gallerySelectors = document.querySelector('.gallery__selectors')
// const gallerySelectorRock = document.querySelector('.gallery__selectorsRock')
// const gallerySelectorWood = document.querySelector('.gallery__selectorsWood')
// const unselectedImages = document.querySelectorAll('.gallery__unselectedImagesItem')

// for (let i=0; i < chooseHouseImg.length; i++) {
//     chooseHouseImg[i].addEventListener('click', (e) => {
//         selectedImg.setAttribute('src', `./img/projects/projects__preview${i}.png`)
//         selectedImgGallery.setAttribute('src', `./img/gallery/gallery__img${i}.png`)
//     })
// }
// for (let i=0; i < galleryImages.length; i++) {
//     console.log(galleryImages[i].getAttribute('data-material'))

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

// let currentGalleryIndex = 0

// gallerySelectorRock.addEventListener('click', (e) => {
//     e.target.style.background = '#4aca5a'
//     for (currentGalleryIndex; currentGalleryIndex < galleryImages.length; currentGalleryIndex++) {
//         if ('rock'==galleryImages[currentGalleryIndex].getAttribute('data-material')) {
//             console.log('selector '+gallerySelectorRock.getAttribute('data-material'))
//             console.log('img '+galleryImages[currentGalleryIndex].getAttribute('data-material'))
//             // console.log(gallerySelectors.children[i].getAttribute('data-material'))
//             selectedImgGallery.setAttribute('src', `./img/gallery/gallery__img${currentGalleryIndex}.png`)
//             if (currentGalleryIndex==galleryImages.length) {
//                 currentGalleryIndex = 0
//             }
//             currentGalleryIndex++
//             break
//         }
//     }
// })
// gallerySelectorWood.addEventListener('click', (e) => {
//     gallerySelectorWood.style.background = '#4aca5a'
// })

// for (img of unselectedImages) {
//     img.addEventListener('click', (e) => {
//         let unselectedAttr = e.target.getAttribute('src')
//         let selectedAttr = selectedImgGallery.getAttribute('src')
//         selectedImgGallery.setAttribute('src', unselectedAttr)
//         e.target.setAttribute('src', selectedAttr)
//     })
// }
