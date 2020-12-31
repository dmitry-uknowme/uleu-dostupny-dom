const scroll = () => {
	listenAnchors();
	window.addEventListener('scroll', () => {
		setProgressCircle();
	});
};

export default scroll;

const setProgressCircle = () => {
	let circle = document.querySelector('.progress-circle__range');
	let scrollTop = window.scrollY;
	let windowHeight = window.innerHeight;
	let siteHeight = document.documentElement.scrollHeight;
	let percentageProgress = Math.floor(
		(scrollTop / (siteHeight - windowHeight)) * 100
	);

	let radius = circle.getAttribute('r');
	let circleLength = 2 * Math.PI * radius;
	circle.setAttribute('stroke-dasharray', circleLength);
	circle.setAttribute(
		'stroke-dashoffset',
		circleLength - (circleLength * percentageProgress) / 100
	);
	if (percentageProgress >= 50) {
		circle.setAttribute('fill-opacity', '1');
	} else {
		circle.setAttribute('fill-opacity', '0');
	}
};

const listenAnchors = () => {
	var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
		V = 1; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
	var t, start;
	for (var i = 0; i < linkNav.length; i++) {
		linkNav[i].addEventListener(
			'click',
			function (e) {
				//по клику на ссылку
				e.preventDefault(); //отменяем стандартное поведение
				var w = window.pageYOffset, // производим прокрутка прокрутка
					hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
				(t = document.querySelector(hash).getBoundingClientRect().top), // отступ от окна браузера до id
					(start = null);
				requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
				console.log(hash);
				function step(time) {
					time = time * 5;
					if (start === null) start = time;
					var progress = time - start,
						r =
							t < 0
								? Math.max(w - progress / V, w + t)
								: Math.min(w + progress / V, w + t);
					window.scrollTo(0, r);
					if (r != w + t) {
						requestAnimationFrame(step);
					} else {
						location.hash = hash; // URL с хэшем
					}
				}
				document.querySelector(hash).style.borderTop = '2px solid lime';
				setTimeout(() => {
					document.querySelector(hash).style.borderTop = 'none';
				}, 4000);
			},
			false
		);
	}
};
