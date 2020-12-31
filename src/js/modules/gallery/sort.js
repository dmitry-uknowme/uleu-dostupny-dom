import './vars';
import { setSelectedImage } from './imagesBlock';
import { setSizeItem } from './sizesBlock';
import { setPreviewImage } from './previewsBlock';
import { updateStorage } from './index';

let index = 0;
let prevIndex = 0;
let listenedIndexes = [0];
localStorage.setItem('listenedIndexes', listenedIndexes);
let currentSrc = 0;
let prevSrc = 0;
let currentMaterial = 0;
let prevMaterial = 0;

const onSortGallery = (
	index,
	imageSelectors,
	rockSelector,
	woodSelector,
	selectedImage,
	unselectedImages
) => {
	for (let k = 0; k < imageSelectors.children.length; k++) {
		prevSrc = selectedImage.getAttribute('src');
		imageSelectors.children[k].addEventListener('click', (e) =>
			sortGallery(
				e,
				index,
				rockSelector,
				woodSelector,
				selectedImage,
				unselectedImages
			)
		);
	}
};

const sortGallery = (
	e,
	index,
	rockSelector,
	woodSelector,
	selectedImage,
	unselectedImages
) => {
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
			// console.log(a, 'ne podxodit');
			a++;
			// console.log(a);
		}

		if (
			[selectedImage, ...unselectedImages][a].getAttribute('data-material') ===
			e.target.getAttribute('data-material')
		) {
			// console.log(a, 'podxodit');
			selectedImage.setAttribute(
				'src',
				[selectedImage, ...unselectedImages][a].getAttribute('src')
			);
			index = parseInt(a) + 1;
			updateStorage(index, listenedIndexes);

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
};

export default onSortGallery;
