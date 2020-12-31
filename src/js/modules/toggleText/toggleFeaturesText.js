const toggleFeaturesDesc = (
	featuresItems,
	toggleFeaturesText,
	featuresHiddenText
) => {
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
};

export default toggleFeaturesDesc;
