import './modules/swiper';
import './modules/aos';
import scroll from './modules/scroll';
import toggleOutroText from './modules/toggleText/toggleOutroText';
import listenWidth from './modules/mediaQueries';

document.addEventListener('DOMContentLoaded', (e) => {
	console.log('DOM fully loaded and parsed');
	listenWidth();
	scroll();
	toggleOutroText();
});
