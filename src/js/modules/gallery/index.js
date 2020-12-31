import { setSelectedImage } from './imagesBlock';
import { setSizeItem } from './sizesBlock';
import { setPreviewImage } from './previewsBlock';

let index = 0;
let prevIndex = 0;
let listenedIndexes = [0];
localStorage.setItem('listenedIndexes', listenedIndexes);
let currentSrc = 0;
let prevSrc = 0;
let currentMaterial = 0;
let prevMaterial = 0;

const setAll = (e, selectedImage, unselectedImages, listenedIndexes) => {
	console.log(listenedIndexes);
	let index = e.target.getAttribute('data-id');
	let currentSrc = [selectedImage, ...unselectedImages][index].getAttribute(
		'src'
	);
	let prevSrc = selectedImage.getAttribute('src');
	updateStorage(index, listenedIndexes);
	setSelectedImage(
		index,
		currentSrc,
		prevSrc,
		currentMaterial,
		prevMaterial,
		listenedIndexes
	);
	setSizeItem(index);
	setPreviewImage(index);
	console.log(listenedIndexes);
	return prevSrc;
};

export const updateStorage = (index, listenedIndexes) => {
	console.log(listenedIndexes);
	if (listenedIndexes[listenedIndexes.length - 1] != index) {
		listenedIndexes.push(parseInt(index));
		localStorage.setItem('listenedIndexes', listenedIndexes);
	}
};

export default setAll;
