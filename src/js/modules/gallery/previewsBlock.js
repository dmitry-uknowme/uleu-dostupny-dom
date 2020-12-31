import setAll from './index';

export const onChangePreview = (
	previewSelectors,
	selectedImage,
	unselectedImages
) => {
	for (let m = 0; m < previewSelectors.length; m++) {
		previewSelectors[m].addEventListener('click', (e) => {
			setAll(e, selectedImage, unselectedImages);
		});
	}
};

export const setPreviewImage = (index) => {
	let prevIndex = listenedIndexes[listenedIndexes.length - 1] - 1;
	if (index != prevIndex) {
		previewImage.setAttribute(
			'src',
			`./img/projects/projects__preview${index}.png`
		);
	}
	return prevIndex;
};
