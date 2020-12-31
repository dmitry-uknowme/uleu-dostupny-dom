import vars from './vars';
import '../gallery/vars';
import { onChangeImage } from '../gallery/imagesBlock';
import { onChangeSize } from '../gallery/sizesBlock';
import { onChangePreview } from '../gallery/previewsBlock';
import toggleFeaturesDesc from '../toggleText/toggleFeaturesText';
import { updateStorage } from '../gallery';
import onSortGallery from '../gallery/sort';

let index = 0;
let prevIndex = 0;
let listenedIndexes = [0];
localStorage.setItem('listenedIndexes', listenedIndexes);
let currentSrc = 0;
let prevSrc = 0;
let currentMaterial = 0;
let prevMaterial = 0;

let selectedImage = vars.desktop.selectedImage;
let unselectedImages = vars.desktop.unselectedImages;

let sizes = vars.desktop.sizes;
let previewSelectors = vars.desktop.previewSelectors;

let imageSelectors = vars.desktop.imageSelectors;
let rockSelector = vars.desktop.rockSelector;
let woodSelector = vars.desktop.woodSelector;

let featuresItems = vars.desktop.featuresItems;
let toggleFeaturesText = vars.desktop.toggleFeaturesText;
let featuresHiddenText = vars.desktop.featuresHiddenText;

const listenWidth = () => {
	if (window.innerWidth > 767) {
		console.log('its desktop');
		setDesktopInteractiveElements();
	} else {
		console.log('its mobile');
		setMobileInteractiveElements();
	}

	onChangeImage(index, selectedImage, unselectedImages);
	onChangeSize(sizes, selectedImage, unselectedImages);
	onChangePreview(previewSelectors, selectedImage, unselectedImages);
	rockSelector.classList.add('gallery__selectorsActive');
	onSortGallery(
		index,
		imageSelectors,
		rockSelector,
		woodSelector,
		selectedImage,
		unselectedImages
	);
	toggleFeaturesDesc(featuresItems, toggleFeaturesText, featuresHiddenText);
	const windowWidthChange = (mq) => {
		if (mq.matches) {
			console.log('удаляем десктоп');
			setMobileInteractiveElements();
		} else {
			console.log('удаляем мобилку');
			console.log(setDesktopInteractiveElements());
		}
	};
	const $small = '(max-width: 767px)';
	const mq = window.matchMedia($small);
	mq.addListener(windowWidthChange);
};

const setDesktopInteractiveElements = () => {
	selectedImage = vars.desktop.selectedImage;
	unselectedImages = vars.desktop.unselectedImages;
	imageSelectors = vars.desktop.imageSelectors;
	rockSelector = vars.desktop.rockSelector;
	woodSelector = vars.desktop.woodSelector;
	sizes = vars.desktop.sizes;
	featuresItems = vars.desktop.featuresItems;
	toggleFeaturesText = vars.desktop.toggleFeaturesText;
	featuresHiddenText = vars.desktop.featuresHiddenText;
};

const setMobileInteractiveElements = () => {
	selectedImage = vars.mobile.selectedImage;
	unselectedImages = vars.mobile.unselectedImages;
	imageSelectors = vars.mobile.imageSelectors;
	rockSelector = vars.mobile.rockSelector;
	woodSelector = vars.mobile.woodSelector;
	sizes = vars.mobile.sizes;
	featuresItems = vars.mobile.featuresItems;
	toggleFeaturesText = vars.mobile.toggleFeaturesText;
	featuresHiddenText = vars.mobile.featuresHiddenText;
};

export default listenWidth;
