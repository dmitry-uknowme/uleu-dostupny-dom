//Swiper init

var swiper = new Swiper('.swiper-container', {
	loop: true,
	centeredSlides: true,
	slidesPerView: 1,
	spaceBetween: 50,
	// autoplay: {
	// 	delay: 5000,
	// },
	speed: 700,
	spaceBetween: 10,
});

let index = 0;
let prevIndex = 0;
let listenedIndexes = [0];
localStorage.setItem('listenedIndexes', listenedIndexes);
let currentSrc = 0;
let prevSrc = 0;
let currentMaterial = 0;
let prevMaterial = 0;

// selectedImage.setAttribute('src', unselectedImages[index].getAttribute('src'));
// sizes[index].classList.add('projects__sizesItemActive');
// previewImage.setAttribute(
// 	'src',
// 	`./img/projects/projects__preview${index}.png`
// );
// previewImage.setAttribute(
// 	'data-id',
// 	`./img/projects/projects__preview${index}.png`
// );

function onChangeImage(selectedImage, unselectedImages) {
	for (let m = 0; m < unselectedImages.length; m++) {
		unselectedImages[m].addEventListener('click', (e) => {
			setAll(e, selectedImage, unselectedImages);
		});
	}
}
function onChangeSize(sizes, selectedImage, unselectedImages) {
	for (let m = 0; m < sizes.length; m++) {
		sizes[m].addEventListener('click', (e) => {
			setAll(e, selectedImage, unselectedImages);
		});
	}
}

function onChangePreview(previewSelectors, selectedImage, unselectedImages) {
	for (let m = 0; m < previewSelectors.length; m++) {
		previewSelectors[m].addEventListener('click', (e) => {
			setAll(e, selectedImage, unselectedImages);
		});
	}
}

function updateStorage(index) {
	// console.log(sizes[index]);
	if (listenedIndexes[listenedIndexes.length - 1] != index) {
		listenedIndexes.push(parseInt(index));
		localStorage.setItem('listenedIndexes', listenedIndexes);
	}
}

function setSelectedImage(
	index,
	currentSrc,
	prevSrc,
	currentMaterial,
	prevMaterial
) {
	prevIndex = listenedIndexes[listenedIndexes.length - 1];
	console.log(currentSrc);
	console.log([selectedImage, ...unselectedImages][2]);
	if (window.innerWidth > 767) {
		[selectedImage, ...unselectedImages][prevIndex].setAttribute(
			'src',
			prevSrc
		);
		[selectedImage, ...unselectedImages][prevIndex].setAttribute(
			'data-material',
			prevMaterial
		);
	}
	selectedImage.setAttribute('src', currentSrc);
	selectedImage.setAttribute('data-material', currentMaterial);
	// console.log([selectedImage, ...unselectedImages][prevIndex]);
	// console.log('current', currentSrc);
	// console.log('prev', prevSrc);
	return prevIndex;
}

function setSizeItem(index) {
	prevIndex = listenedIndexes[listenedIndexes.length - 2];
	// console.log('index', index);
	// console.log('prev', prevIndex);
	if (index != prevIndex) {
		sizes[index].classList.add('projects__sizesItemActive');
		sizes[prevIndex].classList.remove('projects__sizesItemActive');
	}

	return prevIndex;
}

function setPreviewImage(index) {
	prevIndex = listenedIndexes[listenedIndexes.length - 1] - 1;
	if (index != prevIndex) {
		previewImage.setAttribute(
			'src',
			`./img/projects/projects__preview${index}.png`
		);
	}
	return prevIndex;
}

function setAll(e, selectedImage, unselectedImages) {
	// console.log('send', index);
	index = e.target.getAttribute('data-id');
	currentSrc = [selectedImage, ...unselectedImages][index].getAttribute('src');
	prevSrc = selectedImage.getAttribute('src');
	// console.log('preva', prevSrc);
	// console.log('curra', currentSrc);

	updateStorage(index);
	setSelectedImage(index, currentSrc, prevSrc);
	setSizeItem(index);
	setPreviewImage(index);
	console.log(listenedIndexes);
	return prevSrc;
}

function onSortGallery(imageSelectors, unselectedImages) {
	for (let k = 0; k < imageSelectors.children.length; k++) {
		prevSrc = selectedImage.getAttribute('src');
		imageSelectors.children[k].addEventListener('click', (e) =>
			sortGallery(e, prevSrc)
		);
	}
}

