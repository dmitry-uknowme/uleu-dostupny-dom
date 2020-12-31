const modals = () => {
	openModal('.main__btn', 'Позвонить мне');
	openModal('.projects .projects__previewDescBtn', 'Позвонить мне');
	openModal('.mobileProjects .projects__previewDescBtn', 'Позвонить мне');
	openModal('.gallery__descBtn', 'Скачать Проект');
	openModal('.mobileGallery .gallery__descBtn', 'Позвонить мне');
};

export default modals;

const openModal = (className, btnText, ...params) => {
	const modalContainer = document.querySelector('.modal');
	const modalWindow = `<div class="modal__overlay">
    <div class="modal__window">
        <form class="modal__form">
            <h2 class="modal__formTitle">
                ${
									params[0] ||
									`Для того что бы получить расчёт перейдите в 
									удобный <b>для вас мессенджер :</b>`
								}

            </h2>
            <div class="modal__formMessengers">
                <img class="modal__formMessengersItem" src="./img/modal/modal__telegram.png" />
                <img class="modal__formMessengersItem" src="./img/modal/modal__whatsapp.png" />
            </div>
            <h3 class="modal__formSubtitle">
				${
					params[1] ||
					`Или же введите номер телефона для получения прайса в
					любом
                	удобном для вас мессенджере`
				}
            </h3>
            <div class="modal__formRow">
                <label class="modal__formNameLabel">${
									params[2] || `имя`
								}</label>
                <input class="modal__formName" type="text" />
                <label class="modal__formPhoneLabel">${
									params[3] || `телефон`
								}</label>
                <input class="modal__formPhone" type="text" />
                <a type="button" class="modal__formBtn formBtn btn"
				>${btnText}
				<svg
					class="btn-waves"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					width="200%"
					height="150%"
					preserveAspectRatio="none"
				>
					<defs>
						<path
							id="gentle-wave"
							d="M261.77,2c-9.37,0-38.53,18-91.63,18h-83C55.94,20,26.79,38-4.45,38"
						/>
						<filter id="shadow2">
							<feDropShadow
								dx="0"
								dy="-1"
								stdDeviation="1"
								flood-color="aqua"
								height="50"
							/>
						</filter>
						<filter id="shadow1">
							<feDropShadow
								dx="0"
								dy="1"
								stdDeviation="1"
								flood-color="green"
							/>
						</filter>
					</defs>

					<use
						class="btn-wave"
						xlink:href="#gentle-wave"
						x="50"
						y="0"
						fill="#fff"
						fill-opacity="0"
						stroke="#fff"
						stroke-width="1"
					/>
					<image
						class="btn-glow"
						width="279"
						height="52"
						xlink:href="data:image/png;base64,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"
					/>
				</svg>

				<div class="btn-text">${btnText}</div>
			</a>
            </div>
        </form>
        <div class="modal__close" onclick="const modalContainer = document.querySelector('.modal');modalContainer.innerHTML = '';">
            ×
        </div>
    </div>
</div>`;
	const el = document.querySelector(`${className}`);
	el.addEventListener('click', (e) => {
		modalContainer.innerHTML = modalWindow;
	});
};
