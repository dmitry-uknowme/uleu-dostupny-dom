module.exports = {
	desktop: {
		unselectedImages: document.querySelectorAll(
			'.gallery .gallery__unselectedImagesItem'
		),
		selectedImage: document.querySelector('.gallery__selectedImageItem'),

		sizes: document.querySelectorAll('.projects .projects__sizesItem'),

		previewSelectors: document.querySelectorAll(
			'.projects .projects__previewChoose'
		),
		previewImage: document.querySelector('.projects .projects__previewImg'),

		imageSelectors: document.querySelector('.gallery .gallery__selectors'),
		rockSelector: document.querySelector('.gallery .gallery__selectorsRock'),
		woodSelector: document.querySelector('.gallery .gallery__selectorsWood'),

		featuresItems: document.querySelectorAll('.features .features__item'),
		toggleFeaturesText: document.querySelectorAll(
			'.features .features__itemExpand'
		),
		featuresHiddenText: document.querySelectorAll(
			'.features .features__itemDesc'
		),
	},
	mobile: {
		selectedImage: document.querySelector(
			'.mobileGallery .gallery__selectedImageItem'
		),
		unselectedImages: document.querySelectorAll(
			'.mobileGallery .gallery__unselectedImagesItem'
		),
		imageSelectors: document.querySelector(
			'.mobileGallery .gallery__selectors'
		),
		rockSelector: document.querySelector(
			'.mobileGallery .gallery__selectorsRock'
		),
		woodSelector: document.querySelector(
			'.mobileGallery .gallery__selectorsWood'
		),
		sizes: document.querySelectorAll('.mobileProjects .projects__sizesItem'),

		featuresItems: document.querySelectorAll('.mobileFeatures .features__item'),
		toggleFeaturesText: document.querySelectorAll(
			'.mobileFeatures .features__itemExpand'
		),
		featuresHiddenText: document.querySelectorAll(
			'.mobileFeatures .features__itemDesc'
		),
	},
};
