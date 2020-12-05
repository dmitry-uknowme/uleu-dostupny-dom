const carousel = document.querySelector('.owl-carousel')
const featuresSection = document.querySelector('.features')


function windowWidthChange(mq) {
  if (mq.matches) {
    console.log('window width less than 500px');
  } else {
    console.log('window width is more than 500px');
  }
}
const $small = '(max-width: 500px)';
const mq = window.matchMedia($small);
mq.addListener(windowWidthChange);

const $xs = '(max-width: 320px)';
const $sm = '(max-width: 575px)';
const $md = '(max-width: 767px)';
const $lg = '(max-width: 991px)';
const $xl = '(max-width: 1199px)';

