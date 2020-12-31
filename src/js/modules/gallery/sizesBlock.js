import setAll from './index';

export const onChangeSize = (
	sizes,
	selectedImage,
	unselectedImages,
	listenedIndexes
) => {
	for (let m = 0; m < sizes.length; m++) {
		sizes[m].addEventListener('click', (e) => {
			setAll(e, selectedImage, unselectedImages, listenedIndexes);
		});
	}
};

export const setSizeItem = (index) => {
	let prevIndex = listenedIndexes[listenedIndexes.length - 2];
	if (index != prevIndex) {
		sizes[index].classList.add('projects__sizesItemActive');
		sizes[prevIndex].classList.remove('projects__sizesItemActive');
	}

	return prevIndex;
};