function sortGallery(e, prevSrc) {
	e.target.classList.add('gallery__selectorsActive');
	if (e.target.getAttribute('data-material') === 'rock') {
		woodSelector.classList.remove('gallery__selectorsActive');
		e.target.style.borderRadius = '20px 0 20px 0';
		woodSelector.style.width = '55%';
		rockSelector.style.width = '50%';
		woodSelector.style.borderRadius = 'none';
	}
	if (e.target.getAttribute('data-material') === 'wood') {
		rockSelector.classList.remove('gallery__selectorsActive');
		e.target.style.borderRadius = '0 20px 0 20px';
		woodSelector.style.width = '50%';
		rockSelector.style.width = '55%';
		rockSelector.style.borderRadius = 'none';
	}

	let a = index;
	while (a < [selectedImage, ...unselectedImages].length) {
		if (a >= 9) {
			console.log('a=0');
			a = 0;
		}
		if (
			[selectedImage, ...unselectedImages][a].getAttribute('data-material') !=
			e.target.getAttribute('data-material')
		) {
			console.log(a, 'ne podxodit');
			console.log([selectedImage, ...unselectedImages][a]);
			a++;
			// console.log(a);
		}

		if (
			[selectedImage, ...unselectedImages][a].getAttribute('data-material') ===
			e.target.getAttribute('data-material')
		) {
			console.log(a, 'podxodit');
			selectedImage.setAttribute(
				'src',
				[selectedImage, ...unselectedImages][a].getAttribute('src')
			);
			index = parseInt(a) + 1;
			updateStorage(index);

			// [selectedImage, ...unselectedImages][
			// 	listenedIndexes[listenedIndexes.length - 2]
			// ].setAttribute('src', prevSrc);
			// console.log(prevSrc);
			// console.log(
			// 	[selectedImage, ...unselectedImages][
			// 		listenedIndexes[listenedIndexes.length - 1]
			// 	]
			// );
			setSizeItem(index);
			setPreviewImage(index);
			return index;
		}
	}
}

function toggleFeaturesDesc(
	featuresItems,
	toggleFeaturesText,
	featuresHiddenText
) {
	for (let i = 0; i < toggleFeaturesText.length; i++) {
		toggleFeaturesText[i].addEventListener('click', (e) => {
			let ftIndex = e.target.getAttribute('data-id');
			console.log(e.target.innerHTML.trim());
			if (e.target.innerHTML.trim() != 'Назад') {
				featuresHiddenText[ftIndex].style.opacity = '1';
				featuresItems[ftIndex].style.height = 'auto';
				featuresItems[ftIndex].style.minWidth = '300px';
				e.target.innerText = 'Назад';
			} else {
				featuresHiddenText[ftIndex].style.opacity = '0';
				featuresItems[ftIndex].style.height = '230px';
				featuresItems[ftIndex].style.width = '270px';
				e.target.innerText = 'Подробнее';
			}
		});
	}
}

const toggleOutroText = () => {
	const toggleOutroText = document.querySelector('.outro__viewableTitle');
	const outroHiddenText = document.querySelector('.outro__readable');
	for (let i = 0; i < outroHiddenText.children.length; i++) {
		outroHiddenText.children[i].style.height = '0';
		outroHiddenText.children[i].style.opacity = '0';
	}

	toggleOutroText.addEventListener('click', (e) => {
		if (e.target.innerText === 'Прочитать') {
			for (let i = 0; i < outroHiddenText.children.length; i++) {
				outroHiddenText.children[i].style.height = 'auto';
				outroHiddenText.children[i].style.opacity = '1';
			}
			e.target.innerText = 'Посмотреть';
		} else {
			for (let i = 0; i < outroHiddenText.children.length; i++) {
				outroHiddenText.children[i].style.height = '0';
				outroHiddenText.children[i].style.opacity = '0';
			}
			e.target.innerText = 'Прочитать';
		}
	});
};

function setDesktopInteractiveElements() {
	selectedImage = document.querySelector('.gallery__selectedImageItem');
	unselectedImages = document.querySelectorAll(
		'.gallery .gallery__unselectedImagesItem'
	);
	imageSelectors = document.querySelector('.gallery .gallery__selectors');
	rockSelector = document.querySelector('.gallery .gallery__selectorsRock');
	woodSelector = document.querySelector('.gallery .gallery__selectorsWood');
	sizes = document.querySelectorAll('.projects .projects__sizesItem');

	featuresItems = document.querySelectorAll('.features .features__item');
	toggleFeaturesText = document.querySelectorAll(
		'.features .features__itemExpand'
	);
	featuresHiddenText = document.querySelectorAll(
		'.features .features__itemDesc'
	);
}

function setMobileInteractiveElements() {
	selectedImage = document.querySelector(
		'.mobileGallery .gallery__selectedImageItem'
	);
	unselectedImages = document.querySelectorAll(
		'.mobileGallery .gallery__unselectedImagesItem'
	);
	imageSelectors = document.querySelector('.mobileGallery .gallery__selectors');
	rockSelector = document.querySelector(
		'.mobileGallery .gallery__selectorsRock'
	);
	woodSelector = document.querySelector(
		'.mobileGallery .gallery__selectorsWood'
	);
	sizes = document.querySelectorAll('.mobileProjects .projects__sizesItem');

	featuresItems = document.querySelectorAll('.mobileFeatures .features__item');
	toggleFeaturesText = document.querySelectorAll(
		'.mobileFeatures .features__itemExpand'
	);
	featuresHiddenText = document.querySelectorAll(
		'.mobileFeatures .features__itemDesc'
	);
}

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

// function offset(el) {
// 	const rect = el.getBoundingClientRect(),
// 		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// 		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// 	return { top: rect.top + scrollTop, left: rect.left + screenLeft };
// }
