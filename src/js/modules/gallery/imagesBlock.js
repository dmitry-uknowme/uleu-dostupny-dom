import setAll from './index';

export const onChangeImage = (
	selectedImage,
	unselectedImages,
	listenedIndexes
) => {
	for (let m = 0; m < unselectedImages.length; m++) {
		unselectedImages[m].addEventListener('click', (e) => {
			setAll(e, selectedImage, unselectedImages, listenedIndexes);
		});
	}
};

export const setSelectedImage = (
	currentSrc,
	prevSrc,
	currentMaterial,
	prevMaterial
) => {
	let prevIndex = listenedIndexes[listenedIndexes.length - 1];

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
	return prevIndex;
};
