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

export default toggleOutroText;
